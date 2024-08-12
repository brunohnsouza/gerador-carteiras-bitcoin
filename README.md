# Gerador de carteiras

Projeto do Bootcamp **Binance - Blockchain Developer with Solidity** da [Digital Innovation One](https://www.dio.me/) na qual o instrutor [Cassiano Peres](https://github.com/cassianobrexbit/) mostrou:

- Como construir um gerador de carteiras de bitcoin;
- Como importar a carteira criada para um software gerenciador de carteiras;
- Como realizar transações de envio e recebimento de bitcoin.

## Índice

- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Licença](#licença)

## Requisitos

- [Node.js](https://nodejs.org/) v20 (ou posterior)
  - Dependências:
    - [bip32](https://www.npmjs.com/package/bip32) - ^2.0.6
    - [bip39](https://www.npmjs.com/package/bip39) - ^3.1.0
    - [bitcoinjs-lib](https://www.npmjs.com/package/bitcoinjs-lib) - ^6.1.6
- [Electrum Bitcoin Wallet](https://electrum.org/)
- [Bitcoin Faucet Generator](https://bitcoinfaucet.uo1.net/)

## Instalação

Siga as etapas abaixo para configurar o projeto em seu ambiente local:

1. Clone o repositório e acesse o diretório:

```bash
git clone git@github.com:brunohnsouza/gerador-carteiras-bitcoin.git
cd gerador-carteiras-bitcoin
```

2. Instale as dependências usando o `Node Package Manager (NPM)`:

```bash
npm install
```

3. Gere sua carteira executando o arquivo `create-wallet.js`:

```bash
node src/create-wallet.js
```

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
