require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const ALCHEMY_ID = process.env["ALCHEMY_ID"];
const ALCHEMY_ID_MAINNET = process.env["ALCHEMY_ID_MAINNET"];
const PRIVATE_KEY = process.env["PRIVATE_KEY"];

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    }, //local network
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_ID}`,
      accounts: [PRIVATE_KEY],
    },
    mainnet: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_ID_MAINNET}`,
      accounts: [PRIVATE_KEY],
    },
  },
  solidity: "0.8.4",
};
