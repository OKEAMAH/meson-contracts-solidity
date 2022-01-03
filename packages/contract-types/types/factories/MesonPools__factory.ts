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
    inputs: [
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "metaAmount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "inToken",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "outToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "ts",
        type: "uint256",
      },
    ],
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
        internalType: "bytes",
        name: "encodedSwap",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "until",
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
      {
        internalType: "uint256",
        name: "metaAmount",
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
  "0x610100604052605260808181529061179760a039805160209182012060408051808201825260088152674d65736f6e20466960c01b908401528051808201825260018152603160f81b908401528051928301919091527fe127d7b8d403871d7ed6b19024db4422e92aee79823ba78ad61e52ee2a5f9b98908201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c001604051602081830303815290604052805190602001206000553480156100d457600080fd5b506116b3806100e46000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063a8f81b1a11610071578063a8f81b1a146101fd578063c43a73dc14610226578063c685960114610239578063ec9b5b3a14610250578063f3fef3a314610263578063f7888aec1461027657600080fd5b806347e7ef24146100b95780634e1389ed146100ce57806361565d25146100e157806368c4ac261461011d5780636bb39ae01461015057806394149c1a146101e8575b600080fd5b6100cc6100c73660046113e1565b6102a1565b005b6100cc6100dc366004611446565b610354565b61010a6100ef3660046112e3565b6001600160a01b031660009081526004602052604090205490565b6040519081526020015b60405180910390f35b61014061012b3660046112e3565b60016020526000908152604090205460ff1681565b6040519015158152602001610114565b6101a561015e36600461142d565b6007602052600090815260409020805460018201546002830154600384015460048501546005909501546001600160a01b0394851695938516949283169391929091169086565b604080516001600160a01b0397881681529587166020870152938616938501939093526060840191909152909216608082015260a081019190915260c001610114565b604051632000000f60e21b8152602001610114565b61010a61020b3660046112e3565b6001600160a01b031660009081526005602052604090205490565b6100cc6102343660046114fb565b610596565b6100cc610247366004611338565b50505050505050565b6100cc61025e36600461142d565b610a25565b6100cc6102713660046113e1565b610be5565b61010a610284366004611305565b600660209081526000928352604080842090915290825290205481565b6001600160a01b038216600090815260016020526040902054829060ff166102e45760405162461bcd60e51b81526004016102db906115b7565b60405180910390fd5b6001600160a01b0383166000908152600660209081526040808320338085529252909120546103139084610c36565b6001600160a01b038086166000908152600660209081526040808320938616835292905220556103438484610c57565b61034e848285610c9a565b50505050565b6000858152600760208181526040808420815160c08101835281546001600160a01b039081168252600183015481168286015260028301548116938201939093526003820154606082018190526004830154909316608082015260059091015460a0820152938990529190526104025760405162461bcd60e51b81526020600482015260136024820152721cddd85c08191bd95cc81b9bdd08195e1a5cdd606a1b60448201526064016102db565b80606001518511156104735760405162461bcd60e51b815260206004820152603460248201527f72656c6561736520616d6f756e742063616e6e6f742062652067726561746572604482015273081d1a185b881b1bd8dada5b99c8185b5bdd5b9d60621b60648201526084016102db565b610484868260000151868686610d22565b6040810151602082015160808301516060840151881015610505576001600160a01b0380841660009081526006602090815260408083209386168352929052205460608501516104de91906104d9908b610ef2565b610c36565b6001600160a01b038085166000908152600660209081526040808320938716835292905220555b600089815260076020526040812080546001600160a01b0319908116825560018201805482169055600282018054821690556003820183905560048201805490911690556005015561055883828a610f0d565b6040518981527fe8aa10932e72fe72aa2f3879a4dd799b95f5fbe728be1be0609e5baa14ec40f49060200160405180910390a1505050505050505050565b6001600160a01b038516600090815260016020526040902054859060ff166105d05760405162461bcd60e51b81526004016102db906115b7565b60008060006105de8a61104a565b925092509250600083116106345760405162461bcd60e51b815260206004820181905260248201527f616d6f756e74206d7573742062652067726561746572207468616e207a65726f60448201526064016102db565b6040516bffffffffffffffffffffffff1960608b901b166020820152829060340160405160208183030381529060405280519060200120146106af5760405162461bcd60e51b81526020600482015260146024820152730e8ded6cadc40c8decae640dcdee840dac2e8c6d60631b60448201526064016102db565b6040516bffffffffffffffffffffffff1960608a901b166020820152819060340160405160208183030381529060405280519060200120146107335760405162461bcd60e51b815260206004820152601860248201527f726563697069656e7420646f6573206e6f74206d61746368000000000000000060448201526064016102db565b6001600160a01b03891660009081526006602090815260408083203380855292529091205484111561079e5760405162461bcd60e51b8152602060048201526014602482015273696e73756666696369656e742062616c616e636560601b60448201526064016102db565b60006107e78c80516020918201206000546040805161190160f01b8186015260228101929092526042808301939093528051808303909301835260629091019052805191012090565b600081815260076020526040902060030154909150156108495760405162461bcd60e51b815260206004820152601b60248201527f6c6f636b696e67207377617020616c726561647920657869737473000000000060448201526064016102db565b6001600160a01b03808c1660009081526006602090815260408083209386168352929052205461087a9086906115fa565b6001600160a01b03808d166000908152600660209081526040808320938716835292905281812092909255805160c081019290925260e082019081905282905260ff881661010082015261012081018a90526101408101899052429080600161016082016020604051602081039080840390855afa158015610900573d6000803e3d6000fd5b505050602060405103516001600160a01b03168152602001846001600160a01b031681526020018d6001600160a01b031681526020018781526020018c6001600160a01b031681526020016104b08361095991906115e2565b9052600083815260076020908152604091829020835181546001600160a01b03199081166001600160a01b0392831617835585840151600184018054831691841691909117905585850151600284018054831691841691909117905560608601516003840155608086015160048401805490921690831617905560a0909401516005909101558151858152928616908301527faad18fe672f0d6b379db88b0e1176f10cc003e9a4d8ed142a90c0b6f8bedb8de910160405180910390a150505050505050505050505050565b600081815260076020526040902060030154610a795760405162461bcd60e51b81526020600482015260136024820152721cddd85c08191bd95cc81b9bdd08195e1a5cdd606a1b60448201526064016102db565b600081815260076020908152604091829020825160c08101845281546001600160a01b0390811682526001830154811693820193909352600282015483169381019390935260038101546060840152600481015490911660808301526005015460a082018190524211610b2e5760405162461bcd60e51b815260206004820152601960248201527f5468652073776170206973207374696c6c20696e206c6f636b0000000000000060448201526064016102db565b60408082015160608301516020808501516001600160a01b03808516600090815260068452868120918316815292529390205491929091610b6f9083610c36565b6001600160a01b039384166000908152600660209081526040808320949096168252928352848120919091559485526007905250822080546001600160a01b0319908116825560018201805482169055600282018054821690556003820184905560048201805490911690556005019190915550565b6001600160a01b038216600090815260016020526040902054829060ff16610c1f5760405162461bcd60e51b81526004016102db906115b7565b33610c2a84846110f0565b61034e81828686611167565b600082610c4383826115e2565b9150811015610c5157600080fd5b92915050565b6001600160a01b038216600090815260046020526040902054610c7a9082610c36565b6001600160a01b0390921660009081526004602052604090209190915550565b6040516323b872dd60e01b81526001600160a01b038381166004830152306024830152604482018390528416906323b872dd90606401602060405180830381600087803b158015610cea57600080fd5b505af1158015610cfe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061034e919061140b565b6001600160a01b038416610d785760405162461bcd60e51b815260206004820152601e60248201527f7369676e65722063616e6e6f7420626520656d7074792061646472657373000060448201526064016102db565b604080518082018252601b81527f5377617052656c656173652862797465733332207377617049642900000000006020918201529051600091610de8917ffb1f98601c589a04e2ceca199119c17bd547893fffb8d088acdae5aff4f9b19d91899101918252602082015260400190565b6040516020818303038152906040528051906020012090506000805482604051602001610e2c92919061190160f01b81526002810192909252602282015260420190565b60408051601f1981840301815282825280516020918201206000845290830180835281905260ff8616918301919091526060820187905260808201869052915060019060a0016020604051602081039080840390855afa158015610e94573d6000803e3d6000fd5b505050602060405103516001600160a01b0316866001600160a01b0316146102475760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964207369676e617475726560781b60448201526064016102db565b600082610eff83826115fa565b9150811115610c5157600080fd5b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b17905291516000928392871691610f99919061157c565b6000604051808303816000865af19150503d8060008114610fd6576040519150601f19603f3d011682016040523d82523d6000602084013e610fdb565b606091505b5091509150818015611005575080511580611005575080806020019051810190611005919061140b565b6110435760405162461bcd60e51b815260206004820152600f60248201526e1d1c985b9cd9995c8819985a5b1959608a1b60448201526064016102db565b5050505050565b600080600080600080600087806020019051810190611069919061148f565b96509650509550505093506040518060a001604052806069815260200161163e606991398051906020012084146110e25760405162461bcd60e51b815260206004820152601d60248201527f496e76616c69642073776170207265717565737420747970656861736800000060448201526064016102db565b919790965090945092505050565b6001600160a01b0382166000908152600460205260409020548111156111445760405162461bcd60e51b815260206004820152600960248201526837bb32b9323930bbb760b91b60448201526064016102db565b6001600160a01b038216600090815260046020526040902054610c7a9082610ef2565b6001600160a01b038083166000908152600660209081526040808320938716835292905220548111156111c85760405162461bcd60e51b815260206004820152600960248201526837bb32b9323930bbb760b91b60448201526064016102db565b6001600160a01b038083166000908152600660209081526040808320938716835292905220546111f89082610ef2565b6001600160a01b0380841660009081526006602090815260408083209388168352929052205561034e828583610f0d565b80356001600160a01b038116811461124057600080fd5b919050565b600082601f83011261125657600080fd5b813567ffffffffffffffff8082111561127157611271611627565b604051601f8301601f19908116603f0116810190828211818310171561129957611299611627565b816040528381528660208588010111156112b257600080fd5b836020870160208301376000602085830101528094505050505092915050565b803560ff8116811461124057600080fd5b6000602082840312156112f557600080fd5b6112fe82611229565b9392505050565b6000806040838503121561131857600080fd5b61132183611229565b915061132f60208401611229565b90509250929050565b600080600080600080600060e0888a03121561135357600080fd5b61135c88611229565b9650602088013567ffffffffffffffff8082111561137957600080fd5b6113858b838c01611245565b975060408a0135965060608a01359150808211156113a257600080fd5b506113af8a828b01611245565b9450506113be60808901611229565b92506113cc60a08901611229565b915060c0880135905092959891949750929550565b600080604083850312156113f457600080fd5b6113fd83611229565b946020939093013593505050565b60006020828403121561141d57600080fd5b815180151581146112fe57600080fd5b60006020828403121561143f57600080fd5b5035919050565b600080600080600060a0868803121561145e57600080fd5b85359450602086013593506040860135925060608601359150611483608087016112d2565b90509295509295909350565b600080600080600080600060e0888a0312156114aa57600080fd5b87519650602088015195506040880151945060608801519350608088015163ffffffff60e01b811681146114dd57600080fd5b8093505060a0880151915060c0880151905092959891949750929550565b60008060008060008060c0878903121561151457600080fd5b863567ffffffffffffffff81111561152b57600080fd5b61153789828a01611245565b96505061154660208801611229565b945061155460408801611229565b9350606087013592506080870135915061157060a088016112d2565b90509295509295509295565b6000825160005b8181101561159d5760208186018101518583015201611583565b818111156115ac576000828501525b509190910192915050565b6020808252601190820152703ab739bab83837b93a32b2103a37b5b2b760791b604082015260600190565b600082198211156115f5576115f5611611565b500190565b60008282101561160c5761160c611611565b500390565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfe53776170526571756573742875696e743235362065787069726554732c627974657320696e546f6b656e2c75696e7432353620616d6f756e742c627974657334206f7574436861696e2c6279746573206f7574546f6b656e2c627974657320726563697069656e7429a164736f6c6343000806000a454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";

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
