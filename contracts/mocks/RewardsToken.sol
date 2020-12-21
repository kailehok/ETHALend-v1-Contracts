pragma solidity ^0.5.10;

import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RewardsToken is ERC20Detailed, ERC20 {
    constructor() public ERC20Detailed("ETHA", "ETHA", 18) {
        _mint(msg.sender, 500e6 * 1 ether);
    }
}
