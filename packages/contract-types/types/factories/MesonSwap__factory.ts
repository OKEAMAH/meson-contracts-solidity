/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MesonSwap, MesonSwapInterface } from "../MesonSwap";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "SwapBonded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "SwapCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "SwapExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expireTs",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "inToken",
        type: "address",
      },
    ],
    name: "SwapPosted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expireTs",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "inToken",
        type: "address",
      },
    ],
    name: "SwapRequested",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "bondSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "cancelSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
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
    ],
    name: "executeSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCoinType",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedSwap",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "initiator",
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
    ],
    name: "postSwap",
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
  {
    inputs: [
      {
        internalType: "bytes",
        name: "encodedSwap",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
    ],
    name: "requestSwap",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "requests",
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
        internalType: "uint256",
        name: "expireTs",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
        name: "",
        type: "address",
      },
    ],
    name: "supportedTokens",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
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
    name: "totalDemandFor",
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
        name: "token",
        type: "address",
      },
    ],
    name: "totalSupplyFor",
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
];

const _bytecode =
  "0x610100604052605260808181529061159160a039805160209182012060408051808201825260088152674d65736f6e20466960c01b908401528051808201825260018152603160f81b908401528051928301919091527fe127d7b8d403871d7ed6b19024db4422e92aee79823ba78ad61e52ee2a5f9b98908201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c001604051602081830303815290604052805190602001206000553480156100d457600080fd5b506114ad806100e46000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806394149c1a1161006657806394149c1a1461014d5780639d86698514610162578063a8f81b1a146101e5578063bcc20ff61461020e578063d541beb31461022157600080fd5b80631548fdce146100a35780633b11d5ac146100b85780633ce758b5146100de57806361565d25146100f157806368c4ac261461011a575b600080fd5b6100b66100b1366004611205565b610234565b005b6100cb6100c63660046112c9565b61032f565b6040519081526020015b60405180910390f35b6100b66100ec36600461121e565b6104a2565b6100cb6100ff3660046111c1565b6001600160a01b031660009081526004602052604090205490565b61013d6101283660046111c1565b60016020526000908152604090205460ff1681565b60405190151581526020016100d5565b604051632000000f60e21b81526020016100d5565b6101ae610170366004611205565b600660205260009081526040902080546001820154600283015460038401546004909401546001600160a01b03938416949284169391929091169085565b604080516001600160a01b03968716815294861660208601528401929092529092166060820152608081019190915260a0016100d5565b6100cb6101f33660046111c1565b6001600160a01b031660009081526005602052604090205490565b6100cb61021c366004611317565b6105d4565b6100b661022f366004611205565b61085d565b600081815260066020526040902060040154819061026d5760405162461bcd60e51b8152600401610264906113d3565b60405180910390fd5b6000828152600660205260409020600101546001600160a01b0316156102d55760405162461bcd60e51b815260206004820152601f60248201527f7377617020626f6e64656420746f20616e6f746865722070726f7669646572006044820152606401610264565b60008281526006602090815260409182902060010180546001600160a01b03191633179055815184815291517f9dadb60bc000bbd7b49430723ed56b6aa35909dcab91ec2cb17ed5da7ae4ffd69281900390910190a15050565b6001600160a01b038116600090815260016020526040812054829060ff1661038d5760405162461bcd60e51b81526020600482015260116024820152703ab739bab83837b93a32b2103a37b5b2b760791b6044820152606401610264565b600080600061039c8787610a7b565b92509250925060006103ab3390565b6040805160a0810182526001600160a01b038084168252600060208084018281528486018a81528e851660608701908152608087018b81528d8652600690945296909320945185549085166001600160a01b0319918216178655905160018601805491861691831691909117905591516002850155935160038401805491909316911617905590516004909101559050610446878284610cbd565b60408051858152602081018590529081018390526001600160a01b03881660608201527fd817149ecf4b0c804e02ea3bd246f04db64ee3ea2ef0e16f78b6dd0a60cf58299060800160405180910390a150919695505050505050565b60008481526006602052604090206004015484906104d25760405162461bcd60e51b8152600401610264906113d3565b600085815260066020908152604091829020825160a08101845281546001600160a01b0390811680835260018401548216948301949094526002830154948201949094526003820154909316606084015260040154608083015261053a908790878787610d4b565b6080810151606082015160208084015160008a815260069092526040822080546001600160a01b031990811682556001820180548216905560028201849055600382018054909116905560040191909155610596828285610f24565b6040518981527f6921a2110a802468e8955f2885822155442ad19c60f42db0444a6993c23d20629060200160405180910390a1505050505050505050565b6001600160a01b038516600090815260016020526040812054869060ff166106325760405162461bcd60e51b81526020600482015260116024820152703ab739bab83837b93a32b2103a37b5b2b760791b6044820152606401610264565b60008060006106418b8b610a7b565b60408051600081526020810180835285905260ff8b1691810191909152606081018c9052608081018b9052929550909350915060019060a0016020604051602081039080840390855afa15801561069c573d6000803e3d6000fd5b505050602060405103516001600160a01b0316896001600160a01b0316146106fa5760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964207369676e617475726560781b6044820152606401610264565b60003390506040518060a001604052808b6001600160a01b03168152602001826001600160a01b031681526020018481526020018c6001600160a01b03168152602001838152506006600086815260200190815260200160002060008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060208201518160010160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506040820151816002015560608201518160030160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550608082015181600401559050506107fd8b8b84610cbd565b60408051858152602081018590529081018390526001600160a01b038c1660608201527ff60f3861c423568d0aae6a3a3bc9d4b41c40ab0cb0267599d9d35122e4f320e89060800160405180910390a150919a9950505050505050505050565b600081815260066020526040902060040154819061088d5760405162461bcd60e51b8152600401610264906113d3565b600082815260066020526040902060020154829042116108e25760405162461bcd60e51b815260206004820152601060248201526f1cddd85c081b9bdd08195e1c1a5c995960821b6044820152606401610264565b6000600660008581526020019081526020016000206040518060a00160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001600282015481526020016003820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001600482015481525050905060008160600151905060008260000151905060008360800151905060066000888152602001908152602001600020600080820160006101000a8154906001600160a01b0302191690556001820160006101000a8154906001600160a01b03021916905560028201600090556003820160006101000a8154906001600160a01b03021916905560048201600090555050610a3f838383610f24565b6040518781527f5a399591cfd74c375a1ffd61c20221db0db82381f65516889ed13c8cd1f99d5b9060200160405180910390a150505050505050565b600080600080600080610a8d88611061565b6040516bffffffffffffffffffffffff1960608c901b166020820152929550909350915082906034016040516020818303038152906040528051906020012014610b125760405162461bcd60e51b81526020600482015260166024820152750d2dca8ded6cadc40c8decae640dcdee840dac2e8c6d60531b6044820152606401610264565b60008111610b705760405162461bcd60e51b815260206004820152602560248201527f7377617020616d6f756e74206d7573742062652067726561746572207468616e604482015264207a65726f60d81b6064820152608401610264565b42610b7d610e10826113fb565b8411610bc25760405162461bcd60e51b81526020600482015260146024820152736578706972657320747320746f6f206561726c7960601b6044820152606401610264565b610bce611c20826113fb565b8410610c125760405162461bcd60e51b81526020600482015260136024820152726578706972657320747320746f6f206c61746560681b6044820152606401610264565b6000610c5b8a80516020918201206000546040805161190160f01b8186015260228101929092526042808301939093528051808303909301835260629091019052805191012090565b60008181526006602052604090206004015490915015610cad5760405162461bcd60e51b815260206004820152600d60248201526c1cddd85c0818dbdb999b1a58dd609a1b6044820152606401610264565b9650929450925050509250925092565b6040516323b872dd60e01b81526001600160a01b038381166004830152306024830152604482018390528416906323b872dd90606401602060405180830381600087803b158015610d0d57600080fd5b505af1158015610d21573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4591906111e3565b50505050565b6001600160a01b038416610da15760405162461bcd60e51b815260206004820152601e60248201527f7369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610264565b604080518082018252601b81527f5377617052656c656173652862797465733332207377617049642900000000006020918201529051600091610e11917ffb1f98601c589a04e2ceca199119c17bd547893fffb8d088acdae5aff4f9b19d91899101918252602082015260400190565b6040516020818303038152906040528051906020012090506000805482604051602001610e5592919061190160f01b81526002810192909252602282015260420190565b60408051601f1981840301815282825280516020918201206000845290830180835281905260ff8616918301919091526060820187905260808201869052915060019060a0016020604051602081039080840390855afa158015610ebd573d6000803e3d6000fd5b505050602060405103516001600160a01b0316866001600160a01b031614610f1b5760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964207369676e617475726560781b6044820152606401610264565b50505050505050565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b17905291516000928392871691610fb09190611398565b6000604051808303816000865af19150503d8060008114610fed576040519150601f19603f3d011682016040523d82523d6000602084013e610ff2565b606091505b509150915081801561101c57508051158061101c57508080602001905181019061101c91906111e3565b61105a5760405162461bcd60e51b815260206004820152600f60248201526e1d1c985b9cd9995c8819985a5b1959608a1b6044820152606401610264565b5050505050565b600080600080600080600087806020019051810190611080919061125d565b50505093509350935093506040518060a0016040528060698152602001611438606991398051906020012084146110f95760405162461bcd60e51b815260206004820152601d60248201527f496e76616c6964207377617020726571756573742074797065686173680000006044820152606401610264565b919790965090945092505050565b80356001600160a01b038116811461111e57600080fd5b919050565b600082601f83011261113457600080fd5b813567ffffffffffffffff8082111561114f5761114f611421565b604051601f8301601f19908116603f0116810190828211818310171561117757611177611421565b8160405283815286602085880101111561119057600080fd5b836020870160208301376000602085830101528094505050505092915050565b803560ff8116811461111e57600080fd5b6000602082840312156111d357600080fd5b6111dc82611107565b9392505050565b6000602082840312156111f557600080fd5b815180151581146111dc57600080fd5b60006020828403121561121757600080fd5b5035919050565b6000806000806080858703121561123457600080fd5b843593506020850135925060408501359150611252606086016111b0565b905092959194509250565b600080600080600080600060e0888a03121561127857600080fd5b87519650602088015195506040880151945060608801519350608088015163ffffffff60e01b811681146112ab57600080fd5b8093505060a0880151915060c0880151905092959891949750929550565b600080604083850312156112dc57600080fd5b823567ffffffffffffffff8111156112f357600080fd5b6112ff85828601611123565b92505061130e60208401611107565b90509250929050565b60008060008060008060c0878903121561133057600080fd5b863567ffffffffffffffff81111561134757600080fd5b61135389828a01611123565b96505061136260208801611107565b945061137060408801611107565b9350606087013592506080870135915061138c60a088016111b0565b90509295509295509295565b6000825160005b818110156113b9576020818601810151858301520161139f565b818111156113c8576000828501525b509190910192915050565b6020808252600e908201526d1cddd85c081b9bdd08199bdd5b9960921b604082015260600190565b6000821982111561141c57634e487b7160e01b600052601160045260246000fd5b500190565b634e487b7160e01b600052604160045260246000fdfe53776170526571756573742875696e743235362065787069726554732c627974657320696e546f6b656e2c75696e7432353620616d6f756e742c627974657334206f7574436861696e2c6279746573206f7574546f6b656e2c627974657320726563697069656e7429a164736f6c6343000806000a454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";

type MesonSwapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonSwapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MesonSwap__factory extends ContractFactory {
  constructor(...args: MesonSwapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MesonSwap> {
    return super.deploy(overrides || {}) as Promise<MesonSwap>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MesonSwap {
    return super.attach(address) as MesonSwap;
  }
  connect(signer: Signer): MesonSwap__factory {
    return super.connect(signer) as MesonSwap__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonSwapInterface {
    return new utils.Interface(_abi) as MesonSwapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MesonSwap {
    return new Contract(address, _abi, signerOrProvider) as MesonSwap;
  }
}
