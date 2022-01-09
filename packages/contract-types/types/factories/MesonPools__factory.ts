/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MesonPools, MesonPoolsInterface } from "../MesonPools";

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
      {
        indexed: false,
        internalType: "address",
        name: "provider",
        type: "address",
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
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "SwapReleased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
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
    inputs: [],
    name: "challenge",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
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
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "token",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "lockingSwaps",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "until",
        type: "uint64",
      },
    ],
    stateMutability: "view",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "metaAmount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "domainHash",
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
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
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
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x610100604052605260808181529061132160a039805160209182012060408051808201825260088152674d65736f6e20466960c01b908401528051808201825260018152603160f81b908401528051928301919091527fe127d7b8d403871d7ed6b19024db4422e92aee79823ba78ad61e52ee2a5f9b98908201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c001604051602081830303815290604052805190602001206000553480156100d457600080fd5b5061123d806100e46000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063d2ef739811610071578063d2ef7398146100cc578063eb69e45014610212578063ec9b5b3a14610225578063f3fef3a314610238578063f7888aec1461024b578063f7d18c5a1461027657600080fd5b806347e7ef24146100b957806361565d25146100ce57806368c4ac261461010a5780636bb39ae01461013d57806394149c1a146101d4578063a8f81b1a146101e9575b600080fd5b6100cc6100c7366004611016565b610289565b005b6100f76100dc366004610fc1565b6001600160a01b031660009081526005602052604090205490565b6040519081526020015b60405180910390f35b61012d610118366004610fc1565b60016020526000908152604090205460ff1681565b6040519015158152602001610101565b61019261014b366004611062565b600760205260009081526040902080546001820154600283015460038401546004909401546001600160a01b039384169492841693909116919067ffffffffffffffff1685565b604080516001600160a01b03968716815294861660208601529290941691830191909152606082015267ffffffffffffffff909116608082015260a001610101565b604051632000000f60e21b8152602001610101565b6100f76101f7366004610fc1565b6001600160a01b031660009081526006602052604090205490565b6100cc6102203660046110c1565b61033c565b6100cc610233366004611062565b6105b4565b6100cc610246366004611016565b61077d565b6100f7610259366004610fe3565b600260209081526000928352604080842090915290825290205481565b6100cc61028436600461107b565b6107ce565b6001600160a01b038216600090815260016020526040902054829060ff166102cc5760405162461bcd60e51b81526004016102c390611169565b60405180910390fd5b6001600160a01b0383166000908152600260209081526040808320338085529252909120546102fb9084610a81565b6001600160a01b0380861660009081526002602090815260408083209386168352929052205561032b8484610aa2565b610336848285610ae5565b50505050565b6000878152600760208181526040808420815160a08101835281546001600160a01b03908116825260018301548116828601526002830154169281019290925260038101546060830181905260049091015467ffffffffffffffff166080830152938b9052919052906103e75760405162461bcd60e51b81526020600482015260136024820152721cddd85c08191bd95cc81b9bdd08195e1a5cdd606a1b60448201526064016102c3565b80606001518611156104585760405162461bcd60e51b815260206004820152603460248201527f72656c6561736520616d6f756e742063616e6e6f742062652067726561746572604482015273081d1a185b881b1bd8dada5b99c8185b5bdd5b9d60621b60648201526084016102c3565b6040516bffffffffffffffffffffffff19606089901b1660208201526104a190899060340160405160208183030381529060405280519060200120878460000151888888610b6d565b60408101516020820151606083015188101561051d576001600160a01b0380831660009081526002602090815260408083209385168352929052205460608401516104f691906104f1908b610d14565b610a81565b6001600160a01b038084166000908152600260209081526040808320938616835292905220555b60008a815260076020526040812080546001600160a01b031990811682556001820180548216905560028201805490911690556003810191909155600401805467ffffffffffffffff19169055610575828a8a610d2f565b6040518a81527fe8aa10932e72fe72aa2f3879a4dd799b95f5fbe728be1be0609e5baa14ec40f49060200160405180910390a150505050505050505050565b6000818152600760205260409020600301546106085760405162461bcd60e51b81526020600482015260136024820152721cddd85c08191bd95cc81b9bdd08195e1a5cdd606a1b60448201526064016102c3565b600081815260076020908152604091829020825160a08101845281546001600160a01b03908116825260018301548116938201939093526002820154909216928201929092526003820154606082015260049091015467ffffffffffffffff9081166080830181905242909116116106c25760405162461bcd60e51b815260206004820152601960248201527f5468652073776170206973207374696c6c20696e206c6f636b0000000000000060448201526064016102c3565b60408082015160608301516020808501516001600160a01b038085166000908152600284528681209183168152925293902054919290916107039083610a81565b6001600160a01b03938416600090815260026020818152604080842095909716835293845285822092909255958652600790915291842080546001600160a01b0319908116825560018201805482169055928101805490931690925550600381019290925550600401805467ffffffffffffffff19169055565b6001600160a01b038216600090815260016020526040902054829060ff166107b75760405162461bcd60e51b81526004016102c390611169565b336107c28484610e6c565b61033681828686610ee3565b6001600160a01b038116600090815260016020526040902054819060ff166108085760405162461bcd60e51b81526004016102c390611169565b600083116108585760405162461bcd60e51b815260206004820181905260248201527f616d6f756e74206d7573742062652067726561746572207468616e207a65726f60448201526064016102c3565b600085815260076020526040902060030154156108b75760405162461bcd60e51b815260206004820152601b60248201527f6c6f636b696e67207377617020616c726561647920657869737473000000000060448201526064016102c3565b6001600160a01b0382166000908152600260209081526040808320338085529252909120548411156109225760405162461bcd60e51b8152602060048201526014602482015273696e73756666696369656e742062616c616e636560601b60448201526064016102c3565b6001600160a01b038084166000908152600260209081526040808320938516835292905220546109539085906111d8565b6001600160a01b0380851660008181526002602090815260408083208786168085529083529281902095909555845160a081018652938a1684528301529181019190915260608101859052608081016109ae6104b0426111ac565b67ffffffffffffffff908116909152600088815260076020908152604091829020845181546001600160a01b03199081166001600160a01b0392831617835586840151600184018054831691841691909117905586850151600284018054909216908316179055606086015160038301556080909501516004909101805467ffffffffffffffff191691909416179092558051898152928416918301919091527faad18fe672f0d6b379db88b0e1176f10cc003e9a4d8ed142a90c0b6f8bedb8de910160405180910390a1505050505050565b600082610a8e8382611194565b9150811015610a9c57600080fd5b92915050565b6001600160a01b038216600090815260056020526040902054610ac59082610a81565b6001600160a01b0390921660009081526005602052604090209190915550565b6040516323b872dd60e01b81526001600160a01b038381166004830152306024830152604482018390528416906323b872dd90606401602060405180830381600087803b158015610b3557600080fd5b505af1158015610b49573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103369190611040565b6001600160a01b038416610bc35760405162461bcd60e51b815260206004820152601e60248201527f7369676e65722063616e6e6f7420626520656d7074792061646472657373000060448201526064016102c3565b60006040518060600160405280602b8152602001611206602b91398051602091820120604080519283019190915281018990526060810188905260800160405160208183030381529060405280519060200120905060008682604051602001610c4392919061190160f01b81526002810192909252602282015260420190565b60408051601f1981840301815282825280516020918201206000845290830180835281905260ff8616918301919091526060820187905260808201869052915060019060a0016020604051602081039080840390855afa158015610cab573d6000803e3d6000fd5b505050602060405103516001600160a01b0316866001600160a01b031614610d095760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964207369676e617475726560781b60448201526064016102c3565b505050505050505050565b600082610d2183826111d8565b9150811115610a9c57600080fd5b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b17905291516000928392871691610dbb919061112e565b6000604051808303816000865af19150503d8060008114610df8576040519150601f19603f3d011682016040523d82523d6000602084013e610dfd565b606091505b5091509150818015610e27575080511580610e27575080806020019051810190610e279190611040565b610e655760405162461bcd60e51b815260206004820152600f60248201526e1d1c985b9cd9995c8819985a5b1959608a1b60448201526064016102c3565b5050505050565b6001600160a01b038216600090815260056020526040902054811115610ec05760405162461bcd60e51b815260206004820152600960248201526837bb32b9323930bbb760b91b60448201526064016102c3565b6001600160a01b038216600090815260056020526040902054610ac59082610d14565b6001600160a01b03808316600090815260026020908152604080832093871683529290522054811115610f445760405162461bcd60e51b815260206004820152600960248201526837bb32b9323930bbb760b91b60448201526064016102c3565b6001600160a01b03808316600090815260026020908152604080832093871683529290522054610f749082610d14565b6001600160a01b03808416600090815260026020908152604080832093881683529290522055610336828583610d2f565b80356001600160a01b0381168114610fbc57600080fd5b919050565b600060208284031215610fd357600080fd5b610fdc82610fa5565b9392505050565b60008060408385031215610ff657600080fd5b610fff83610fa5565b915061100d60208401610fa5565b90509250929050565b6000806040838503121561102957600080fd5b61103283610fa5565b946020939093013593505050565b60006020828403121561105257600080fd5b81518015158114610fdc57600080fd5b60006020828403121561107457600080fd5b5035919050565b6000806000806080858703121561109157600080fd5b843593506110a160208601610fa5565b9250604085013591506110b660608601610fa5565b905092959194509250565b600080600080600080600060e0888a0312156110dc57600080fd5b873596506110ec60208901610fa5565b955060408801359450606088013593506080880135925060a0880135915060c088013560ff8116811461111e57600080fd5b8091505092959891949750929550565b6000825160005b8181101561114f5760208186018101518583015201611135565b8181111561115e576000828501525b509190910192915050565b6020808252601190820152703ab739bab83837b93a32b2103a37b5b2b760791b604082015260600190565b600082198211156111a7576111a76111ef565b500190565b600067ffffffffffffffff8083168185168083038211156111cf576111cf6111ef565b01949350505050565b6000828210156111ea576111ea6111ef565b500390565b634e487b7160e01b600052601160045260246000fdfe5377617052656c656173652862797465733332207377617049642c627974657320726563697069656e7429a164736f6c6343000806000a454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";

type MesonPoolsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonPoolsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MesonPools__factory extends ContractFactory {
  constructor(...args: MesonPoolsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MesonPools> {
    return super.deploy(overrides || {}) as Promise<MesonPools>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MesonPools {
    return super.attach(address) as MesonPools;
  }
  connect(signer: Signer): MesonPools__factory {
    return super.connect(signer) as MesonPools__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonPoolsInterface {
    return new utils.Interface(_abi) as MesonPoolsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MesonPools {
    return new Contract(address, _abi, signerOrProvider) as MesonPools;
  }
}
