import dotenv from "dotenv";
import "@nomicfoundation/hardhat-toolbox";

dotenv.config({ path: ".env" });

const config = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_API_KEY_URL,
      accounts: [process.env.RINKEBY_PRIVATE_KEY],
    },
  },
};

export default config;
