import { ethers } from "hardhat";

const deploy = async () => {
  const whitelistContract = await ethers.getContractFactory("Whitelist");
  const deployedWhitelistContract = await whitelistContract.deploy(20);

  await deployedWhitelistContract.deployed();

  console.log(
    "Whitelist contrsct deployed to:",
    deployedWhitelistContract.address
  );
};

deploy()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e.message);
    process.exit(1);
  });
