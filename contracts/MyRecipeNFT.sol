// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

// We first import some OpenZeppelin Contracts.
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

import { Base64 } from "./libraries/Base64.sol";

contract MyRecipeNFT is ERC721URIStorage{
  // Magic given from OpenZeppelin to help keep track of tokenIds.
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  string[] firstWords = [unicode"🥟", unicode"🧈", unicode"🍱", unicode"🥨", unicode"🥯", unicode"🧇", unicode"🍇", unicode"🍉", unicode"🍜", unicode"🍒", unicode"🥓", unicode"🥑", unicode"🌽", unicode"🥕", unicode"🍍", unicode"🍙"];
  string[] secondWords = [unicode"🍆", unicode"🍳", unicode"🫕", unicode"🥐", unicode"🥖", unicode"🍄", unicode"🥭", unicode"🥝", unicode"🌶️", unicode"🎂", unicode"🍔", unicode"🍕", unicode"🍣", unicode"🥠", unicode"🧁", unicode"🥮"];
  string[] thirdWords = [unicode"🌮", unicode"🍤", unicode"🍖", unicode"🫔", unicode"🥥", unicode"🥦", unicode"🍊", unicode"🌯", unicode"🍺", unicode"🍫", unicode"🍪", unicode"🍩", unicode"🍡", unicode"🍦", unicode"🦪", unicode"🥧"];

  event NewRecipeNFTMinted(address sender, uint256 tokenId);

  // We need to pass the name of our NFTs token and it's symbol.
  constructor() ERC721 ("recipeNFT", "SNAX") {
    console.log("This is my NFT contract!");
  }

  // Functions to randomly pick a word from each array.
  function pickRandomFirstSnack(uint256 tokenId) public view returns (string memory) {
    uint256 rand = random(string(abi.encodePacked("FIRST_SNACK", Strings.toString(tokenId))));
    // Squash the # between 0 and the length of the array to avoid going out of bounds.
    rand = rand % firstWords.length;
    return firstWords[rand];
  }

  function pickRandomSecondSnack(uint256 tokenId) public view returns (string memory) {
    uint256 rand = random(string(abi.encodePacked("SECOND_SNACK", Strings.toString(tokenId))));
    rand = rand % secondWords.length;
    return secondWords[rand];
  }

  function pickRandomThirdSnack(uint256 tokenId) public view returns (string memory) {
    uint256 rand = random(string(abi.encodePacked("THIRD_SNACK", Strings.toString(tokenId))));
    rand = rand % thirdWords.length;
    return thirdWords[rand];
  }

  function random(string memory input) internal pure returns (uint256) {
      return uint256(keccak256(abi.encodePacked(input)));
  }

  // A function our user will hit to get their NFT.
  function makeARecipeNFT(string memory image) public {
     // Get the current tokenId, this starts at 0.
    uint256 newItemId = _tokenIds.current();

    // Grab one word from each of the three arrays.
    string memory first = pickRandomFirstSnack(newItemId);
    string memory second = pickRandomSecondSnack(newItemId);
    string memory third = pickRandomThirdSnack(newItemId);

    string memory combinedWord = string(abi.encodePacked(first, second, third));

    string memory finalSvg = string(abi.encodePacked(image, first, " ", second, " ", third, "</tspan></text></svg>"));

    string memory json = Base64.encode( bytes(
      string(
        abi.encodePacked(
          '{"name": "',
          combinedWord,
          '", "description": "May your recipes live forever.", "image": "data:image/svg+xml;base64,',
          Base64.encode(bytes(finalSvg)),
          '"}'
        )
      )
    ));

    string memory finalTokenUri = string(
      abi.encodePacked("data:application/json;base64,", json)
    );

    console.log("\n--------------------");
    console.log(finalTokenUri);
    console.log("--------------------\n");

    _safeMint(msg.sender, newItemId);

    _setTokenURI(newItemId, finalTokenUri);

    // Increment the counter for when the next NFT is minted.
    _tokenIds.increment();

    console.log("An NFT w/ ID %s has been minted to %s", newItemId, msg.sender);

    emit NewRecipeNFTMinted(msg.sender, newItemId);
  }
}
