// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/Address.sol";

contract NFTBuyer {
    address private owner;
    IERC721 private nftContract;
    uint256 private nftId;
    uint256 private cost;

    constructor(
        address _nftContractAddress,
        uint256 _nftId,
        uint256 _cost
    ) {
        owner = msg.sender;
        nftContract = IERC721(_nftContractAddress);
        nftId = _nftId;
        cost = _cost;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function buyNFT() public payable onlyOwner {
        require(msg.value >= cost, "Not enough Ether provided");

        // Transfer the Ether to the NFT contract
        Address.sendValue(payable(address(nftContract)), cost);

        // Transfer the NFT to the buyer
        nftContract.transferFrom(address(this), msg.sender, nftId);
    }

    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        Address.sendValue(payable(owner), balance);
    }
}
