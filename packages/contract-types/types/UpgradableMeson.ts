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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface UpgradableMesonInterface extends utils.Interface {
  functions: {
    "balanceOf(address,address)": FunctionFragment;
    "cancelSwap(bytes32)": FunctionFragment;
    "challenge(address,bytes,uint256,bytes,address,address,uint256)": FunctionFragment;
    "deposit(address,uint256)": FunctionFragment;
    "executeSwap(bytes32,bytes32,bytes32,uint8)": FunctionFragment;
    "getCoinType()": FunctionFragment;
    "initialize(address[])": FunctionFragment;
    "lock(bytes,address,address,bytes32,bytes32,uint8)": FunctionFragment;
    "lockingSwaps(bytes32)": FunctionFragment;
    "postSwap(bytes,address,address,bytes32,bytes32,uint8)": FunctionFragment;
    "release(bytes32,uint256,bytes32,bytes32,uint8)": FunctionFragment;
    "requests(bytes32)": FunctionFragment;
    "supportedTokens(address)": FunctionFragment;
    "totalDemandFor(address)": FunctionFragment;
    "totalSupplyFor(address)": FunctionFragment;
    "unlock(bytes32)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
    "withdraw(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelSwap",
    values: [BytesLike]
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
    functionFragment: "executeSwap",
    values: [BytesLike, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCoinType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string[]]
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
    functionFragment: "postSwap",
    values: [BytesLike, string, string, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "release",
    values: [BytesLike, BigNumberish, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "requests", values: [BytesLike]): string;
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
  encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cancelSwap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "challenge", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCoinType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lockingSwaps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "postSwap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "requests", data: BytesLike): Result;
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
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "SwapCancelled(bytes32)": EventFragment;
    "SwapExecuted(bytes32)": EventFragment;
    "SwapLocked(bytes32,address)": EventFragment;
    "SwapPosted(bytes32,uint256,uint256,address)": EventFragment;
    "SwapReleased(bytes32)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapLocked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapPosted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapReleased"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export type AdminChangedEvent = TypedEvent<
  [string, string],
  { previousAdmin: string; newAdmin: string }
>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export type BeaconUpgradedEvent = TypedEvent<[string], { beacon: string }>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export type SwapCancelledEvent = TypedEvent<[string], { swapId: string }>;

export type SwapCancelledEventFilter = TypedEventFilter<SwapCancelledEvent>;

export type SwapExecutedEvent = TypedEvent<[string], { swapId: string }>;

export type SwapExecutedEventFilter = TypedEventFilter<SwapExecutedEvent>;

export type SwapLockedEvent = TypedEvent<
  [string, string],
  { swapId: string; provider: string }
>;

export type SwapLockedEventFilter = TypedEventFilter<SwapLockedEvent>;

export type SwapPostedEvent = TypedEvent<
  [string, BigNumber, BigNumber, string],
  { swapId: string; ts: BigNumber; amount: BigNumber; inToken: string }
>;

export type SwapPostedEventFilter = TypedEventFilter<SwapPostedEvent>;

export type SwapReleasedEvent = TypedEvent<[string], { swapId: string }>;

export type SwapReleasedEventFilter = TypedEventFilter<SwapReleasedEvent>;

export type UpgradedEvent = TypedEvent<[string], { implementation: string }>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface UpgradableMeson extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UpgradableMesonInterface;

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
    balanceOf(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    cancelSwap(
      swapId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

    executeSwap(
      swapId: BytesLike,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCoinType(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _supportedTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

    postSwap(
      encodedSwap: BytesLike,
      inToken: string,
      initiator: string,
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

    requests(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, string, BigNumber] & {
        initiator: string;
        provider: string;
        expireTs: BigNumber;
        inToken: string;
        amount: BigNumber;
      }
    >;

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

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  balanceOf(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  cancelSwap(
    swapId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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

  executeSwap(
    swapId: BytesLike,
    r: BytesLike,
    s: BytesLike,
    v: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCoinType(overrides?: CallOverrides): Promise<string>;

  initialize(
    _supportedTokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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

  postSwap(
    encodedSwap: BytesLike,
    inToken: string,
    initiator: string,
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

  requests(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, string, BigNumber] & {
      initiator: string;
      provider: string;
      expireTs: BigNumber;
      inToken: string;
      amount: BigNumber;
    }
  >;

  supportedTokens(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  totalDemandFor(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  totalSupplyFor(token: string, overrides?: CallOverrides): Promise<BigNumber>;

  unlock(
    swapId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeTo(
    newImplementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOf(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cancelSwap(swapId: BytesLike, overrides?: CallOverrides): Promise<void>;

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

    executeSwap(
      swapId: BytesLike,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getCoinType(overrides?: CallOverrides): Promise<string>;

    initialize(
      _supportedTokens: string[],
      overrides?: CallOverrides
    ): Promise<void>;

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

    postSwap(
      encodedSwap: BytesLike,
      inToken: string,
      initiator: string,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    release(
      swapId: BytesLike,
      metaAmount: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    requests(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, string, BigNumber] & {
        initiator: string;
        provider: string;
        expireTs: BigNumber;
        inToken: string;
        amount: BigNumber;
      }
    >;

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

    upgradeTo(
      newImplementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;
    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;

    "BeaconUpgraded(address)"(
      beacon?: string | null
    ): BeaconUpgradedEventFilter;
    BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;

    "SwapCancelled(bytes32)"(swapId?: null): SwapCancelledEventFilter;
    SwapCancelled(swapId?: null): SwapCancelledEventFilter;

    "SwapExecuted(bytes32)"(swapId?: null): SwapExecutedEventFilter;
    SwapExecuted(swapId?: null): SwapExecutedEventFilter;

    "SwapLocked(bytes32,address)"(
      swapId?: null,
      provider?: null
    ): SwapLockedEventFilter;
    SwapLocked(swapId?: null, provider?: null): SwapLockedEventFilter;

    "SwapPosted(bytes32,uint256,uint256,address)"(
      swapId?: null,
      ts?: null,
      amount?: null,
      inToken?: null
    ): SwapPostedEventFilter;
    SwapPosted(
      swapId?: null,
      ts?: null,
      amount?: null,
      inToken?: null
    ): SwapPostedEventFilter;

    "SwapReleased(bytes32)"(swapId?: null): SwapReleasedEventFilter;
    SwapReleased(swapId?: null): SwapReleasedEventFilter;

    "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
    Upgraded(implementation?: string | null): UpgradedEventFilter;
  };

  estimateGas: {
    balanceOf(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cancelSwap(
      swapId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
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

    executeSwap(
      swapId: BytesLike,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCoinType(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _supportedTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
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

    postSwap(
      encodedSwap: BytesLike,
      inToken: string,
      initiator: string,
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

    requests(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

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

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cancelSwap(
      swapId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
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

    executeSwap(
      swapId: BytesLike,
      r: BytesLike,
      s: BytesLike,
      v: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCoinType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _supportedTokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
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

    postSwap(
      encodedSwap: BytesLike,
      inToken: string,
      initiator: string,
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

    requests(
      arg0: BytesLike,
      overrides?: CallOverrides
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

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
