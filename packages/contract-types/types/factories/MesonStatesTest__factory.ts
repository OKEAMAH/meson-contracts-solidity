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
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "index",
        type: "uint8",
      },
    ],
    name: "addSupportToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
      {
        internalType: "uint40",
        name: "providerIndex",
        type: "uint40",
      },
    ],
    name: "balanceIndexFrom",
    outputs: [
      {
        internalType: "bytes6",
        name: "",
        type: "bytes6",
      },
    ],
    stateMutability: "pure",
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
        internalType: "uint48",
        name: "balanceIndex",
        type: "uint48",
      },
    ],
    name: "decodeBalanceIndex",
    outputs: [
      {
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
      {
        internalType: "uint40",
        name: "providerIndex",
        type: "uint40",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "lockedSwap",
        type: "uint80",
      },
    ],
    name: "decodeLockedSwap",
    outputs: [
      {
        internalType: "uint40",
        name: "providerIndex",
        type: "uint40",
      },
      {
        internalType: "uint256",
        name: "until",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint200",
        name: "postedSwap",
        type: "uint200",
      },
    ],
    name: "decodePostedSwap",
    outputs: [
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "uint40",
        name: "providerIndex",
        type: "uint40",
      },
    ],
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
        internalType: "uint40",
        name: "providerIndex",
        type: "uint40",
      },
    ],
    name: "decodeSwap",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feeToMeson",
        type: "uint256",
      },
      {
        internalType: "uint80",
        name: "salt",
        type: "uint80",
      },
      {
        internalType: "uint256",
        name: "expireTs",
        type: "uint256",
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
        internalType: "bytes6",
        name: "balanceIndexForMeson",
        type: "bytes6",
      },
      {
        internalType: "bytes6",
        name: "outTokenBalanceIndex",
        type: "bytes6",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint48",
        name: "amount",
        type: "uint48",
      },
      {
        internalType: "uint80",
        name: "salt",
        type: "uint80",
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
        internalType: "uint256",
        name: "until",
        type: "uint256",
      },
      {
        internalType: "uint40",
        name: "providerIndex",
        type: "uint40",
      },
    ],
    name: "lockedSwapFrom",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    stateMutability: "pure",
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
  "0x608060405234801561001057600080fd5b50611661806100206000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c8063a7d3c6a8116100b2578063d4f8232211610081578063eba7fb7711610066578063eba7fb77146105ba578063f7888aec146105e7578063ff378719146105fa57600080fd5b8063d4f823221461056e578063e16a567d1461058157600080fd5b8063a7d3c6a81461039a578063b002249d146104d0578063b3df5b36146104e5578063c7e25a5e1461054057600080fd5b8063554cad8311610109578063793d1e28116100ee578063793d1e28146102795780639aff57d314610338578063a375b4741461036a57600080fd5b8063554cad83146101f05780636a4881dc1461023457600080fd5b80631aba3a551461013b5780631fdafaf41461017d5780632335093c146101925780634f139480146101dd575b600080fd5b610162610149366004611205565b60026020526000908152604090205464ffffffffff1681565b60405164ffffffffff90911681526020015b60405180910390f35b61019061018b366004611317565b610633565b005b6101cb6101a0366004611205565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60405160ff9091168152602001610174565b6101906101eb3660046112b8565b610647565b6102036101fe36600461148d565b61065d565b6040517fffffffffffff00000000000000000000000000000000000000000000000000009091168152602001610174565b61024761024236600461127d565b61067d565b6040805173ffffffffffffffffffffffffffffffffffffffff909316835264ffffffffff909116602083015201610174565b61028c610287366004611367565b6106a7565b604080519b8c5260208c019a909a52988a019790975269ffffffffffffffffffff909516606089015260808801939093527fffff00000000000000000000000000000000000000000000000000000000000091821660a088015260ff90811660c0880152911660e0860152166101008401527fffffffffffff00000000000000000000000000000000000000000000000000009081166101208401521661014082015261016001610174565b61034b6103463660046113a5565b610761565b6040805160ff909316835264ffffffffff909116602083015201610174565b61037d610378366004611472565b610771565b6040805164ffffffffff9093168352602083019190915201610174565b6104c36103a83660046113c0565b604080517fffffffffffff000000000000000000000000000000000000000000000000000060d08b901b1660208201527fffffffffffffffffffff0000000000000000000000000000000000000000000060b08a901b1660268201527fffffffffff00000000000000000000000000000000000000000000000000000060d889811b8216603084015288901b1660358201527fffff000000000000000000000000000000000000000000000000000000000000808716603a8301527fff0000000000000000000000000000000000000000000000000000000000000060f887811b8216603c850152918616603d8401529084901b16603f82015260609101604051602081830303815290604052905098975050505050505050565b6040516101749190611511565b6104d8610785565b60405161017491906114b7565b61051b6104f336600461138a565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610174565b61055361054e366004611367565b6108d2565b60405169ffffffffffffffffffff9091168152602001610174565b61019061057c366004611253565b6108fb565b6105ac61058f366004611457565b60281b65ff00000000001660009081526004602052604090205490565b604051908152602001610174565b6040517e3c0000000000000000000000000000000000000000000000000000000000008152602001610174565b6105ac6105f5366004611220565b610909565b61051b610608366004611457565b60ff1660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b6106408585858585610997565b5050505050565b610655868686868686610cb8565b505050505050565b64ffffffffff8116602883901b65ff0000000000161760d01b5b92915050565b600080602883901c73ffffffffffffffffffffffffffffffffffffffff165b9150825b9050915091565b60008060008060008060008060008060006106c28d60d01c90565b9a5060588d901c64ffffffffff169950605a8d901c643fffffffff1698506106ea8d60801c90565b975060308d901c64ffffffffff1696506107048d60081c90565b60f01b95508c94506107168d60201c90565b60f01b93506107258d60181c90565b92506107318d60281b90565b60d01b915065ff000000000060108e901b1664ffffffffff8d161760d01b90509295989b509295989b9093969950565b600080602883901c60ff1661069c565b80600064ffffffffff602883901c166106a0565b606060015b6101008160ff16101561083d5760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1661082b578060ff16600114156107d4575090565b6107df600182611584565b60ff1667ffffffffffffffff8111156107fa576107fa611625565b604051908082528060200260200182016040528015610823578160200160208202803683370190505b50915061083d565b80610835816115a7565b91505061078a565b60015b8160ff168160ff1610156108cd5760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1683610883600184611584565b60ff1681518110610896576108966115f6565b73ffffffffffffffffffffffffffffffffffffffff90921660209283029190910190910152806108c5816115a7565b915050610840565b505090565b60006effffffffffffffffffff0000000000602884901b1664ffffffffff8316175b9392505050565b610905828261105f565b5050565b73ffffffffffffffffffffffffffffffffffffffff80831660009081526001602090815260408083205493851683526002909152812054909160ff169064ffffffffff1680158061095b575060ff8216155b1561096b57600092505050610677565b64ffffffffff1660289190911b65ff000000000016176000908152600460205260409020549392505050565b73ffffffffffffffffffffffffffffffffffffffff8116610a19576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d7074792061646472657373000060448201526064015b60405180910390fd5b610a238560081c90565b61ffff1660c31415610b8f576040517f1954524f4e205369676e6564204d6573736167653a0a33320a00000000000000602082015260398101869052600090605901604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000845290830180835281905260ff8616918301919091526060820187905260808201869052915060019060a0016020604051602081039080840390855afa158015610aeb573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610b89576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610a10565b50610640565b6000858152602080822081527f7b521e60f64ab56ff03ddfb26df49be54b20672b7acfffc1adeb256b554ccb258083526040808420815194855292840180825283905260ff86169084015260608301879052608083018690529160019060a0016020604051602081039080840390855afa158015610c11573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610caf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610a10565b50505050505050565b73ffffffffffffffffffffffffffffffffffffffff8116610d35576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610a10565b610d3f8660081c90565b61ffff1660c31415610ed7576040517f1954524f4e205369676e6564204d6573736167653a0a33320a000000000000006020820152603981018790527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606087901b166059820152600090606d01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000845290830180835281905260ff8616918301919091526060820187905260808201869052915060019060a0016020604051602081039080840390855afa158015610e33573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610ed1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610a10565b50610655565b6000610ee38760201c90565b61ffff1660c31415610f34578560155260416020538660005260356000206020527ff6ea10de668a877958d46ed7d53eaf47124fda9bee9423390a28c203556a2e5560005260406000209050610f6e565b5060148590526000868152603481206020527fd23291d9d999318ac3ed13f43ac8003d6fbd69a4b532aeec9ffad516010a208c8152604090205b60408051600081526020810180835283905260ff851691810191909152606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610fc1573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614610caf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610a10565b60ff81166110c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f43616e6e6f7420757365203020617320746f6b656e20696e64657800000000006044820152606401610a10565b73ffffffffffffffffffffffffffffffffffffffff9091166000818152600160209081526040808320805460ff9096167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00909616861790559382528190529190912080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b803573ffffffffffffffffffffffffffffffffffffffff8116811461117a57600080fd5b919050565b80357fffff0000000000000000000000000000000000000000000000000000000000008116811461117a57600080fd5b803564ffffffffff8116811461117a57600080fd5b803565ffffffffffff8116811461117a57600080fd5b803560ff8116811461117a57600080fd5b803569ffffffffffffffffffff8116811461117a57600080fd5b60006020828403121561121757600080fd5b6108f482611156565b6000806040838503121561123357600080fd5b61123c83611156565b915061124a60208401611156565b90509250929050565b6000806040838503121561126657600080fd5b61126f83611156565b915061124a602084016111da565b60006020828403121561128f57600080fd5b813578ffffffffffffffffffffffffffffffffffffffffffffffffff811681146108f457600080fd5b60008060008060008060c087890312156112d157600080fd5b863595506112e160208801611156565b945060408701359350606087013592506112fd608088016111da565b915061130b60a08801611156565b90509295509295509295565b600080600080600060a0868803121561132f57600080fd5b85359450602086013593506040860135925061134d606087016111da565b915061135b60808701611156565b90509295509295909350565b6000806040838503121561137a57600080fd5b8235915061124a602084016111af565b60006020828403121561139c57600080fd5b6108f4826111af565b6000602082840312156113b757600080fd5b6108f4826111c4565b600080600080600080600080610100898b0312156113dd57600080fd5b6113e6896111c4565b97506113f460208a016111eb565b965061140260408a016111af565b955061141060608a016111af565b945061141e60808a0161117f565b935061142c60a08a016111da565b925061143a60c08a0161117f565b915061144860e08a016111da565b90509295985092959890939650565b60006020828403121561146957600080fd5b6108f4826111da565b60006020828403121561148457600080fd5b6108f4826111eb565b600080604083850312156114a057600080fd5b6114a9836111da565b915061124a602084016111af565b6020808252825182820181905260009190848201906040850190845b8181101561150557835173ffffffffffffffffffffffffffffffffffffffff16835292840192918401916001016114d3565b50909695505050505050565b600060208083528351808285015260005b8181101561153e57858101830151858201604001528201611522565b81811115611550576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b600060ff821660ff84168082101561159e5761159e6115c7565b90039392505050565b600060ff821660ff8114156115be576115be6115c7565b60010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea164736f6c6343000806000a";

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
