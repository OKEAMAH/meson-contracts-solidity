// SPDX-License-Identifier: MIT
pragma solidity 0.8.6;

import "./Swap/MesonSwap.sol";
import "./Pools/MesonPools.sol";

/// @title MesonManager
/// @notice The class to store data related to management permissions of Meson
contract MesonManager is MesonSwap, MesonPools {
  /// @notice The admin of meson contract
  /// The owner has the permission to upgrade meson contract. In future versions,
  /// the management authority of meson contract will be decentralized.
  address internal _owner;

  /// @notice The manager to authorized fee waived swaps
  /// Only the premium manager can authorize the execution to release for fee waived swaps.
  /// This address is managed by Meson team.
  address internal _premiumManager;

  /// @dev This empty reserved space is put in place to allow future versions to
  /// add new variables without shifting down storage in the inheritance chain.
  /// See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps
  uint256[50] private __gap;

  /// @notice The owner will also have the permission to add supported tokens
  function addSupportToken(address token, uint8 index) external onlyOwner {
    _addSupportToken(token, index);
  }

  /// @notice Add multiple tokens
  function addMultipleSupportedTokens(address[] memory tokens, uint8[] memory indexes) external onlyOwner {
    require(tokens.length == indexes.length, "Tokens and indexes should have the same length");
    for (uint8 i = 0; i < tokens.length; i++) {
      _addSupportToken(tokens[i], indexes[i]);
    }
  }

  modifier onlyOwner() {
    require(_owner == _msgSender(), "Caller is not the owner");
    _;
  }

  function _onlyPremiumManager() internal view override {
    require(_premiumManager == _msgSender(), "Caller is not the premium manager");
  }
}
