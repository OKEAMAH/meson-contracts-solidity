/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MesonStatesTest,
  MesonStatesTestInterface,
} from "../MesonStatesTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    name: "addressOfIndex",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    name: "checkReleaseSignature",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    name: "checkRequestSignature",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "decodeSwap",
    outputs: [
      {
        internalType: "uint96",
        name: "amount",
        type: "uint96",
      },
      {
        internalType: "uint32",
        name: "salt",
        type: "uint32",
      },
      {
        internalType: "uint40",
        name: "expireTs",
        type: "uint40",
      },
      {
        internalType: "bytes2",
        name: "outChain",
        type: "bytes2",
      },
      {
        internalType: "uint8",
        name: "outTokenIndex",
        type: "uint8",
      },
      {
        internalType: "bytes2",
        name: "inChain",
        type: "bytes2",
      },
      {
        internalType: "uint8",
        name: "inTokenIndex",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint96",
        name: "amount",
        type: "uint96",
      },
      {
        internalType: "uint32",
        name: "salt",
        type: "uint32",
      },
      {
        internalType: "uint40",
        name: "fee",
        type: "uint40",
      },
      {
        internalType: "uint40",
        name: "expireTs",
        type: "uint40",
      },
      {
        internalType: "bytes2",
        name: "outChain",
        type: "bytes2",
      },
      {
        internalType: "uint8",
        name: "outToken",
        type: "uint8",
      },
      {
        internalType: "bytes2",
        name: "inChain",
        type: "bytes2",
      },
      {
        internalType: "uint8",
        name: "inToken",
        type: "uint8",
      },
    ],
    name: "encodeSwap",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getShortCoinType",
    outputs: [
      {
        internalType: "bytes2",
        name: "",
        type: "bytes2",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "indexOfAddress",
    outputs: [
      {
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "indexOfToken",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
    ],
    name: "mesonFeeCollected",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "supportedTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
    ],
    name: "tokenForIndex",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610e85806100206000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c8063e16a567d11610081578063f7888aec1161005b578063f7888aec14610339578063fa5b31b41461034c578063ff3787191461048257600080fd5b8063e16a567d146101fe578063eb397fab14610237578063eba7fb771461030c57600080fd5b80634f139480116100b25780634f1394801461017b578063b002249d1461018e578063b3df5b36146101a357600080fd5b80631aba3a55146100d95780631fdafaf41461011b5780632335093c14610130575b600080fd5b6101006100e7366004610ad3565b60026020526000908152604090205464ffffffffff1681565b60405164ffffffffff90911681526020015b60405180910390f35b61012e610129366004610ba0565b6104bb565b005b61016961013e366004610ad3565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60405160ff9091168152602001610112565b61012e610189366004610b41565b6104cf565b61019661052e565b6040516101129190610cdb565b6101d96101b1366004610bf0565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610112565b61022961020c366004610c0b565b60281b65ff00000000001660009081526004602052604090205490565b604051908152602001610112565b610291610245366004610b28565b60a081901c91608082901c91603081901c917fffff00000000000000000000000000000000000000000000000000000000000060d083901b811692601881901c9260e882901b90921691565b604080516bffffffffffffffffffffffff909816885263ffffffff909616602088015264ffffffffff909416948601949094527fffff000000000000000000000000000000000000000000000000000000000000918216606086015260ff9081166080860152921660a08401521660c082015260e001610112565b6040517e3c0000000000000000000000000000000000000000000000000000000000008152602001610112565b610229610347366004610af5565b61067b565b61047561035a366004610c26565b604080517fffffffffffffffffffffffff000000000000000000000000000000000000000060a08b901b1660208201527fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b16602c8201527fffffffffff00000000000000000000000000000000000000000000000000000060d889811b8216603084015288901b1660358201527fffff000000000000000000000000000000000000000000000000000000000000808716603a8301527fff0000000000000000000000000000000000000000000000000000000000000060f887811b8216603c850152918616603d8401529084901b16603f82015260609101604051602081830303815290604052905098975050505050505050565b6040516101129190610d35565b6101d9610490366004610c0b565b60ff1660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b6104c8858585858561070b565b5050505050565b6040517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606087901b16602082015261052690879060340160405160208183030381529060405280519060200120868686866108ac565b505050505050565b606060015b6101008160ff1610156105e65760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff166105d4578060ff166001141561057d575090565b610588600182610da8565b60ff1667ffffffffffffffff8111156105a3576105a3610e49565b6040519080825280602002602001820160405280156105cc578160200160208202803683370190505b5091506105e6565b806105de81610dcb565b915050610533565b60015b8160ff168160ff1610156106765760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff168361062c600184610da8565b60ff168151811061063f5761063f610e1a565b73ffffffffffffffffffffffffffffffffffffffff909216602092830291909101909101528061066e81610dcb565b9150506105e9565b505090565b73ffffffffffffffffffffffffffffffffffffffff80831660009081526001602090815260408083205493851683526002909152812054909160ff169064ffffffffff168015806106cd575060ff8216155b156106dd57600092505050610705565b64ffffffffff1660289190911b65ff0000000000161760009081526004602052604090205490505b92915050565b73ffffffffffffffffffffffffffffffffffffffff811661078d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d7074792061646472657373000060448201526064015b60405180910390fd5b6000858152602080822081527f9862d877599564bcd97c37305a7b0fdbe621d9c2a125026f2ad601f754a75abc82526040808320815193845291830180825282905260ff85169083015260608201869052608082018590529060019060a0016020604051602081039080840390855afa15801561080e573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610526576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610784565b73ffffffffffffffffffffffffffffffffffffffff8116610929576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610784565b60008681526020868152604080832082527f5ef297f2881340f11ed62c7c08e0e0c235c333ad8f340d7285f529f16716968a8352808320815193845291830180825282905260ff85169083015260608201869052608082018590529060019060a0016020604051602081039080840390855afa1580156109ad573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610a4b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610784565b50505050505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610a7857600080fd5b919050565b80357fffff00000000000000000000000000000000000000000000000000000000000081168114610a7857600080fd5b803564ffffffffff81168114610a7857600080fd5b803560ff81168114610a7857600080fd5b600060208284031215610ae557600080fd5b610aee82610a54565b9392505050565b60008060408385031215610b0857600080fd5b610b1183610a54565b9150610b1f60208401610a54565b90509250929050565b600060208284031215610b3a57600080fd5b5035919050565b60008060008060008060c08789031215610b5a57600080fd5b86359550610b6a60208801610a54565b94506040870135935060608701359250610b8660808801610ac2565b9150610b9460a08801610a54565b90509295509295509295565b600080600080600060a08688031215610bb857600080fd5b853594506020860135935060408601359250610bd660608701610ac2565b9150610be460808701610a54565b90509295509295909350565b600060208284031215610c0257600080fd5b610aee82610aad565b600060208284031215610c1d57600080fd5b610aee82610ac2565b600080600080600080600080610100898b031215610c4357600080fd5b88356bffffffffffffffffffffffff81168114610c5f57600080fd5b9750602089013563ffffffff81168114610c7857600080fd5b9650610c8660408a01610aad565b9550610c9460608a01610aad565b9450610ca260808a01610a7d565b9350610cb060a08a01610ac2565b9250610cbe60c08a01610a7d565b9150610ccc60e08a01610ac2565b90509295985092959890939650565b6020808252825182820181905260009190848201906040850190845b81811015610d2957835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101610cf7565b50909695505050505050565b600060208083528351808285015260005b81811015610d6257858101830151858201604001528201610d46565b81811115610d74576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600060ff821660ff841680821015610dc257610dc2610deb565b90039392505050565b600060ff821660ff811415610de257610de2610deb565b60010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea164736f6c6343000806000a";

type MesonStatesTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonStatesTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MesonStatesTest__factory extends ContractFactory {
  constructor(...args: MesonStatesTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MesonStatesTest> {
    return super.deploy(overrides || {}) as Promise<MesonStatesTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MesonStatesTest {
    return super.attach(address) as MesonStatesTest;
  }
  connect(signer: Signer): MesonStatesTest__factory {
    return super.connect(signer) as MesonStatesTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonStatesTestInterface {
    return new utils.Interface(_abi) as MesonStatesTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MesonStatesTest {
    return new Contract(address, _abi, signerOrProvider) as MesonStatesTest;
  }
}
