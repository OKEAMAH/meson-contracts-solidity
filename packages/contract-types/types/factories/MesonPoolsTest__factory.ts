/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MesonPoolsTest,
  MesonPoolsTestInterface,
} from "../MesonPoolsTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "SwapLocked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "SwapReleased",
    type: "event",
  },
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
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint48",
        name: "balanceIndex",
        type: "uint48",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint48",
        name: "balanceIndex",
        type: "uint48",
      },
    ],
    name: "depositAndRegister",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "getLockedSwap",
    outputs: [
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "uint40",
        name: "until",
        type: "uint40",
      },
    ],
    stateMutability: "view",
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
        name: "initiator",
        type: "address",
      },
    ],
    name: "lock",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "recipient",
        type: "address",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "unlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051620019e8380380620019e8833981016040819052610031916100e0565b61003c816001610042565b50610110565b60ff81166100965760405162461bcd60e51b815260206004820152601b60248201527f43616e6e6f7420757365203020617320746f6b656e20696e6465780000000000604482015260640160405180910390fd5b6001600160a01b039091166000818152600160209081526040808320805460ff90961660ff19909616861790559382528190529190912080546001600160a01b0319169091179055565b6000602082840312156100f257600080fd5b81516001600160a01b038116811461010957600080fd5b9392505050565b6118c880620001206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063b002249d1161008c578063e76afb5411610066578063e76afb5414610260578063eba7fb7714610315578063f7888aec14610342578063ff3787191461036357600080fd5b8063b002249d146101dd578063b3df5b36146101f2578063be18e8a41461024d57600080fd5b806337b90a4f116100c857806337b90a4f146101915780636198e339146101a45780638f487dc9146101b7578063903d4296146101ca57600080fd5b80630b9b44af146100ef5780631aba3a55146101045780632335093c14610146575b600080fd5b6101026100fd366004611637565b61039c565b005b61012b6101123660046115a7565b60026020526000908152604090205464ffffffffff1681565b60405164ffffffffff90911681526020015b60405180910390f35b61017f6101543660046115a7565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60405160ff909116815260200161013d565b61010261019f366004611687565b61051d565b6101026101b236600461161e565b6105e1565b6101026101c5366004611687565b61077b565b6101026101d83660046116c2565b610a11565b6101e5610b1b565b60405161013d9190611762565b6102286102003660046116e5565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161013d565b61010261025b366004611637565b610c68565b6102db61026e36600461161e565b60009081526005602090815260408083205464ffffffffff60a082901c8116855260039093529220547dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83169373ffffffffffffffffffffffffffffffffffffffff9091169260c81c90911690565b6040805173ffffffffffffffffffffffffffffffffffffffff948516815293909216602084015264ffffffffff169082015260600161013d565b6040517e3c000000000000000000000000000000000000000000000000000000000000815260200161013d565b6103556103503660046115c9565b610ef1565b60405190815260200161013d565b61022861037136600461170c565b60ff1660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b6000858152600560205260409020547dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff168061041d5760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f742065786973740000000000000000000000000060448201526064015b60405180910390fd5b6040517fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606084901b1660208201526104749087906034016040516020818303038152906040528051906020012087878786610f50565b600086815260056020908152604080832080547fffff00000000000000000000000000000000000000000000000000000000000016905560ff60188a901c1683529082905290205473ffffffffffffffffffffffffffffffffffffffff166104e1818460a08a901c6110c4565b6040518781527ffa628b578e095243f0544bfad9255f49d79d03a5bbf6c85875d05a215e247ad29060200160405180910390a150505050505050565b6000821161056d5760405162461bcd60e51b815260206004820152601760248201527f416d6f756e74206d75737420626520706f7369746976650000000000000000006044820152606401610414565b65ffffffffffff811660009081526004602052604090205461058f9083611243565b65ffffffffffff8216600090815260046020908152604080832093909355602884901c60ff16825281905220546105dd9073ffffffffffffffffffffffffffffffffffffffff1633846112a1565b5050565b6000818152600560205260409020547dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff168061065d5760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610414565b807dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1660c842901b7dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16116106f05760405162461bcd60e51b815260206004820152601260248201527f53776170207374696c6c20696e206c6f636b00000000000000000000000000006044820152606401610414565b60a081811c64ffffffffff16601084901b65ff000000000016176000818152600460205260409020549091610728919085901c611243565b65ffffffffffff909116600090815260046020908152604080832093909355938152600590935290912080547fffff00000000000000000000000000000000000000000000000000000000000016905550565b600082116107cb5760405162461bcd60e51b815260206004820152601760248201527f416d6f756e74206d75737420626520706f7369746976650000000000000000006044820152606401610414565b338164ffffffffff81166108215760405162461bcd60e51b815260206004820152601e60248201527f43616e6e6f742075736520302061732070726f766964657220696e64657800006044820152606401610414565b64ffffffffff811660009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff161561089b5760405162461bcd60e51b815260206004820152601860248201527f496e64657820616c7265616479207265676973746572656400000000000000006044820152606401610414565b73ffffffffffffffffffffffffffffffffffffffff821660009081526002602052604090205464ffffffffff16156109155760405162461bcd60e51b815260206004820152601a60248201527f4164647265737320616c726561647920726567697374657265640000000000006044820152606401610414565b64ffffffffff8116600081815260036020908152604080832080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff881690811790915583526002825280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000001690941790935565ffffffffffff861682526004905220546109bd9085611243565b65ffffffffffff841660009081526004602090815260408083209390935560ff602887901c1682528190522054610a0b9073ffffffffffffffffffffffffffffffffffffffff1683866112a1565b50505050565b3360008181526002602052604090205464ffffffffff1680610a9b5760405162461bcd60e51b815260206004820152602e60248201527f43616c6c6572206e6f7420726567697374657265642e2043616c6c206465706f60448201527f736974416e6452656769737465720000000000000000000000000000000000006064820152608401610414565b65ff0000000000602884901b1664ffffffffff821617600081815260046020526040902054610aca908661139f565b65ffffffffffff821660009081526004602090815260408083209390935560ff871682528190522054610b149073ffffffffffffffffffffffffffffffffffffffff1684876110c4565b5050505050565b606060015b6101008160ff161015610bd35760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff16610bc1578060ff1660011415610b6a575090565b610b756001826117eb565b60ff1667ffffffffffffffff811115610b9057610b9061188c565b604051908082528060200260200182016040528015610bb9578160200160208202803683370190505b509150610bd3565b80610bcb8161180e565b915050610b20565b60015b8160ff168160ff161015610c635760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1683610c196001846117eb565b60ff1681518110610c2c57610c2c61185d565b73ffffffffffffffffffffffffffffffffffffffff9092166020928302919091019091015280610c5b8161180e565b915050610bd6565b505090565b84602081901c61ffff16603c14610cc15760405162461bcd60e51b815260206004820152601760248201527f53776170206e6f7420666f72207468697320636861696e0000000000000000006044820152606401610414565b6000868152600560205260409020547dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1615610d3d5760405162461bcd60e51b815260206004820152601360248201527f5377617020616c726561647920657869737473000000000000000000000000006044820152606401610414565b610d4a86868686866113fd565b3360009081526002602052604090205464ffffffffff1680610dd45760405162461bcd60e51b815260206004820152602f60248201527f43616c6c6572206e6f7420726567697374657265642e2043616c6c206465706f60448201527f736974416e6452656769737465722e00000000000000000000000000000000006064820152608401610414565b65ff0000000000601088901b1664ffffffffff821617600081815260046020526040902054610e079060a08a901c61139f565b65ffffffffffff821660009081526004602052604081209190915573ffffffffffffffffffffffffffffffffffffffff85169060c8610e486104b0426117bc565b60008c8152600560205260409081902080547dffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff93841690941b9490941794909417167fffff000000000000000000000000000000000000000000000000000000000000909116179055517fbfb879c34323c5601fafe832c3a8a1e31e12c288695838726ddeada86034edb490610edf908a815260200190565b60405180910390a15050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8281166000908152600160209081526040808320549385168352600282528083205464ffffffffff1660289490941b65ff0000000000169390931782526004905220545b92915050565b73ffffffffffffffffffffffffffffffffffffffff8116610fb35760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610414565b60008681526020868152604080832082527f5ef297f2881340f11ed62c7c08e0e0c235c333ad8f340d7285f529f16716968a8352808320815193845291830180825282905260ff85169083015260608201869052608082018590529060019060a0016020604051602081039080840390855afa158015611037573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146110bb5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610414565b50505050505050565b604080518082018252601981527f7472616e7366657228616464726573732c75696e743235362900000000000000602091820152815173ffffffffffffffffffffffffffffffffffffffff85811660248301526044808301869052845180840390910181526064909201845291810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790529151600092839287169161118b9190611727565b6000604051808303816000865af19150503d80600081146111c8576040519150601f19603f3d011682016040523d82523d6000602084013e6111cd565b606091505b50915091508180156111f75750805115806111f75750808060200190518101906111f791906115fc565b610b145760405162461bcd60e51b815260206004820152600f60248201527f5472616e73666572206661696c656400000000000000000000000000000000006044820152606401610414565b60008261125083826117bc565b9150811015610f4a5760405162461bcd60e51b815260206004820152600860248201527f6f766572666c6f770000000000000000000000000000000000000000000000006044820152606401610414565b600081116112f15760405162461bcd60e51b815260206004820181905260248201527f416d6f756e74206d7573742062652067726561746572207468616e207a65726f6044820152606401610414565b6040517f23b872dd00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152306024830152604482018390528416906323b872dd90606401602060405180830381600087803b15801561136757600080fd5b505af115801561137b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0b91906115fc565b6000826113ac83826117d4565b9150811115610f4a5760405162461bcd60e51b815260206004820152600960248201527f756e646572666c6f7700000000000000000000000000000000000000000000006044820152606401610414565b73ffffffffffffffffffffffffffffffffffffffff81166114605760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610414565b6000858152602080822081527f9862d877599564bcd97c37305a7b0fdbe621d9c2a125026f2ad601f754a75abc82526040808320815193845291830180825282905260ff85169083015260608201869052608082018590529060019060a0016020604051602081039080840390855afa1580156114e1573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146115655760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610414565b505050505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461159157600080fd5b919050565b803560ff8116811461159157600080fd5b6000602082840312156115b957600080fd5b6115c28261156d565b9392505050565b600080604083850312156115dc57600080fd5b6115e58361156d565b91506115f36020840161156d565b90509250929050565b60006020828403121561160e57600080fd5b815180151581146115c257600080fd5b60006020828403121561163057600080fd5b5035919050565b600080600080600060a0868803121561164f57600080fd5b85359450602086013593506040860135925061166d60608701611596565b915061167b6080870161156d565b90509295509295909350565b6000806040838503121561169a57600080fd5b82359150602083013565ffffffffffff811681146116b757600080fd5b809150509250929050565b600080604083850312156116d557600080fd5b823591506115f360208401611596565b6000602082840312156116f757600080fd5b813564ffffffffff811681146115c257600080fd5b60006020828403121561171e57600080fd5b6115c282611596565b6000825160005b81811015611748576020818601810151858301520161172e565b81811115611757576000828501525b509190910192915050565b6020808252825182820181905260009190848201906040850190845b818110156117b057835173ffffffffffffffffffffffffffffffffffffffff168352928401929184019160010161177e565b50909695505050505050565b600082198211156117cf576117cf61182e565b500190565b6000828210156117e6576117e661182e565b500390565b600060ff821660ff8416808210156118055761180561182e565b90039392505050565b600060ff821660ff8114156118255761182561182e565b60010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea164736f6c6343000806000a";

type MesonPoolsTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonPoolsTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MesonPoolsTest__factory extends ContractFactory {
  constructor(...args: MesonPoolsTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MesonPoolsTest> {
    return super.deploy(token, overrides || {}) as Promise<MesonPoolsTest>;
  }
  getDeployTransaction(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(token, overrides || {});
  }
  attach(address: string): MesonPoolsTest {
    return super.attach(address) as MesonPoolsTest;
  }
  connect(signer: Signer): MesonPoolsTest__factory {
    return super.connect(signer) as MesonPoolsTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonPoolsTestInterface {
    return new utils.Interface(_abi) as MesonPoolsTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MesonPoolsTest {
    return new Contract(address, _abi, signerOrProvider) as MesonPoolsTest;
  }
}
