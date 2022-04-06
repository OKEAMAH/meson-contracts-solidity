import type { BigNumber, BigNumberish } from '@ethersproject/bignumber'
import type { CallOverrides } from '@ethersproject/contracts'
import type { Wallet } from '@ethersproject/wallet'
import type { JsonRpcProvider, Listener } from '@ethersproject/providers'
import type { Meson } from '@mesonfi/contract-types'

import { Contract } from '@ethersproject/contracts'
import { WebSocketProvider } from '@ethersproject/providers'
import { pack } from '@ethersproject/solidity'
import { AddressZero } from '@ethersproject/constants'
import { isAddress } from '@ethersproject/address'
import { ERC20 } from '@mesonfi/contract-abis'

import { AbstractChainApis, EthersChainApis, Receipt } from './ChainApis'
import { Swap } from './Swap'
import { SwapWithSigner } from './SwapWithSigner'
import { SwapSigner } from './SwapSigner'
import { SignedSwapRequest, SignedSwapRelease } from './SignedSwap'
import { timer } from './utils'

export enum PostedSwapStatus {
  NoneOrAfterRunning = 0, // nothing found on chain
  Requested = 0b0001,
  Bonded = 0b0010,
  Executed = 0b0100,
  Cancelled = 0b0101,
  Error = 0b1000,
  ErrorExpired = 0b1001,
  ErrorExpiredButBonded = 0b1010,
  ErrorMadeByOtherInitiator = 0b1100,
}

export enum LockedSwapStatus {
  NoneOrAfterRunning = 0, // nothing found on chain
  Locked = 0b0001,
  Released = 0b0100,
  Unlocked = 0b0101,
  Error = 0b1000,
  ErrorExpired = 0b1001,
}

export interface PartialSwapData {
  amount: BigNumberish,
  salt?: string,
  fee: BigNumberish,
  inToken: number,
  outToken: number,
}

export class MesonClient {
  readonly mesonInstance: Meson
  readonly chainApis: AbstractChainApis
  readonly shortCoinType: string

  protected _signer: SwapSigner | null = null
  protected _tokens: string[] = []

  static async Create(mesonInstance: Meson, swapSigner?: SwapSigner) {
    const shortCoinType = await mesonInstance.getShortCoinType()
    const client = new MesonClient(mesonInstance, shortCoinType)
    if (swapSigner) {
      client.setSwapSigner(swapSigner)
    }
    await client._getSupportedTokens()
    return client
  }

  constructor(mesonInstance: any, shortCoinType: string) {
    this.mesonInstance = mesonInstance as Meson
    this.shortCoinType = shortCoinType
    this.chainApis = new EthersChainApis(this.provider as JsonRpcProvider)
  }

  get address(): string {
    return this.mesonInstance.address.toLowerCase()
  }

  get provider(): JsonRpcProvider {
    return this.mesonInstance.provider as JsonRpcProvider
  }

  parseTransaction(tx: { input: string, value?: BigNumberish }) {
    return this.mesonInstance.interface.parseTransaction({ data: tx.input, value: tx.value })  
  }

  onEvent(listener: Listener) {
    this.mesonInstance.on('*', listener)
  }

  dispose() {
    this.mesonInstance.removeAllListeners()
    this.mesonInstance.provider.removeAllListeners()
    if (this.mesonInstance.provider instanceof WebSocketProvider) {
      this.mesonInstance.provider._websocket.removeAllListeners()
    }
  }

  setSwapSigner(swapSigner: SwapSigner) {
    this._signer = swapSigner
  }

  async _getSupportedTokens() {
    const tokens = await this.mesonInstance.supportedTokens()
    this._tokens = tokens.map(addr => addr.toLowerCase())
  }

  async detectNetwork() {
    return await this.provider.detectNetwork()
  }

  token(index: number) {
    if (!index) {
      throw new Error(`Token index cannot be zero`)
    }
    return this._tokens[index - 1] || ''
  }

  getTokenIndex(addr: string) {
    return 1 + this._tokens.indexOf(addr.toLowerCase())
  }

  async getBalance(addr: string) {
    return await this.provider.getBalance(addr)
  }

  async balanceOfToken(token: string, addr: string) {
    const contract = new Contract(token, ERC20.abi, this.provider)
    return await contract.balanceOf(addr)
  }

  async allowanceOfToken(token: string, addr: string) {
    const contract = new Contract(token, ERC20.abi, this.provider)
    return await contract.allowance(addr, this.address)
  }

  async approveToken(token: string, value: BigNumberish) {
    const contract = new Contract(token, ERC20.abi, this.provider)
    return await contract.approve(this.address, value)
  }

  async getShortCoinType() {
    return await this.mesonInstance.getShortCoinType()
  }

  async indexOfAddress(providerAddress: string) {
    return await this.mesonInstance.indexOfAddress(providerAddress)
  }

  async balanceOf(token: string, providerAddress: string) {
    return await this.mesonInstance.balanceOf(token, providerAddress)
  }

  requestSwap(swap: PartialSwapData, outChain: string, lockPeriod: number = 5400) {
    if (!this._signer) {
      throw new Error('No swap signer assigned')
    }
    return new SwapWithSigner({
      ...swap,
      inChain: this.shortCoinType,
      outChain,
      expireTs: Math.floor(Date.now() / 1000) + lockPeriod,
    }, this._signer)
  }

  async depositAndRegister(token: string, amount: BigNumberish, providerIndex: string) {
    const tokenIndex = this.getTokenIndex(token)
    if (!tokenIndex) {
      throw new Error(`Token not supported`)
    }
    return this._depositAndRegister(amount, tokenIndex, providerIndex)
  }

  async _depositAndRegister(amount: BigNumberish, tokenIndex: number, providerIndex: string) {
    const balanceIndex = pack(['uint8', 'uint40'], [tokenIndex, providerIndex])
    return this.mesonInstance.depositAndRegister(amount, balanceIndex)
  }

  async deposit(token: string, amount: BigNumberish) {
    const tokenIndex = this.getTokenIndex(token)
    if (!tokenIndex) {
      throw new Error(`Token not supported`)
    }
    const providerAddress = await this.mesonInstance.signer.getAddress()
    const providerIndex = await this.mesonInstance.indexOfAddress(providerAddress)
    if (!providerIndex) {
      throw new Error(`Address ${providerAddress} not registered. Please call depositAndRegister first.`)
    }
    return this._deposit(amount, tokenIndex, providerIndex)
  }

  async _deposit(amount: BigNumberish, tokenIndex: number, providerIndex: number) {
    const balanceIndex = pack(['uint8', 'uint40'], [tokenIndex, providerIndex])
    return this.mesonInstance.deposit(amount, balanceIndex)
  }

  async postSwap(signedRequest: SignedSwapRequest) {
    const providerAddress = await this.mesonInstance.signer.getAddress()
    const providerIndex = await this.mesonInstance.indexOfAddress(providerAddress)
    if (!providerIndex) {
      throw new Error(`Address ${providerAddress} not registered. Please call depositAndRegister first.`)
    }
    return this.mesonInstance.postSwap(
      signedRequest.encoded,
      signedRequest.signature[0],
      signedRequest.signature[1],
      signedRequest.signature[2],
      pack(['address', 'uint40'], [signedRequest.initiator, providerIndex])
    )
  }

  async bondSwap(encoded: BigNumberish) {
    const providerAddress = await this.mesonInstance.signer.getAddress()
    const providerIndex = await this.mesonInstance.indexOfAddress(providerAddress)
    if (!providerIndex) {
      throw new Error(`Address ${providerAddress} not registered. Please call depositAndRegister first.`)
    }
    return this.mesonInstance.bondSwap(encoded, providerIndex)
  }

  async lock(signedRequest: SignedSwapRequest) {
    return this.mesonInstance.lock(signedRequest.encoded, ...signedRequest.signature, signedRequest.initiator)
  }

  async unlock(signedRequest: SignedSwapRequest) {
    return this.mesonInstance.unlock(signedRequest.encoded, signedRequest.initiator)
  }

  async release(signedRelease: SignedSwapRelease) {
    if (isAddress(signedRelease.recipient)) {
      return this.mesonInstance.release(
        signedRelease.encoded,
        ...signedRelease.signature,
        signedRelease.initiator,
        signedRelease.recipient
      )
    }

    const typeHash = signedRelease.getTypeHash()
    return this.mesonInstance.release2(
      signedRelease.encoded,
      ...signedRelease.signature,
      signedRelease.initiator,
      signedRelease.recipient,
      typeHash
    )
  }

  async executeSwap(signedRelease: SignedSwapRelease, depositToPool: boolean = false) {
    return this.mesonInstance.executeSwap(
      signedRelease.encoded,
      ...signedRelease.signature,
      signedRelease.recipient,
      depositToPool
    )
  }

  async cancelSwap(encodedSwap: string, signer?: Wallet) {
    if (signer) {
      return await this.mesonInstance.connect(signer).cancelSwap(encodedSwap)
    }
    return await this.mesonInstance.cancelSwap(encodedSwap)
  }

  async wait(txHash: string, confirmations: number = 1, ms: number = 60_000) {
    if (!txHash) {
      throw new Error(`Invalid transaction hash: ${txHash}`)
    } else if (!(confirmations >= 1)) {
      throw new Error(`Invalid confirmations: ${confirmations}`)
    }

    let receipt
    let txBlockNumber
    const getTxBlockNumber = async () => {
      try {
        receipt = await this.getReceipt(txHash)
        txBlockNumber = Number(receipt.blockNumber)
      } catch {}
    }

    return new Promise<Receipt>((resolve, reject) => {
      const done = (error?) => {
        this.provider.off('block', onBlock)

        if (error) {
          reject(error)
        } else {
          resolve(receipt)
        }
      }

      const onBlock = async blockNumber => {
        if (!txBlockNumber) {
          await getTxBlockNumber()
        }
        if (!txBlockNumber) {
          return
        }
        if (confirmations === 1) {
          return done()
        }
        if (blockNumber - txBlockNumber + 1 >= confirmations) {
          await getTxBlockNumber()
          if (blockNumber - txBlockNumber + 1 >= confirmations) {
            return done()
          }
        }
      }

      this.provider.on('block', onBlock)

      timer(ms).then(() => done(new Error('Time out')))
    })
  }

  async getReceipt(txHash: string) {
    return await this.chainApis.getReceipt(txHash)
  }

  async isSwapPosted(encoded: string | BigNumber) {
    const filter = this.mesonInstance.filters.SwapPosted(encoded)
    const events = await this.mesonInstance.queryFilter(filter)
    return events.length > 0
  }

  async isSwapBonded(encoded: string | BigNumber) {
    const filter = this.mesonInstance.filters.SwapBonded(encoded)
    const events = await this.mesonInstance.queryFilter(filter)
    return events.length > 0
  }

  async isSwapLocked(encoded: string | BigNumber) {
    const filter = this.mesonInstance.filters.SwapLocked(encoded)
    const events = await this.mesonInstance.queryFilter(filter)
    return events.length > 0
  }

  async isSwapCancelled(encoded: string | BigNumber) {
    const filter = this.mesonInstance.filters.SwapCancelled(encoded)
    const events = await this.mesonInstance.queryFilter(filter)
    return events.length > 0
  }

  async isSwapReleased(encoded: string | BigNumber) {
    const filter = this.mesonInstance.filters.SwapReleased(encoded)
    const events = await this.mesonInstance.queryFilter(filter)
    return events.length > 0
  }

  async _getPostedSwap(encoded: string | BigNumber, overrides: CallOverrides) {
    const { initiator, provider, executed } = await this.mesonInstance.getPostedSwap(encoded, overrides)
    return {
      executed,
      initiator: initiator === AddressZero ? undefined : initiator,
      provider: provider === AddressZero ? undefined : provider
    }
  }

  async _getLockedSwap(encoded: string | BigNumber, initiator: string, overrides: CallOverrides) {
    const { provider, until } = await this.mesonInstance.getLockedSwap(encoded, initiator, overrides)
    return {
      until,
      provider: provider === AddressZero ? undefined : provider
    }
  }

  async getPostedSwap(encoded: string | BigNumber, initiatorToCheck?: string, block?: number): Promise<{
    status: PostedSwapStatus,
    initiator?: string,
    provider?: string,
  }> {
    let expired
    try {
      const swap = Swap.decode(encoded)
      if (swap.expireTs * 1000 < Date.now()) {
        expired = true
      }
    } catch (err: any) {
      throw new Error('Invalid encoded. ' + err.message)
    }

    const overrides: CallOverrides = {}
    if (typeof block === 'number') {
      if (block <= 0) {
        const blockNumber = await this.mesonInstance.provider.getBlockNumber()
        overrides.blockTag = blockNumber + block
      } else {
        overrides.blockTag = block
      }
    }
    const { initiator, provider, executed } = await this._getPostedSwap(encoded, overrides)
    if (executed) {
      return { status: PostedSwapStatus.Executed }
    } else if (!initiator) {
      return { status: PostedSwapStatus.NoneOrAfterRunning }
    } else if (initiatorToCheck && initiatorToCheck.toLowerCase() !== initiator.toLowerCase()) {
      return { status: PostedSwapStatus.ErrorMadeByOtherInitiator }
    } else if (!provider) {
      if (expired) {
        return { status: PostedSwapStatus.ErrorExpired, initiator }
      } else {
        return { status: PostedSwapStatus.Requested, initiator }
      }
    } else {
      if (expired) {
        return { status: PostedSwapStatus.ErrorExpiredButBonded, initiator, provider }
      } else {
        return { status: PostedSwapStatus.Bonded, initiator, provider }
      }
    }
  }

  async getLockedSwap(encoded: string | BigNumber, initiator: string, block?: number): Promise<{
    status: LockedSwapStatus,
    provider?: string,
    until?: number
  }> {
    const overrides: CallOverrides = {}
    if (typeof block === 'number') {
      if (block <= 0) {
        const blockNumber = await this.mesonInstance.provider.getBlockNumber()
        overrides.blockTag = blockNumber + block
      } else {
        overrides.blockTag = block
      }
    }
    const { provider, until } = await this._getLockedSwap(encoded, initiator, overrides)
    if (!until) {
      return { status: LockedSwapStatus.NoneOrAfterRunning }
    } else if (until * 1000 < Date.now()) {
      return { status: LockedSwapStatus.ErrorExpired, provider, until }
    } else {
      return { status: LockedSwapStatus.Locked, provider, until }
    }
  }
}
