/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MesonSwapTest, MesonSwapTestInterface } from "../MesonSwapTest";

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
        internalType: "uint64",
        name: "expireTs",
        type: "uint64",
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
    ],
    name: "SwapRequested",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "addTokenToSwapList",
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
        internalType: "bytes",
        name: "recipient",
        type: "bytes",
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
        internalType: "bool",
        name: "depositToPool",
        type: "bool",
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
        internalType: "bytes32",
        name: "swapId",
        type: "bytes32",
      },
    ],
    name: "hasSwap",
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
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "expireTs",
        type: "uint64",
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
  "0x610100604052605260808181529061188360a039805160209182012060408051808201825260088152674d65736f6e20466960c01b908401528051808201825260018152603160f81b908401528051928301919091527fe127d7b8d403871d7ed6b19024db4422e92aee79823ba78ad61e52ee2a5f9b98908201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c001604051602081830303815290604052805190602001206000553480156100d457600080fd5b5061179f806100e46000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806394149c1a1161008c578063bcc20ff611610066578063bcc20ff614610264578063d23d1c7614610277578063d541beb31461028a578063f7888aec1461029d57600080fd5b806394149c1a146101915780639d866985146101a6578063a8f81b1a1461023b57600080fd5b80631548fdce146100d45780633b11d5ac146100e9578063552c01201461010f57806361565d251461012257806368c4ac261461014b5780638dac03cd1461017e575b600080fd5b6100e76100e236600461145d565b6102c8565b005b6100fc6100f736600461156b565b6103c3565b6040519081526020015b60405180910390f35b6100e761011d3660046114ee565b610537565b6100fc6101303660046113eb565b6001600160a01b031660009081526005602052604090205490565b61016e6101593660046113eb565b60016020526000908152604090205460ff1681565b6040519015158152602001610106565b61016e61018c36600461145d565b6106f0565b604051632000000f60e21b8152602001610106565b6101fa6101b436600461145d565b600760205260009081526040902080546001820154600283015460038401546004909401546001600160a01b03938416949284169390911691906001600160401b031685565b604080516001600160a01b0396871681529486166020860152929094169183019190915260608201526001600160401b03909116608082015260a001610106565b6100fc6102493660046113eb565b6001600160a01b031660009081526006602052604090205490565b6100fc6102723660046115af565b61070b565b6100e76102853660046113eb565b610958565b6100e761029836600461145d565b610964565b6100fc6102ab36600461140d565b600260209081526000928352604080842090915290825290205481565b60008181526007602052604090206003015481906103015760405162461bcd60e51b81526004016102f89061166a565b60405180910390fd5b6000828152600760205260409020600101546001600160a01b0316156103695760405162461bcd60e51b815260206004820152601f60248201527f7377617020626f6e64656420746f20616e6f746865722070726f76696465720060448201526064016102f8565b60008281526007602090815260409182902060010180546001600160a01b03191633179055815184815291517f9dadb60bc000bbd7b49430723ed56b6aa35909dcab91ec2cb17ed5da7ae4ffd69281900390910190a15050565b6001600160a01b038116600090815260016020526040812054829060ff166104215760405162461bcd60e51b81526020600482015260116024820152703ab739bab83837b93a32b2103a37b5b2b760791b60448201526064016102f8565b60008060006104308787610bc5565b925092509250600061043f3390565b6040805160a0810182526001600160a01b038084168252600060208084018281528d8416858701908152606086018a81526001600160401b03808d16608089019081528e8752600790955297909420955186549086166001600160a01b03199182161787559151600187018054918716918416919091179055516002860180549190951691161790925551600383015551600490910180549190921667ffffffffffffffff1990911617905590506104f8878284610e2b565b6040518481527fa67aeefca6ffac499b56c6e714636f7ade5d82fde82aef50665ad3e88be5cb4b9060200160405180910390a150919695505050505050565b60008681526007602052604090206003015486906105675760405162461bcd60e51b81526004016102f89061166a565b6000878152600760209081526040808320815160a08101835281546001600160a01b039081168083526001840154821683870152600284015490911693820193909352600382015460608201526004909101546001600160401b031660808201528951928a0192909220925491926105e3928b928a8a8a610eb9565b604080820151602080840151606085015160008d8152600790935293822080546001600160a01b0319908116825560018201805482169055600282018054909116905560038101929092556004909101805467ffffffffffffffff19169055909185156106a5576001600160a01b0380841660009081526002602090815260408083209386168352929052205461067a9082611060565b6001600160a01b038085166000908152600260209081526040808320938716835292905220556106b0565b6106b083838361107b565b6040518b81527f6921a2110a802468e8955f2885822155442ad19c60f42db0444a6993c23d20629060200160405180910390a15050505050505050505050565b60008181526007602052604081206003015415155b92915050565b6001600160a01b038516600090815260016020526040812054869060ff166107695760405162461bcd60e51b81526020600482015260116024820152703ab739bab83837b93a32b2103a37b5b2b760791b60448201526064016102f8565b60008060006107788b8b610bc5565b60408051600081526020810180835285905260ff8b1691810191909152606081018c9052608081018b9052929550909350915060019060a0016020604051602081039080840390855afa1580156107d3573d6000803e3d6000fd5b505050602060405103516001600160a01b0316896001600160a01b0316146108315760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964207369676e617475726560781b60448201526064016102f8565b6040805160a0810182526001600160a01b038b811682523360208084018281528f8416858701908152606086018881526001600160401b038a81166080890190815260008d8152600790965298909420965187546001600160a01b031990811691881691909117885592516001880180548516918816919091179055905160028701805490931695169490941790559151600384015592516004909201805467ffffffffffffffff1916929091169190911790556108f08b8b84610e2b565b604080518581526001600160401b03851660208201529081018390526001600160a01b038c1660608201527ff3c3b2928ca3aaa9c73469b9a28d8a4ebaa18b9698b443162ee5d8c77fe05d6c9060800160405180910390a150919a9950505050505050505050565b610961816111b8565b50565b60008181526007602052604090206003015481906109945760405162461bcd60e51b81526004016102f89061166a565b60008281526007602052604090206004015482906001600160401b034281169116106109f55760405162461bcd60e51b815260206004820152601060248201526f1cddd85c081b9bdd08195e1c1a5c995960821b60448201526064016102f8565b6000600760008581526020019081526020016000206040518060a00160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016002820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001600382015481526020016004820160009054906101000a90046001600160401b03166001600160401b03166001600160401b031681525050905060008160400151905060008260000151905060008360600151905060076000888152602001908152602001600020600080820160006101000a8154906001600160a01b0302191690556001820160006101000a8154906001600160a01b0302191690556002820160006101000a8154906001600160a01b03021916905560038201600090556004820160006101000a8154906001600160401b0302191690555050610b8983838361107b565b6040518781527f5a399591cfd74c375a1ffd61c20221db0db82381f65516889ed13c8cd1f99d5b9060200160405180910390a150505050505050565b600080600080600080610bd78861122f565b6040516bffffffffffffffffffffffff1960608c901b166020820152929550909350915082906034016040516020818303038152906040528051906020012014610c5c5760405162461bcd60e51b81526020600482015260166024820152750d2dca8ded6cadc40c8decae640dcdee840dac2e8c6d60531b60448201526064016102f8565b60008111610cba5760405162461bcd60e51b815260206004820152602560248201527f7377617020616d6f756e74206d7573742062652067726561746572207468616e604482015264207a65726f60d81b60648201526084016102f8565b42610cc7610e10826116aa565b6001600160401b0316846001600160401b031611610d1e5760405162461bcd60e51b81526020600482015260146024820152736578706972657320747320746f6f206561726c7960601b60448201526064016102f8565b610d2a611c20826116aa565b6001600160401b0316846001600160401b031610610d805760405162461bcd60e51b81526020600482015260136024820152726578706972657320747320746f6f206c61746560681b60448201526064016102f8565b6000610dc98a80516020918201206000546040805161190160f01b8186015260228101929092526042808301939093528051808303909301835260629091019052805191012090565b60008181526007602052604090206003015490915015610e1b5760405162461bcd60e51b815260206004820152600d60248201526c1cddd85c0818dbdb999b1a58dd609a1b60448201526064016102f8565b9650929450925050509250925092565b6040516323b872dd60e01b81526001600160a01b038381166004830152306024830152604482018390528416906323b872dd90606401602060405180830381600087803b158015610e7b57600080fd5b505af1158015610e8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb39190611440565b50505050565b6001600160a01b038416610f0f5760405162461bcd60e51b815260206004820152601e60248201527f7369676e65722063616e6e6f7420626520656d7074792061646472657373000060448201526064016102f8565b60006040518060600160405280602b8152602001611768602b91398051602091820120604080519283019190915281018990526060810188905260800160405160208183030381529060405280519060200120905060008682604051602001610f8f92919061190160f01b81526002810192909252602282015260420190565b60408051601f1981840301815282825280516020918201206000845290830180835281905260ff8616918301919091526060820187905260808201869052915060019060a0016020604051602081039080840390855afa158015610ff7573d6000803e3d6000fd5b505050602060405103516001600160a01b0316866001600160a01b0316146110555760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964207369676e617475726560781b60448201526064016102f8565b505050505050505050565b60008261106d8382611692565b915081101561070557600080fd5b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b17905291516000928392871691611107919061162f565b6000604051808303816000865af19150503d8060008114611144576040519150601f19603f3d011682016040523d82523d6000602084013e611149565b606091505b50915091508180156111735750805115806111735750808060200190518101906111739190611440565b6111b15760405162461bcd60e51b815260206004820152600f60248201526e1d1c985b9cd9995c8819985a5b1959608a1b60448201526064016102f8565b5050505050565b6001600160a01b0381166000818152600160208181526040808420805460ff1916841790558051608081018252848152808301858152818301868152606083810181815298885260048652939096208251815590519481019490945593516002840155935180516111b192600385019201906112d2565b60008060008060008060008780602001905181019061124e9190611476565b50509350935093509350604051806080016040528060588152602001611710605891398051906020012084146112c65760405162461bcd60e51b815260206004820152601d60248201527f496e76616c69642073776170207265717565737420747970656861736800000060448201526064016102f8565b97919650945092505050565b82805482825590600052602060002090810192821561130d579160200282015b8281111561130d5782518255916020019190600101906112f2565b5061131992915061131d565b5090565b5b80821115611319576000815560010161131e565b80356001600160a01b038116811461134957600080fd5b919050565b600082601f83011261135f57600080fd5b81356001600160401b0380821115611379576113796116eb565b604051601f8301601f19908116603f011681019082821181831017156113a1576113a16116eb565b816040528381528660208588010111156113ba57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803560ff8116811461134957600080fd5b6000602082840312156113fd57600080fd5b61140682611332565b9392505050565b6000806040838503121561142057600080fd5b61142983611332565b915061143760208401611332565b90509250929050565b60006020828403121561145257600080fd5b815161140681611701565b60006020828403121561146f57600080fd5b5035919050565b60008060008060008060c0878903121561148f57600080fd5b86519550602087015194506040870151935060608701516001600160401b03811681146114bb57600080fd5b60808801519093506001600160e01b0319811681146114d957600080fd5b8092505060a087015190509295509295509295565b60008060008060008060c0878903121561150757600080fd5b8635955060208701356001600160401b0381111561152457600080fd5b61153089828a0161134e565b955050604087013593506060870135925061154d608088016113da565b915060a087013561155d81611701565b809150509295509295509295565b6000806040838503121561157e57600080fd5b82356001600160401b0381111561159457600080fd5b6115a08582860161134e565b92505061143760208401611332565b60008060008060008060c087890312156115c857600080fd5b86356001600160401b038111156115de57600080fd5b6115ea89828a0161134e565b9650506115f960208801611332565b945061160760408801611332565b9350606087013592506080870135915061162360a088016113da565b90509295509295509295565b6000825160005b818110156116505760208186018101518583015201611636565b8181111561165f576000828501525b509190910192915050565b6020808252600e908201526d1cddd85c081b9bdd08199bdd5b9960921b604082015260600190565b600082198211156116a5576116a56116d5565b500190565b60006001600160401b038083168185168083038211156116cc576116cc6116d5565b01949350505050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b801515811461096157600080fdfe537761705265717565737428627974657320696e546f6b656e2c75696e7432353620616d6f756e742c75696e7436342065787069726554732c627974657334206f7574436861696e2c6279746573206f7574546f6b656e295377617052656c656173652862797465733332207377617049642c627974657320726563697069656e7429a164736f6c6343000806000a454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";

type MesonSwapTestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MesonSwapTestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MesonSwapTest__factory extends ContractFactory {
  constructor(...args: MesonSwapTestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MesonSwapTest> {
    return super.deploy(overrides || {}) as Promise<MesonSwapTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MesonSwapTest {
    return super.attach(address) as MesonSwapTest;
  }
  connect(signer: Signer): MesonSwapTest__factory {
    return super.connect(signer) as MesonSwapTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MesonSwapTestInterface {
    return new utils.Interface(_abi) as MesonSwapTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MesonSwapTest {
    return new Contract(address, _abi, signerOrProvider) as MesonSwapTest;
  }
}
