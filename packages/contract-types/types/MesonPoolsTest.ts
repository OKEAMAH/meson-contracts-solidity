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
    "addressOfIndex(uint40)": FunctionFragment;
    "balanceOf(address,address)": FunctionFragment;
    "deposit(uint256,uint48)": FunctionFragment;
    "depositAndRegister(uint256,uint48)": FunctionFragment;
    "getLockedSwap(uint256)": FunctionFragment;
    "getShortCoinType()": FunctionFragment;
    "indexOfAddress(address)": FunctionFragment;
    "indexOfToken(address)": FunctionFragment;
    "lock(uint256,bytes32,bytes32,uint8,address)": FunctionFragment;
    "release(uint256,bytes32,bytes32,uint8,address)": FunctionFragment;
    "supportedTokens()": FunctionFragment;
    "tokenForIndex(uint8)": FunctionFragment;
    "unlock(uint256)": FunctionFragment;
    "withdraw(uint256,uint8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addressOfIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositAndRegister",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLockedSwap",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getShortCoinType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "indexOfAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "indexOfToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lock",
    values: [BigNumberish, BytesLike, BytesLike, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "release",
    values: [BigNumberish, BytesLike, BytesLike, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportedTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenForIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unlock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addressOfIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositAndRegister",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLockedSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getShortCoinType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "indexOfAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "indexOfToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenForIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "SwapLocked(uint256)": EventFragment;
    "SwapReleased(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SwapLocked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapReleased"): EventFragment;
}

export type SwapLockedEvent = TypedEvent<
  [BigNumber],
  { encodedSwap: BigNumber }
>;

export type SwapLockedEventFilter = TypedEventFilter<SwapLockedEvent>;

export type SwapReleasedEvent = TypedEvent<
  [BigNumber],
  { encodedSwap: BigNumber }
>;

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
    addressOfIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    balanceOf(
      token: string,
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    deposit(
      amount: BigNumberish,
      balanceIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositAndRegister(
      amount: BigNumberish,
      balanceIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getLockedSwap(
      encodedSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, number] & {
        initiator: string;
        provider: string;
        until: number;
      }
    >;

    getShortCoinType(overrides?: CallOverrides): Promise<[string]>;

    indexOfAddress(arg0: string, overrides?: CallOverrides): Promise<[number]>;

    indexOfToken(token: string, overrides?: CallOverrides): Promise<[number]>;

    lock(
      encodedSwap: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      initiator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    release(
      encodedSwap: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportedTokens(
      overrides?: CallOverrides
    ): Promise<[string[]] & { tokens: string[] }>;

    tokenForIndex(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    unlock(
      encodedSwap: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      amount: BigNumberish,
      tokenIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addressOfIndex(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  balanceOf(
    token: string,
    addr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  deposit(
    amount: BigNumberish,
    balanceIndex: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositAndRegister(
    amount: BigNumberish,
    balanceIndex: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getLockedSwap(
    encodedSwap: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, number] & {
      initiator: string;
      provider: string;
      until: number;
    }
  >;

  getShortCoinType(overrides?: CallOverrides): Promise<string>;

  indexOfAddress(arg0: string, overrides?: CallOverrides): Promise<number>;

  indexOfToken(token: string, overrides?: CallOverrides): Promise<number>;

  lock(
    encodedSwap: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    v: BigNumberish,
    initiator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  release(
    encodedSwap: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    v: BigNumberish,
    recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportedTokens(overrides?: CallOverrides): Promise<string[]>;

  tokenForIndex(
    tokenIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  unlock(
    encodedSwap: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    amount: BigNumberish,
    tokenIndex: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addressOfIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    balanceOf(
      token: string,
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(
      amount: BigNumberish,
      balanceIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    depositAndRegister(
      amount: BigNumberish,
      balanceIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getLockedSwap(
      encodedSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, number] & {
        initiator: string;
        provider: string;
        until: number;
      }
    >;

    getShortCoinType(overrides?: CallOverrides): Promise<string>;

    indexOfAddress(arg0: string, overrides?: CallOverrides): Promise<number>;

    indexOfToken(token: string, overrides?: CallOverrides): Promise<number>;

    lock(
      encodedSwap: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      initiator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    release(
      encodedSwap: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportedTokens(overrides?: CallOverrides): Promise<string[]>;

    tokenForIndex(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    unlock(encodedSwap: BigNumberish, overrides?: CallOverrides): Promise<void>;

    withdraw(
      amount: BigNumberish,
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "SwapLocked(uint256)"(encodedSwap?: null): SwapLockedEventFilter;
    SwapLocked(encodedSwap?: null): SwapLockedEventFilter;

    "SwapReleased(uint256)"(encodedSwap?: null): SwapReleasedEventFilter;
    SwapReleased(encodedSwap?: null): SwapReleasedEventFilter;
  };

  estimateGas: {
    addressOfIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(
      token: string,
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(
      amount: BigNumberish,
      balanceIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositAndRegister(
      amount: BigNumberish,
      balanceIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getLockedSwap(
      encodedSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getShortCoinType(overrides?: CallOverrides): Promise<BigNumber>;

    indexOfAddress(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    indexOfToken(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    lock(
      encodedSwap: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      initiator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    release(
      encodedSwap: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportedTokens(overrides?: CallOverrides): Promise<BigNumber>;

    tokenForIndex(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unlock(
      encodedSwap: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      amount: BigNumberish,
      tokenIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addressOfIndex(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      token: string,
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposit(
      amount: BigNumberish,
      balanceIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositAndRegister(
      amount: BigNumberish,
      balanceIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getLockedSwap(
      encodedSwap: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getShortCoinType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    indexOfAddress(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    indexOfToken(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lock(
      encodedSwap: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      initiator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    release(
      encodedSwap: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportedTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenForIndex(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    unlock(
      encodedSwap: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      amount: BigNumberish,
      tokenIndex: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
