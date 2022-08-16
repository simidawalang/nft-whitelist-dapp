//SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.0;

contract Whitelist {
    uint8 public maxWhitelistedAddresses;
    uint8 public numAddressesWhitelisted;
    mapping(address => bool) public whitelistedAddress;

    constructor(uint8 _maxWhitelistedAddresses) {
        maxWhitelistedAddresses = _maxWhitelistedAddresses;
    }

    function addAddressToWhitelist() public {
        require(
            !whitelistedAddress[msg.sender],
            "This address has already been whitelisted."
        );
        require(
            numAddressesWhitelisted < maxWhitelistedAddresses,
            "Maximum number of whitelisted addresses reached."
        );

        whitelistedAddress[msg.sender] = true;
        numAddressesWhitelisted++;
    }
}
