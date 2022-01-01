/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MesonPoolsTestInterface extends utils.Interface {
  functions: {
    "addTokenToSwapList(address)": FunctionFragment;
    "balanceOf(address,address)": FunctionFragment;
    "challenge(address,bytes,uint256,bytes,address,address,uint256)": FunctionFragment;
    "deposit(address,uint256)": FunctionFragment;
    "getChainId()": FunctionFragment;
    "getCurrentChain()": FunctionFragment;
    "hasLockingSwap(bytes32)": FunctionFragment;
    "lock(bytes,address,address,bytes32,bytes32,uint8)": FunctionFragment;
    "lockingSwaps(bytes32)": FunctionFragment;
    "release(bytes32,uint256,bytes32,bytes32,uint8)": FunctionFragment;
    "supportedTokens(address)": FunctionFragment;
    "totalDemandFor(address)": FunctionFragment;
    "totalSupplyFor(address)": FunctionFragment;
    "unlock(bytes32)": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addTokenToSwapList",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "challenge",
    values: [
      string,
      BytesLike,
      BigNumberish,
      BytesLike,
      string,
      string,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentChain",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hasLockingSwap",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lock",
    values: [BytesLike, string, string, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lockingSwaps",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "release",
    values: [BytesLike, BigNumberish, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportedTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalDemandFor",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupplyFor",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "unlock", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addTokenToSwapList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "challenge", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentChain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasLockingSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lockingSwaps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalDemandFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupplyFor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "SwapLocked(bytes32,address)": EventFragment;
    "SwapReleased(bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SwapLocked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapReleased"): EventFragment;
}

export type SwapLockedEvent = TypedEvent<
  [string, string],
  { swapId: string; provider: string }
>;

export type SwapLockedEventFilter = TypedEventFilter<SwapLockedEvent>;

export type SwapReleasedEvent = TypedEvent<[string], { swapId: string }>;

export type SwapReleasedEventFilter = TypedEventFilter<SwapReleasedEvent>;

export interface MesonPoolsTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MesonPoolsTestInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addTokenToSwapList(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    challenge(
      provider: string,
      signature: BytesLike,
      metaAmount: BigNumberish,
      inToken: BytesLike,
      outToken: string,
      receiver: string,
      ts: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getChainId(overrides?: CallOverrides): Promise<[number]>;

    getCurrentChain(overrides?: CallOverrides): Promise<[string]>;

    hasLockingSwap(
      swapId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    lock(
      encodedSwap: BytesLike,
      token: string,
      recipient: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lockingSwaps(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, string, BigNumber] & {
        initiator: string;
        provider: string;
        token: string;
        amount: BigNumber;
        recipient: string;
        until: BigNumber;
      }
    >;

    release(
      swapId: BytesLike,
      metaAmount: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportedTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    totalDemandFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalSupplyFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    unlock(
      swapId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addTokenToSwapList(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  challenge(
    provider: string,
    signature: BytesLike,
    metaAmount: BigNumberish,
    inToken: BytesLike,
    outToken: string,
    receiver: string,
    ts: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getChainId(overrides?: CallOverrides): Promise<number>;

  getCurrentChain(overrides?: CallOverrides): Promise<string>;

  hasLockingSwap(
    swapId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  lock(
    encodedSwap: BytesLike,
    token: string,
    recipient: string,
    r: BytesLike,
    s: BytesLike,
    v: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lockingSwaps(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber, string, BigNumber] & {
      initiator: string;
      provider: string;
      token: string;
      amount: BigNumber;
      recipient: string;
      until: BigNumber;
    }
  >;

  release(
    swapId: BytesLike,
    metaAmount: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    v: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportedTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  totalDemandFor(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  totalSupplyFor(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  unlock(
    swapId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addTokenToSwapList(token: string, overrides?: CallOverrides): Promise<void>;

    balanceOf(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    challenge(
      provider: string,
      signature: BytesLike,
      metaAmount: BigNumberish,
      inToken: BytesLike,
      outToken: string,
      receiver: string,
      ts: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    deposit(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getChainId(overrides?: CallOverrides): Promise<number>;

    getCurrentChain(overrides?: CallOverrides): Promise<string>;

    hasLockingSwap(
      swapId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    lock(
      encodedSwap: BytesLike,
      token: string,
      recipient: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lockingSwaps(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, string, BigNumber] & {
        initiator: string;
        provider: string;
        token: string;
        amount: BigNumber;
        recipient: string;
        until: BigNumber;
      }
    >;

    release(
      swapId: BytesLike,
      metaAmount: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    supportedTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    totalDemandFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupplyFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unlock(swapId: BytesLike, overrides?: CallOverrides): Promise<void>;

    withdraw(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "SwapLocked(bytes32,address)"(
      swapId?: null,
      provider?: null
    ): SwapLockedEventFilter;
    SwapLocked(swapId?: null, provider?: null): SwapLockedEventFilter;

    "SwapReleased(bytes32)"(swapId?: null): SwapReleasedEventFilter;
    SwapReleased(swapId?: null): SwapReleasedEventFilter;
  };

  estimateGas: {
    addTokenToSwapList(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    challenge(
      provider: string,
      signature: BytesLike,
      metaAmount: BigNumberish,
      inToken: BytesLike,
      outToken: string,
      receiver: string,
      ts: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getChainId(overrides?: CallOverrides): Promise<BigNumber>;

    getCurrentChain(overrides?: CallOverrides): Promise<BigNumber>;

    hasLockingSwap(
      swapId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lock(
      encodedSwap: BytesLike,
      token: string,
      recipient: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lockingSwaps(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    release(
      swapId: BytesLike,
      metaAmount: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportedTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalDemandFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupplyFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unlock(
      swapId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addTokenToSwapList(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    challenge(
      provider: string,
      signature: BytesLike,
      metaAmount: BigNumberish,
      inToken: BytesLike,
      outToken: string,
      receiver: string,
      ts: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getChainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCurrentChain(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hasLockingSwap(
      swapId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lock(
      encodedSwap: BytesLike,
      token: string,
      recipient: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lockingSwaps(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    release(
      swapId: BytesLike,
      metaAmount: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportedTokens(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalDemandFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupplyFor(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unlock(
      swapId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
