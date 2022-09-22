require("@nomiclabs/hardhat-waffle");

const dotenv = require("dotenv");
dotenv.config({ path: __dirname + '/.env' });
const POLYGON_URL = "https://rpc-mumbai.maticvigil.com";
const { PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
  networks: {
    hardhat: {},
    polygon: {
      url: POLYGON_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 80001
    }
  }
};

// Deploying contracts with the account: 0xbDA5747bFD65F08deb54cb465eB87D40e51B197E
// Account balance: 183010853607730884
// NFT contract address:  0xd1d7183C8263aAd827b3F1a48f64cA4110dC0E77
// College Platform contract address:  0xA4efF4cF665634ca4984579CDa7f816289b4f5D2
