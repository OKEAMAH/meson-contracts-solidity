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
        name: "ts",
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
    name: "getChainId",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentChain",
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
        name: "swapId",
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
  "0x610100604052605260808181529061121660a039805160209182012060408051808201825260088152674d65736f6e20466960c01b90840152805180820182526001808252603160f81b918501919091528151938401929092527fe127d7b8d403871d7ed6b19024db4422e92aee79823ba78ad61e52ee2a5f9b98908301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606083015260808201523060a082015260c001604051602081830303815290604052805190602001206000553480156100d757600080fd5b5061112f806100e76000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c806372cbf72e1161006657806372cbf72e1461012b5780639d86698514610140578063a8f81b1a146101c3578063bcc20ff6146101ec578063d541beb3146101ff57600080fd5b80633408e470146100985780633ce758b5146100ac57806361565d25146100c157806368c4ac26146100f8575b600080fd5b604051600181526020015b60405180910390f35b6100bf6100ba366004610ea2565b610212565b005b6100ea6100cf366004610e45565b6001600160a01b031660009081526004602052604090205490565b6040519081526020016100a3565b61011b610106366004610e45565b60016020526000908152604090205460ff1681565b60405190151581526020016100a3565b604051632000000f60e21b81526020016100a3565b61018c61014e366004610e89565b600660205260009081526040902080546001820154600283015460038401546004909401546001600160a01b03938416949284169391929091169085565b604080516001600160a01b03968716815294861660208601528401929092529092166060820152608081019190915260a0016100a3565b6100ea6101d1366004610e45565b6001600160a01b031660009081526005602052604090205490565b6100ea6101fa366004610f4d565b61036a565b6100bf61020d366004610e89565b61077f565b60008481526006602052604090206004015484906102685760405162461bcd60e51b815260206004820152600e60248201526d1cddd85c081b9bdd08199bdd5b9960921b60448201526064015b60405180910390fd5b600085815260066020908152604091829020825160a08101845281546001600160a01b039081168083526001840154821694830194909452600283015494820194909452600382015490931660608401526004015460808301526102d09087908787876109be565b6080810151606082015160208084015160008a815260069092526040822080546001600160a01b03199081168255600182018054821690556002820184905560038201805490911690556004019190915561032c828285610b04565b6040518981527f6921a2110a802468e8955f2885822155442ad19c60f42db0444a6993c23d20629060200160405180910390a1505050505050505050565b6001600160a01b038516600090815260016020526040812054869060ff166103c85760405162461bcd60e51b81526020600482015260116024820152703ab739bab83837b93a32b2103a37b5b2b760791b604482015260640161025f565b60008060006103d68b610c41565b6040516bffffffffffffffffffffffff1960608f901b16602082015292955090935091508290603401604051602081830303815290604052805190602001201461045b5760405162461bcd60e51b81526020600482015260166024820152750d2dca8ded6cadc40c8decae640dcdee840dac2e8c6d60531b604482015260640161025f565b600081116104b95760405162461bcd60e51b815260206004820152602560248201527f7377617020616d6f756e74206d7573742062652067726561746572207468616e604482015264207a65726f60d81b606482015260840161025f565b426104c6610e108261107d565b841161050b5760405162461bcd60e51b81526020600482015260146024820152736578706972657320747320746f6f206561726c7960601b604482015260640161025f565b610517611c208261107d565b841061055b5760405162461bcd60e51b81526020600482015260136024820152726578706972657320747320746f6f206c61746560681b604482015260640161025f565b6000338d5160208f01209750905061058487600090815260066020526040902060040154151590565b156105c15760405162461bcd60e51b815260206004820152600d60248201526c1cddd85c0818dbdb999b1a58dd609a1b604482015260640161025f565b6105cd878b8b8b610ce7565b6001600160a01b03168b6001600160a01b0316146106215760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964207369676e617475726560781b604482015260640161025f565b6040518060a001604052808c6001600160a01b03168152602001826001600160a01b031681526020018681526020018d6001600160a01b03168152602001848152506006600089815260200190815260200160002060008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060208201518160010160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506040820151816002015560608201518160030160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506080820151816004015590505061071f8c8c85610d8a565b60408051888152602081018490529081018490526001600160a01b038d1660608201527ff60f3861c423568d0aae6a3a3bc9d4b41c40ab0cb0267599d9d35122e4f320e89060800160405180910390a15050505050509695505050505050565b60008181526006602052604090206004015481906107d05760405162461bcd60e51b815260206004820152600e60248201526d1cddd85c081b9bdd08199bdd5b9960921b604482015260640161025f565b600082815260066020526040902060020154829042116108255760405162461bcd60e51b815260206004820152601060248201526f1cddd85c081b9bdd08195e1c1a5c995960821b604482015260640161025f565b6000600660008581526020019081526020016000206040518060a00160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016001820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001600282015481526020016003820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001600482015481525050905060008160600151905060008260000151905060008360800151905060066000888152602001908152602001600020600080820160006101000a8154906001600160a01b0302191690556001820160006101000a8154906001600160a01b03021916905560028201600090556003820160006101000a8154906001600160a01b03021916905560048201600090555050610982838383610b04565b6040518781527f5a399591cfd74c375a1ffd61c20221db0db82381f65516889ed13c8cd1f99d5b9060200160405180910390a150505050505050565b6001600160a01b038416610a145760405162461bcd60e51b815260206004820152601e60248201527f7369676e65722063616e6e6f7420626520656d70747920616464726573730000604482015260640161025f565b604080518082018252601b81527f5377617052656c656173652862797465733332207377617049642900000000006020918201529051600091610a84917ffb1f98601c589a04e2ceca199119c17bd547893fffb8d088acdae5aff4f9b19d91899101918252602082015260400190565b604051602081830303815290604052805190602001209050610aa881858585610ce7565b6001600160a01b0316856001600160a01b031614610afc5760405162461bcd60e51b8152602060048201526011602482015270696e76616c6964207369676e617475726560781b604482015260640161025f565b505050505050565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b17905291516000928392871691610b909190611042565b6000604051808303816000865af19150503d8060008114610bcd576040519150601f19603f3d011682016040523d82523d6000602084013e610bd2565b606091505b5091509150818015610bfc575080511580610bfc575080806020019051810190610bfc9190610e67565b610c3a5760405162461bcd60e51b815260206004820152600f60248201526e1d1c985b9cd9995c8819985a5b1959608a1b604482015260640161025f565b5050505050565b600080600080600080600087806020019051810190610c609190610ee1565b50505093509350935093506040518060a00160405280606981526020016110ba60699139805190602001208414610cd95760405162461bcd60e51b815260206004820152601d60248201527f496e76616c696420737761702072657175657374207479706568617368000000604482015260640161025f565b919790965090945092505050565b6000805460405161190160f01b6020820152602281019190915260428101869052819060620160408051601f1981840301815282825280516020918201206000845290830180835281905260ff8616918301919091526060820187905260808201869052915060019060a0016020604051602081039080840390855afa158015610d75573d6000803e3d6000fd5b5050604051601f190151979650505050505050565b6040516323b872dd60e01b81526001600160a01b038381166004830152306024830152604482018390528416906323b872dd90606401602060405180830381600087803b158015610dda57600080fd5b505af1158015610dee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e129190610e67565b50505050565b80356001600160a01b0381168114610e2f57600080fd5b919050565b803560ff81168114610e2f57600080fd5b600060208284031215610e5757600080fd5b610e6082610e18565b9392505050565b600060208284031215610e7957600080fd5b81518015158114610e6057600080fd5b600060208284031215610e9b57600080fd5b5035919050565b60008060008060808587031215610eb857600080fd5b843593506020850135925060408501359150610ed660608601610e34565b905092959194509250565b600080600080600080600060e0888a031215610efc57600080fd5b87519650602088015195506040880151945060608801519350608088015163ffffffff60e01b81168114610f2f57600080fd5b8093505060a0880151915060c0880151905092959891949750929550565b60008060008060008060c08789031215610f6657600080fd5b863567ffffffffffffffff80821115610f7e57600080fd5b818901915089601f830112610f9257600080fd5b813581811115610fa457610fa46110a3565b604051601f8201601f19908116603f01168101908382118183101715610fcc57610fcc6110a3565b816040528281528c6020848701011115610fe557600080fd5b82602086016020830137600060208483010152809a50505050505061100c60208801610e18565b945061101a60408801610e18565b9350606087013592506080870135915061103660a08801610e34565b90509295509295509295565b6000825160005b818110156110635760208186018101518583015201611049565b81811115611072576000828501525b509190910192915050565b6000821982111561109e57634e487b7160e01b600052601160045260246000fd5b500190565b634e487b7160e01b600052604160045260246000fdfe53776170526571756573742875696e743235362065787069726554732c627974657320696e546f6b656e2c75696e7432353620616d6f756e742c627974657334206f7574436861696e2c6279746573206f7574546f6b656e2c627974657320726563697069656e7429a164736f6c6343000806000a454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";

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
