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

export interface IMesonPoolsInterface extends utils.Interface {
  functions: {
    "challenge(address,bytes,uint256,bytes,address,address,uint256)": FunctionFragment;
    "deposit(address,uint256)": FunctionFragment;
    "lock(bytes,address,address,bytes32,bytes32,uint8)": FunctionFragment;
    "release(bytes32,uint256,bytes32,bytes32,uint8)": FunctionFragment;
    "unlock(bytes32)": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
  };

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
    functionFragment: "lock",
    values: [BytesLike, string, string, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "release",
    values: [BytesLike, BigNumberish, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "unlock", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "challenge", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
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

export interface IMesonPools extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMesonPoolsInterface;

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

    lock(
      encodedSwap: BytesLike,
      outToken: string,
      recipient: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    release(
      swapId: BytesLike,
      metaAmount: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

  lock(
    encodedSwap: BytesLike,
    outToken: string,
    recipient: string,
    r: BytesLike,
    s: BytesLike,
    v: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  release(
    swapId: BytesLike,
    metaAmount: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    v: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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

    lock(
      encodedSwap: BytesLike,
      outToken: string,
      recipient: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    release(
      swapId: BytesLike,
      metaAmount: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

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

    lock(
      encodedSwap: BytesLike,
      outToken: string,
      recipient: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    release(
      swapId: BytesLike,
      metaAmount: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
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

    lock(
      encodedSwap: BytesLike,
      outToken: string,
      recipient: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    release(
      swapId: BytesLike,
      metaAmount: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
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
