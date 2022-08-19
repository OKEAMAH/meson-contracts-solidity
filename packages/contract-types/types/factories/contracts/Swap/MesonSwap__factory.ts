/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MesonSwap,
  MesonSwapInterface,
} from "../../../contracts/Swap/MesonSwap";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "SwapBonded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "SwapCancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "SwapPosted",
    type: "event",
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
        name: "poolIndex",
        type: "uint40",
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
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
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
    inputs: [
      {
        internalType: "uint256",
        name: "encodedSwap",
        type: "uint256",
      },
    ],
    name: "getPostedSwap",
    outputs: [
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "address",
        name: "poolOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "executed",
        type: "bool",
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
        internalType: "uint40",
        name: "",
        type: "uint40",
      },
    ],
    name: "ownerOfPool",
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
        name: "",
        type: "address",
      },
    ],
    name: "poolOfAuthorizedAddr",
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
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "poolTokenBalance",
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
        internalType: "uint200",
        name: "postingValue",
        type: "uint200",
      },
    ],
    name: "postSwap",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "serviceFeeCollected",
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
  "0x608060405234801561001057600080fd5b50611f72806100206000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80638302ce5a1161008c578063b002249d11610066578063b002249d1461029b578063d3e95ea4146102b0578063eba7fb77146102c3578063ff378719146102f057600080fd5b80638302ce5a146101f457806389a734c0146102075780638b0a77651461026257600080fd5b80634d11b0f1116100bd5780634d11b0f11461019157806354d6a2b7146101a45780637fe0282b146101b757600080fd5b80631e2a6075146100e45780632335093c1461013157806335eff30f1461017c575b600080fd5b6100f76100f2366004611c79565b610329565b6040805173ffffffffffffffffffffffffffffffffffffffff94851681529390921660208401521515908201526060015b60405180910390f35b61016a61013f366004611c07565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60405160ff9091168152602001610128565b61018f61018a366004611d67565b6103bb565b005b61018f61019f366004611c92565b6105a3565b61018f6101b2366004611c79565b61078b565b6101de6101c5366004611c07565b60026020526000908152604090205464ffffffffff1681565b60405164ffffffffff9091168152602001610128565b61018f610202366004611cf5565b610909565b61023d610215366004611d8a565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610128565b61028d610270366004611da5565b60281b65ff00000000001660009081526004602052604090205490565b604051908152602001610128565b6102a3610cac565b6040516101289190611dfb565b61028d6102be366004611c29565b610df9565b6040517e3c0000000000000000000000000000000000000000000000000000000000008152602001610128565b61023d6102fe366004611da5565b60ff1660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b600081815260056020526040812054602881901c73ffffffffffffffffffffffffffffffffffffffff16919078ffffffffffffffffffffffffffffffffffffffffffffffffff1660018114908361038357600092506103b3565b64ffffffffff811660009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff1692505b509193909250565b60008281526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff166001811161043a5760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f742065786973740000000000000000000000000060448201526064015b60405180910390fd5b8064ffffffffff161561048f5760405162461bcd60e51b815260206004820152601b60248201527f5377617020626f6e64656420746f20616e6f7468657220706f6f6c00000000006044820152606401610431565b3360009081526002602052604090205464ffffffffff83811691161461051d5760405162461bcd60e51b815260206004820152603860248201527f5369676e65722073686f756c6420626520616e20617574686f72697a6564206160448201527f646472657373206f662074686520676976656e20706f6f6c00000000000000006064820152608401610431565b60008381526005602052604080822080547fffffffffffffff000000000000000000000000000000000000000000000000001664ffffffffff861678ffffffffffffffffffffffffffffffffffffffffffffffffff8616171790555184917f60a99b51ae498c44acbbe11031aed2a06a32be66d2122e6e2a7a16c087865cc991a2505050565b60008681526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff166001811161061d5760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610431565b610629610e1042611e55565b603088901c64ffffffffff16101561067457600087815260056020526040902080547fffffffffffffff000000000000000000000000000000000000000000000000001690556106ac565b600087815260056020526040902080547fffffffffffffff000000000000000000000000000000000000000000000000001660011790555b6106d48784888888602887901c73ffffffffffffffffffffffffffffffffffffffff16610e89565b86818315610725576106e68960d01c90565b64ffffffffff8216602884901b65ff000000000016176000908152600460205260408120805490919061071a908490611e55565b909155506107809050565b60ff82166000908152602081815260408083205464ffffffffff851684526003909252909120546107809173ffffffffffffffffffffffffffffffffffffffff90811691166107748c60d01c90565b8560ff1660ff14611418565b505050505050505050565b60008181526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff16600181116108055760405162461bcd60e51b815260206004820152601360248201527f5377617020646f6573206e6f74206578697374000000000000000000000000006044820152606401610431565b42603083901c64ffffffffff161061085f5760405162461bcd60e51b815260206004820152601460248201527f53776170206973207374696c6c206c6f636b65640000000000000000000000006044820152606401610431565b600082815260056020908152604080832080547fffffffffffffff0000000000000000000000000000000000000000000000000016905560ff851683529082905290205482906108d99073ffffffffffffffffffffffffffffffffffffffff90811690602885901c1660d084901c8460ff1660ff14611418565b60405183907ff6b6b4f7a13f02512c1b3aa8dcc4a07d7775a6a4becbd439efcbd37c5408e67f90600090a2505050565b84603c6109168260081c90565b61ffff16146109675760405162461bcd60e51b815260206004820152601760248201527f53776170206e6f7420666f72207468697320636861696e0000000000000000006044820152606401610431565b60008681526005602052604090205478ffffffffffffffffffffffffffffffffffffffffffffffffff16156109de5760405162461bcd60e51b815260206004820152601360248201527f5377617020616c726561647920657869737473000000000000000000000000006044820152606401610431565b60006109ea8760d01c90565b905064174876e800811115610a675760405162461bcd60e51b815260206004820152603760248201527f466f7220736563757269747920726561736f6e2c20616d6f756e742063616e6e60448201527f6f742062652067726561746572207468616e203130306b0000000000000000006064820152608401610431565b6000610a7e4264ffffffffff60308b901c16611e6d565b9050610e108111610ad15760405162461bcd60e51b815260206004820152601360248201527f45787069726520747320746f6f206561726c79000000000000000000000000006044820152606401610431565b611c208110610b225760405162461bcd60e51b815260206004820152601260248201527f45787069726520747320746f6f206c61746500000000000000000000000000006044820152606401610431565b8364ffffffffff811615610bbe573360009081526002602052604090205464ffffffffff828116911614610bbe5760405162461bcd60e51b815260206004820152603860248201527f5369676e65722073686f756c6420626520616e20617574686f72697a6564206160448201527f646472657373206f662074686520676976656e20706f6f6c00000000000000006064820152608401610431565b73ffffffffffffffffffffffffffffffffffffffff602886901c16610be68a8a8a8a85611567565b60008a815260056020526040812080547fffffffffffffff000000000000000000000000000000000000000000000000001678ffffffffffffffffffffffffffffffffffffffffffffffffff89161790558a60ff808216600081815260208190526040902054929350610c749273ffffffffffffffffffffffffffffffffffffffff169185918991146119b0565b6040518b907f5ce4019f772fda6cb703b26bce3ec3006eb36b73f1d3a0eb441213317d9f5e9d90600090a25050505050505050505050565b606060015b6101008160ff161015610d645760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff16610d52578060ff1660011415610cfb575090565b610d06600182611e84565b60ff1667ffffffffffffffff811115610d2157610d21611f25565b604051908082528060200260200182016040528015610d4a578160200160208202803683370190505b509150610d64565b80610d5c81611ea7565b915050610cb1565b60015b8160ff168160ff161015610df45760ff811660009081526020819052604090205473ffffffffffffffffffffffffffffffffffffffff1683610daa600184611e84565b60ff1681518110610dbd57610dbd611ef6565b73ffffffffffffffffffffffffffffffffffffffff9092166020928302919091019091015280610dec81611ea7565b915050610d67565b505090565b73ffffffffffffffffffffffffffffffffffffffff80831660009081526001602090815260408083205493851683526002909152812054909160ff169064ffffffffff16801580610e4b575060ff8216155b15610e5b57600092505050610e83565b64ffffffffff1660289190911b65ff0000000000161760009081526004602052604090205490505b92915050565b73ffffffffffffffffffffffffffffffffffffffff8116610eec5760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610431565b8160ff16601b1480610f0157508160ff16601c145b610f4d5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610431565b7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610fbd5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610431565b79080000000000000000000000000000000000000000000000000086161515600887901c61ffff1660c314156111af5760008161101a577f1954524f4e205369676e6564204d6573736167653a0a33320a0000000000000061103c565b7f1954524f4e205369676e6564204d6573736167653a0a35330a000000000000005b6040517fffffffffffffffffffffffffffffffffffffffffffffffffff000000000000009091166020820152603981018990527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606089901b166059820152606d01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000845290830180835281905260ff8716918301919091526060820188905260808201879052915060019060a0016020604051602081039080840390855afa158015611124573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146111a85760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610431565b5050611410565b600081156112a1576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000009061121a908a908a9060200191825260601b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016602082015260340190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905280516020918201207fffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000090931690820152603c810191909152605c01604051602081830303815290604052805190602001209050611336565b6112ab8860201c90565b61ffff1660c314156112fc578660155260416020538760005260356000206020527ff6ea10de668a877958d46ed7d53eaf47124fda9bee9423390a28c203556a2e5560005260406000209050611336565b5060148690526000878152603481206020527fd23291d9d999318ac3ed13f43ac8003d6fbd69a4b532aeec9ffad516010a208c8152604090205b60408051600081526020810180835283905260ff861691810191909152606081018790526080810186905260019060a0016020604051602081039080840390855afa158015611389573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461140d5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610431565b50505b505050505050565b6040805173ffffffffffffffffffffffffffffffffffffffff8581166024830152604480830186905283518084039091018152606490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905291516000928392908816916114af9190611dc0565b6000604051808303816000865af19150503d80600081146114ec576040519150601f19603f3d011682016040523d82523d6000602084013e6114f1565b606091505b509150915081801561151b57508051158061151b57508080602001905181019061151b9190611c5c565b6114105760405162461bcd60e51b815260206004820152600f60248201527f7472616e73666572206661696c656400000000000000000000000000000000006044820152606401610431565b73ffffffffffffffffffffffffffffffffffffffff81166115ca5760405162461bcd60e51b815260206004820152601e60248201527f5369676e65722063616e6e6f7420626520656d707479206164647265737300006044820152606401610431565b8160ff16601b14806115df57508160ff16601c145b61162b5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610431565b7f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561169b5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610431565b79080000000000000000000000000000000000000000000000000085161515600886901c61ffff1660c31415611862576000816116f8577f1954524f4e205369676e6564204d6573736167653a0a33320a0000000000000061171a565b7f1954524f4e205369676e6564204d6573736167653a0a33330a000000000000005b6040517fffffffffffffffffffffffffffffffffffffffffffffffffff000000000000009091166020820152603981018890526059015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815282825280516020918201206000845290830180835281905260ff8716918301919091526060820188905260808201879052915060019060a0016020604051602081039080840390855afa1580156117d7573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461185b5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610431565b50506119a9565b80156118a3576040517f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152603c8101879052600090605c01611751565b6000868152602080822081527f7b521e60f64ab56ff03ddfb26df49be54b20672b7acfffc1adeb256b554ccb258083526040808420815194855292840180825283905260ff87169084015260608301889052608083018790529160019060a0016020604051602081039080840390855afa158015611925573d6000803e3d6000fd5b5050506020604051035173ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161461140d5760405162461bcd60e51b815260206004820152601160248201527f496e76616c6964207369676e61747572650000000000000000000000000000006044820152606401610431565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff8416611a135760405162461bcd60e51b815260206004820152601360248201527f546f6b656e206e6f7420737570706f72746564000000000000000000000000006044820152606401610431565b60008211611a635760405162461bcd60e51b815260206004820181905260248201527f416d6f756e74206d7573742062652067726561746572207468616e207a65726f6044820152606401610431565b6040805173ffffffffffffffffffffffffffffffffffffffff8581166024830152306044830152606480830186905283518084039091018152608490920183526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd000000000000000000000000000000000000000000000000000000001790529151600092839290881691611b009190611dc0565b6000604051808303816000865af19150503d8060008114611b3d576040519150601f19603f3d011682016040523d82523d6000602084013e611b42565b606091505b5091509150818015611b6c575080511580611b6c575080806020019051810190611b6c9190611c5c565b6114105760405162461bcd60e51b815260206004820152601360248201527f7472616e7366657246726f6d206661696c6564000000000000000000000000006044820152606401610431565b803573ffffffffffffffffffffffffffffffffffffffff81168114611bdc57600080fd5b919050565b803564ffffffffff81168114611bdc57600080fd5b803560ff81168114611bdc57600080fd5b600060208284031215611c1957600080fd5b611c2282611bb8565b9392505050565b60008060408385031215611c3c57600080fd5b611c4583611bb8565b9150611c5360208401611bb8565b90509250929050565b600060208284031215611c6e57600080fd5b8151611c2281611f54565b600060208284031215611c8b57600080fd5b5035919050565b60008060008060008060c08789031215611cab57600080fd5b863595506020870135945060408701359350611cc960608801611bf6565b9250611cd760808801611bb8565b915060a0870135611ce781611f54565b809150509295509295509295565b600080600080600060a08688031215611d0d57600080fd5b853594506020860135935060408601359250611d2b60608701611bf6565b9150608086013578ffffffffffffffffffffffffffffffffffffffffffffffffff81168114611d5957600080fd5b809150509295509295909350565b60008060408385031215611d7a57600080fd5b82359150611c5360208401611be1565b600060208284031215611d9c57600080fd5b611c2282611be1565b600060208284031215611db757600080fd5b611c2282611bf6565b6000825160005b81811015611de15760208186018101518583015201611dc7565b81811115611df0576000828501525b509190910192915050565b6020808252825182820181905260009190848201906040850190845b81811015611e4957835173ffffffffffffffffffffffffffffffffffffffff1683529284019291840191600101611e17565b50909695505050505050565b60008219821115611e6857611e68611ec7565b500190565b600082821015611e7f57611e7f611ec7565b500390565b600060ff821660ff841680821015611e9e57611e9e611ec7565b90039392505050565b600060ff821660ff811415611ebe57611ebe611ec7565b60010192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b8015158114611f6257600080fd5b5056fea164736f6c6343000806000a";

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

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MesonSwap> {
    return super.deploy(overrides || {}) as Promise<MesonSwap>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MesonSwap {
    return super.attach(address) as MesonSwap;
  }
  override connect(signer: Signer): MesonSwap__factory {
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
