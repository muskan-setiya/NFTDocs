# NFTDocs

## Technology Stack & Tools

- Solidity (Writing Smart Contract)
- Javascript (React & Testing)
- [Ethers](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [Hardhat](https://hardhat.org/) (Development Framework)
- [Ipfs](https://ipfs.io/) (Metadata storage)
- [React routers](https://v5.reactrouter.com/) (Navigational components)
- [web3.storage](https://web3.storage/) (IPFS)
- [Polygon](https://polygon.technology/) (Testing Framework)
- [XMTP](https://xmtp.com/)

## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/), should work with any node version below 16.5.0
- Install [Hardhat](https://hardhat.org/)
- Install [Material UI](https://mui.com/)
- Install [Metamask Extension in Web browser](https://metamask.io/)
- Install [web3.storage](https://web3.storage/)
- Install [Polygon](https://polygon.technology/)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
```
$ npm install
```
```
$ npm install @mui/material @emotion/react @emotion/styled
```
```
$ npm install @mui/material @mui/styled-engine-sc styled-components
```
### 3. Boot up local development blockchain
```
$ npx hardhat node
```
### 4. Connect development blockchain accounts to Metamask
- Copy private key of the addresses and import to Metamask
- Connect your metamask to hardhat blockchain, network 127.0.0.1:8545.
- If you have not added hardhat to the list of networks on your metamask, open up a browser, click the fox icon, then click the top center dropdown button that lists all the available networks then click add networks. A form should pop up. For the "Network Name" field enter "Hardhat". For the "New RPC URL" field enter "http://127.0.0.1:8545". For the chain ID enter "31337". Then click save.  

### 5. Connect to web3.storage
```
$ npm i web3.storage
$ API_TOKEN=YOUR_TOKEN node ./store.mjs
```

### 6. Migrate Smart Contracts
```
$ npx hardhat run src/backend/scripts/deploy.js --network localhost
```

### 7. Launch Application
```
$ npm run start
```
