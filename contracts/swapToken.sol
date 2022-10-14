// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./IERC20.sol";
import "./Uniswap.sol";

contract swapToken {

    address private constant UniswapV2Router02 = 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;
    address private constant  WETH = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;

    function swap (address _tokenIn, address _tokenOut, uint _amountIn, uint _amountOutMin, address to, uint deadline) external {
        require(msg.sender != address(0), "IERC20: address zero can not call this function");
        IERC20(_tokenIn).transferFrom(msg.sender, address(this), _amountIn);
        IERC20(_tokenIn).approve(UniswapV2Router02, _amountIn);

        uint [] memory path;
        path = new uint[](3);
    }

}