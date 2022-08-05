/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface MesonStatesInterface extends utils.Interface {
  functions: {
    "getShortCoinType()": FunctionFragment;
    "indexOfToken(address)": FunctionFragment;
    "ownerOfPool(uint40)": FunctionFragment;
    "poolOfAuthorizedAddr(address)": FunctionFragment;
    "poolTokenBalance(address,address)": FunctionFragment;
    "serviceFeeCollected(uint8)": FunctionFragment;
    "supportedTokens()": FunctionFragment;
    "tokenForIndex(uint8)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getShortCoinType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "indexOfToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerOfPool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "poolOfAuthorizedAddr",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "poolTokenBalance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "serviceFeeCollected",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportedTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenForIndex",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getShortCoinType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "indexOfToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownerOfPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "poolOfAuthorizedAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "poolTokenBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "serviceFeeCollected",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenForIndex",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MesonStates extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MesonStatesInterface;

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
    getShortCoinType(overrides?: CallOverrides): Promise<[string]>;

    indexOfToken(token: string, overrides?: CallOverrides): Promise<[number]>;

    ownerOfPool(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    poolOfAuthorizedAddr(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[number]>;

    poolTokenBalance(
      token: string,
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    serviceFeeCollected(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    supportedTokens(
      overrides?: CallOverrides
    ): Promise<[string[]] & { tokens: string[] }>;

    tokenForIndex(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  getShortCoinType(overrides?: CallOverrides): Promise<string>;

  indexOfToken(token: string, overrides?: CallOverrides): Promise<number>;

  ownerOfPool(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  poolOfAuthorizedAddr(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<number>;

  poolTokenBalance(
    token: string,
    addr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  serviceFeeCollected(
    tokenIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  supportedTokens(overrides?: CallOverrides): Promise<string[]>;

  tokenForIndex(
    tokenIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    getShortCoinType(overrides?: CallOverrides): Promise<string>;

    indexOfToken(token: string, overrides?: CallOverrides): Promise<number>;

    ownerOfPool(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    poolOfAuthorizedAddr(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<number>;

    poolTokenBalance(
      token: string,
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    serviceFeeCollected(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportedTokens(overrides?: CallOverrides): Promise<string[]>;

    tokenForIndex(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getShortCoinType(overrides?: CallOverrides): Promise<BigNumber>;

    indexOfToken(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    ownerOfPool(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolOfAuthorizedAddr(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolTokenBalance(
      token: string,
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    serviceFeeCollected(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    supportedTokens(overrides?: CallOverrides): Promise<BigNumber>;

    tokenForIndex(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getShortCoinType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    indexOfToken(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ownerOfPool(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolOfAuthorizedAddr(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolTokenBalance(
      token: string,
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    serviceFeeCollected(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    supportedTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenForIndex(
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
