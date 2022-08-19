/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  UCTUpgradeable,
  UCTUpgradeableInterface,
} from "../../../contracts/Token/UCTUpgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "batchMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "batchMint2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523060601b60805234801561001757600080fd5b5060805160601c6121ec610052600039600081816104b501528181610550015281816106ae01528181610744015261087301526121ec6000f3fe60806040526004361061010e5760003560e01c806352d1902d116100a5578063a457c2d711610074578063c4d66de811610059578063c4d66de8146102eb578063ce0520631461030b578063dd62ed3e1461032b57600080fd5b8063a457c2d7146102ab578063a9059cbb146102cb57600080fd5b806352d1902d1461021e57806370a082311461023357806383b74baa1461027657806395d89b411461029657600080fd5b8063313ce567116100e1578063313ce567146101ad5780633659cfe6146101c957806339509351146101eb5780634f1ef2861461020b57600080fd5b806306fdde0314610113578063095ea7b31461013e57806318160ddd1461016e57806323b872dd1461018d575b600080fd5b34801561011f57600080fd5b5061012861034b565b6040516101359190611f73565b60405180910390f35b34801561014a57600080fd5b5061015e610159366004611e0d565b6103dd565b6040519015158152602001610135565b34801561017a57600080fd5b506099545b604051908152602001610135565b34801561019957600080fd5b5061015e6101a8366004611d0d565b6103f7565b3480156101b957600080fd5b5060405160048152602001610135565b3480156101d557600080fd5b506101e96101e4366004611cbf565b61049d565b005b3480156101f757600080fd5b5061015e610206366004611e0d565b610674565b6101e9610219366004611d49565b610696565b34801561022a57600080fd5b5061017f610859565b34801561023f57600080fd5b5061017f61024e366004611cbf565b73ffffffffffffffffffffffffffffffffffffffff1660009081526097602052604090205490565b34801561028257600080fd5b506101e9610291366004611ef9565b61092b565b3480156102a257600080fd5b50610128610a7b565b3480156102b757600080fd5b5061015e6102c6366004611e0d565b610a8a565b3480156102d757600080fd5b5061015e6102e6366004611e0d565b610b28565b3480156102f757600080fd5b506101e9610306366004611cbf565b610b36565b34801561031757600080fd5b506101e9610326366004611e37565b610d4b565b34801561033757600080fd5b5061017f610346366004611cda565b610f26565b6060609a805461035a9061207b565b80601f01602080910402602001604051908101604052809291908181526020018280546103869061207b565b80156103d35780601f106103a8576101008083540402835291602001916103d3565b820191906000526020600020905b8154815290600101906020018083116103b657829003601f168201915b5050505050905090565b6000336103eb818585610fab565b60019150505b92915050565b60cb54600090339073ffffffffffffffffffffffffffffffffffffffff1681148015610454575073ffffffffffffffffffffffffffffffffffffffff80861660009081526098602090815260408083209385168352929052205483115b15610487577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff610485868383610fab565b505b61049285858561112a565b9150505b9392505050565b3073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016141561054e5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c000000000000000000000000000000000000000060648201526084015b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166105c37f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff161461064c5760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401610545565b61065581611143565b60408051600080825260208201909252610671918391906111c0565b50565b6000336103eb8185856106878383610f26565b6106919190612037565b610fab565b3073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614156107425760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152608401610545565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166107b77f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff16146108405760405162461bcd60e51b815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401610545565b61084982611143565b610855828260016111c0565b5050565b60003073ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146109065760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610545565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b60ca5473ffffffffffffffffffffffffffffffffffffffff1633146109925760405162461bcd60e51b815260206004820152601760248201527f43616c6c6572206973206e6f7420746865206f776e65720000000000000000006044820152606401610545565b60008251116109e35760405162461bcd60e51b815260206004820152601560248201527f54617267657420617272617920697320656d70747900000000000000000000006044820152606401610545565b610800825110610a355760405162461bcd60e51b815260206004820152601960248201527f54617267657420617272617920697320746f6f206c61726765000000000000006044820152606401610545565b60005b8251811015610a7657610a64838281518110610a5657610a56612137565b60200260200101518361139a565b80610a6e816120cf565b915050610a38565b505050565b6060609b805461035a9061207b565b60003381610a988286610f26565b905083811015610b105760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610545565b610b1d8286868403610fab565b506001949350505050565b6000336103eb8185856114a0565b600054610100900460ff1615808015610b565750600054600160ff909116105b80610b705750303b158015610b70575060005460ff166001145b610be25760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610545565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558015610c4057600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b610c976040518060600160405280602381526020016121bd602391396040518060400160405280600381526020017f5543540000000000000000000000000000000000000000000000000000000000815250611707565b60c98054337fffffffffffffffffffffffff00000000000000000000000000000000000000009182161790915560ca805490911673ffffffffffffffffffffffffffffffffffffffff8416179055801561085557600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b60ca5473ffffffffffffffffffffffffffffffffffffffff163314610db25760405162461bcd60e51b815260206004820152601760248201527f43616c6c6572206973206e6f7420746865206f776e65720000000000000000006044820152606401610545565b6000825111610e035760405162461bcd60e51b815260206004820152601560248201527f54617267657420617272617920697320656d70747900000000000000000000006044820152606401610545565b610800825110610e555760405162461bcd60e51b815260206004820152601960248201527f54617267657420617272617920697320746f6f206c61726765000000000000006044820152606401610545565b8051825114610ecc5760405162461bcd60e51b815260206004820152602f60248201527f7461726765747320616e6420616d6f756e74732073686f756c6420686176652060448201527f7468652073616d65206c656e67746800000000000000000000000000000000006064820152608401610545565b60005b8251811015610a7657610f14838281518110610eed57610eed612137565b6020026020010151838381518110610f0757610f07612137565b602002602001015161139a565b80610f1e816120cf565b915050610ecf565b60cb5460009073ffffffffffffffffffffffffffffffffffffffff83811691161415610f7357507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6103f1565b73ffffffffffffffffffffffffffffffffffffffff808416600090815260986020908152604080832093861683529290522054610496565b73ffffffffffffffffffffffffffffffffffffffff83166110335760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610545565b73ffffffffffffffffffffffffffffffffffffffff82166110bc5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610545565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526098602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60003361113885828561178e565b610b1d8585856114a0565b60c95473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146106715760405162461bcd60e51b815260206004820152600c60248201527f556e617574686f72697a656400000000000000000000000000000000000000006044820152606401610545565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156111f357610a7683611820565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561123957600080fd5b505afa925050508015611287575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820190925261128491810190611f3e565b60015b6112f95760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608401610545565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc811461138e5760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152608401610545565b50610a76838383611910565b73ffffffffffffffffffffffffffffffffffffffff82166113fd5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610545565b806099600082825461140f9190612037565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526097602052604081208054839290611449908490612037565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff83166115295760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610545565b73ffffffffffffffffffffffffffffffffffffffff82166115b25760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610545565b73ffffffffffffffffffffffffffffffffffffffff83166000908152609760205260409020548181101561164e5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610545565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260976020526040808220858503905591851681529081208054849290611692908490612037565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516116f891815260200190565b60405180910390a35b50505050565b600054610100900460ff166117845760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610545565b6108558282611935565b600061179a8484610f26565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461170157818110156118135760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610545565b6117018484848403610fab565b73ffffffffffffffffffffffffffffffffffffffff81163b6118aa5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401610545565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b611919836119d9565b6000825111806119265750805b15610a76576117018383611a26565b600054610100900460ff166119b25760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401610545565b81516119c590609a906020850190611b84565b508051610a7690609b906020840190611b84565b6119e281611820565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b606073ffffffffffffffffffffffffffffffffffffffff83163b611ab25760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152608401610545565b6000808473ffffffffffffffffffffffffffffffffffffffff1684604051611ada9190611f57565b600060405180830381855af49150503d8060008114611b15576040519150601f19603f3d011682016040523d82523d6000602084013e611b1a565b606091505b5091509150611b42828260405180606001604052806027815260200161219660279139611b4b565b95945050505050565b60608315611b5a575081610496565b825115611b6a5782518084602001fd5b8160405162461bcd60e51b81526004016105459190611f73565b828054611b909061207b565b90600052602060002090601f016020900481019282611bb25760008555611bf8565b82601f10611bcb57805160ff1916838001178555611bf8565b82800160010185558215611bf8579182015b82811115611bf8578251825591602001919060010190611bdd565b50611c04929150611c08565b5090565b5b80821115611c045760008155600101611c09565b803573ffffffffffffffffffffffffffffffffffffffff81168114611c4157600080fd5b919050565b600082601f830112611c5757600080fd5b81356020611c6c611c6783612013565b611fc4565b80838252828201915082860187848660051b8901011115611c8c57600080fd5b60005b85811015611cb257611ca082611c1d565b84529284019290840190600101611c8f565b5090979650505050505050565b600060208284031215611cd157600080fd5b61049682611c1d565b60008060408385031215611ced57600080fd5b611cf683611c1d565b9150611d0460208401611c1d565b90509250929050565b600080600060608486031215611d2257600080fd5b611d2b84611c1d565b9250611d3960208501611c1d565b9150604084013590509250925092565b60008060408385031215611d5c57600080fd5b611d6583611c1d565b915060208084013567ffffffffffffffff80821115611d8357600080fd5b818601915086601f830112611d9757600080fd5b813581811115611da957611da9612166565b611dd9847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611fc4565b91508082528784828501011115611def57600080fd5b80848401858401376000848284010152508093505050509250929050565b60008060408385031215611e2057600080fd5b611e2983611c1d565b946020939093013593505050565b60008060408385031215611e4a57600080fd5b823567ffffffffffffffff80821115611e6257600080fd5b611e6e86838701611c46565b9350602091508185013581811115611e8557600080fd5b85019050601f81018613611e9857600080fd5b8035611ea6611c6782612013565b80828252848201915084840189868560051b8701011115611ec657600080fd5b600094505b83851015611ee9578035835260019490940193918501918501611ecb565b5080955050505050509250929050565b60008060408385031215611f0c57600080fd5b823567ffffffffffffffff811115611f2357600080fd5b611f2f85828601611c46565b95602094909401359450505050565b600060208284031215611f5057600080fd5b5051919050565b60008251611f6981846020870161204f565b9190910192915050565b6020815260008251806020840152611f9281604085016020870161204f565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561200b5761200b612166565b604052919050565b600067ffffffffffffffff82111561202d5761202d612166565b5060051b60200190565b6000821982111561204a5761204a612108565b500190565b60005b8381101561206a578181015183820152602001612052565b838111156117015750506000910152565b600181811c9082168061208f57607f821691505b602082108114156120c9577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561210157612101612108565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c656455534420436f75706f6e20546f6b656e202868747470733a2f2f6d65736f6e2e666929a164736f6c6343000806000a";

type UCTUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UCTUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UCTUpgradeable__factory extends ContractFactory {
  constructor(...args: UCTUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UCTUpgradeable> {
    return super.deploy(overrides || {}) as Promise<UCTUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UCTUpgradeable {
    return super.attach(address) as UCTUpgradeable;
  }
  override connect(signer: Signer): UCTUpgradeable__factory {
    return super.connect(signer) as UCTUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UCTUpgradeableInterface {
    return new utils.Interface(_abi) as UCTUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UCTUpgradeable {
    return new Contract(address, _abi, signerOrProvider) as UCTUpgradeable;
  }
}
