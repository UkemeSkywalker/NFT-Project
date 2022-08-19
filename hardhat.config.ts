require('dotenv').config();
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      forking: {
        url: process.env.RINKEBY_RPC_URL
      }
    },
    rinkeby: {
      url: process.env.ALCHEMY_RINKEBY,
      accounts: [process.env.GANDALF_PRIVATE_KEY]
    },
   

  }
};
