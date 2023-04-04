import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import "dotenv/config";
import "hardhat-contract-sizer";

const config: HardhatUserConfig = {
  solidity: "0.8.16",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    },
    fuji: {
      url: process.env.FUJI_RPC_URL,
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};

export default config;
