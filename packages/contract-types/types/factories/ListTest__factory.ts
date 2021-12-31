/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ListTest, ListTestInterface } from "../ListTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "item",
        type: "bytes32",
      },
    ],
    name: "addItem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "createNewList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getListHead",
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
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getListItems",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getListLength",
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
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getListTail",
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
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getTail",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
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
    name: "lists",
    outputs: [
      {
        internalType: "uint256",
        name: "_length",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tail",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_head",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "popItem",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061060c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80638f392d97116100665780638f392d9714610130578063979c00dd1461015c578063afcff5ca14610185578063ccc1ab85146101b1578063fe0af635146101c457600080fd5b806308485788146100985780635201148e146100be57806354b0502f146101085780638c9ce4391461011b575b600080fd5b6100ab6100a636600461051b565b6101e4565b6040519081526020015b60405180910390f35b6100ed6100cc36600461051b565b60006020819052908152604090208054600182015460029092015490919083565b604080519384526020840192909252908201526060016100b5565b6100ab61011636600461051b565b610223565b61012e610129366004610536565b610248565b005b6100ab61013e36600461051b565b6001600160a01b031660009081526020819052604090206002015490565b6100ab61016a36600461051b565b6001600160a01b031660009081526020819052604090205490565b6100ab61019336600461051b565b6001600160a01b031660009081526020819052604090206001015490565b61012e6101bf36600461051b565b61026e565b6101d76101d236600461051b565b6102d5565b6040516100b59190610560565b6001600160a01b03811660009081526020819052604081208190819061020990610342565b915091508161021c575060009392505050565b9392505050565b6001600160a01b03811660009081526020819052604081208190819061020990610388565b6001600160a01b038216600090815260208190526040902061026a90826103f3565b5050565b604080516080810182526000808252602080830182815283850183815260608581018181526001600160a01b0389168652858552969094208551815591516001830155516002820155935180519294926102ce926003850192019061049f565b5050505050565b6001600160a01b0381166000908152602081815260409182902060030180548351818402810184019094528084526060939283018282801561033657602002820191906000526020600020905b815481526020019060010190808311610322575b50505050509050919050565b805460009081901561037d5782600301836001015481548110610367576103676105e9565b9060005260206000200154905060019150915091565b506000905080915091565b8054600090819061039e57506000905080915091565b826003018360010154815481106103b7576103b76105e9565b90600052602060002001549050826001015460016103d591906105a4565b60018085019190915583546103ea91906105bc565b90925550600191565b600180830154610402916105a4565b8260010154106104485760405162461bcd60e51b815260206004820152600d60248201526c6c697374206f766572666c6f7760981b604482015260640160405180910390fd5b815461045d5760018201546002830155610473565b600282015461046d9060016105a4565b60028301555b6003820180546001818101835560009283526020909220018290558254610499916105a4565b90915550565b8280548282559060005260206000209081019282156104da579160200282015b828111156104da5782518255916020019190600101906104bf565b506104e69291506104ea565b5090565b5b808211156104e657600081556001016104eb565b80356001600160a01b038116811461051657600080fd5b919050565b60006020828403121561052d57600080fd5b61021c826104ff565b6000806040838503121561054957600080fd5b610552836104ff565b946020939093013593505050565b6020808252825182820181905260009190848201906040850190845b818110156105985783518352928401929184019160010161057c565b50909695505050505050565b600082198211156105b7576105b76105d3565b500190565b6000828210156105ce576105ce6105d3565b500390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fdfea164736f6c6343000806000a";

type ListTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ListTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ListTest__factory extends ContractFactory {
  constructor(...args: ListTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ListTest> {
    return super.deploy(overrides || {}) as Promise<ListTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ListTest {
    return super.attach(address) as ListTest;
  }
  connect(signer: Signer): ListTest__factory {
    return super.connect(signer) as ListTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ListTestInterface {
    return new utils.Interface(_abi) as ListTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ListTest {
    return new Contract(address, _abi, signerOrProvider) as ListTest;
  }
}
