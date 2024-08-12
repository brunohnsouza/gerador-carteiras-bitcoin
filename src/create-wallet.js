const bip32 = require("bip32");
const bip39 = require("bip39");
const bicoin = require("bitcoinjs-lib");

// Bitcoin - Rede principal
// Testnet - Rede de testes
const network = bicoin.networks.testnet;

// Dereivação de carteiras HD
const path = "m/49'/1'/0'/0";

// Criando o mnemonico para a seed
let mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Criando a raiz da carteira
let root = bip32.fromSeed(seed, network);

// Criando uma conta
let account = root.derivePath(path);
let node = account.derive(0).derive(0);

let btcAddrees = bicoin.payments.p2wpkh({
  pubkey: node.publicKey,
  network: network,
}).address;

console.log("Carteira gerada");
console.log("Endereço: ", btcAddrees);
console.log("Chave privada: ", node.toWIF());
console.log("Seed: ", mnemonic);
