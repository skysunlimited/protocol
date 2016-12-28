pragma solidity ^0.4.4;

import "./PreminedAsset.sol";

/// @title DollarToken Contract.
/// @author Melonport AG <team@melonport.com>
/// @notice Premined amount used to make markets
contract DollarToken is PreminedAsset {

    // FILEDS

    // Constant token specific fields
    string public constant name = "Dollar Token";
    string public constant symbol = "UST";
    uint public constant precision = 8;
    uint public constant preminedAmount = 10**10;

    // METHODS

    function DollarToken()
        PreminedAsset(name, symbol, precision, preminedAmount)
    {}
}
