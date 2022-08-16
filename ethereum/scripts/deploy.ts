import { ethers } from "hardhat";

const deploy = async () => {
  const whitelistContract = await ethers.getContractFactory("Whitelist");
  const deployedWhitelistContract = await whitelistContract.deploy(20);

  await deployedWhitelistContract.deployed();

  console.log(
    "Whitelist contrsct deployed to:",
    deployedWhitelistContract.address
  );

  // 0xD885FA1f0701C1cB141A5F5631583D028b4C051f
};

deploy()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e.message);
    process.exit(1);
  });
