import { ethers } from "hardhat";
import { expect } from "chai";

describe("Whitelist contract", () => {
  it("Maximum number of whitelisted addresses should be 20.", async () => {
    const whitelistContract = await ethers.getContractFactory("Whitelist");
    const whitelist = await whitelistContract.deploy(20);
    expect(await whitelist.maxWhitelistedAddresses()).to.equal(20);
  });

  it("Number of whitelisted addresses should be 1 when 1 address is added to whitelist.", async () => {
    const whitelistContract = await ethers.getContractFactory("Whitelist");
    const whitelist = await whitelistContract.deploy(20);
    await whitelist.deployed();

    await whitelist.addAddressToWhitelist();
    await expect(await whitelist.numAddresseWhitelisted()).to.equal(1);
  });
});
