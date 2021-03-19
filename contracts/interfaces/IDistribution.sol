pragma solidity ^0.7.0;

interface IDistribution {
    function stake(uint256 redeemTokens) external;

    function withdraw(uint256 redeemAmount) external;

    function getReward() external;

    function balanceOf(address account) external view returns (uint256);
}
