# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Add `valueOf()` on enumerated classes. (#10)
  - The following classes return integer IDs:
    Class, Effect, Familiar, Item, Monster, Servant, Skill, Slot, Thrall, Vykea
  - All other classes return 0, and `valueOf()` is marked as @deprecated
    (Bounty, Coinmaster, Element, Location, Phylum, Stat)

## [0.0.3] - 2020-01-21

### Added

- Support `isDarkMode()` (KoLmafia r20566) (#9)

## [0.0.2] - 2020-01-21

### Added

- Added (partial) type definitions for some popular ASH scripts (#8):
  - CanAdv r109
  - EatDrink 3.2
  - PriceAdvisor 1.62
  - ZLib r49

### Changed

- Add TypeScript version requirement (>= 3.0) (#1)

### Fixed

- Use `unknown` instead of `any` (#1)
- The `get()` static method of `Effect`, `Item`, `Familiar`, `Item`, `Monster`,
  `Servant`, `Skill`, and `Thrall` now accept numbers (integer IDs) in addition
  to strings (names). (#4)

## [0.0.1] - 2020-01-20

### Added

- Initial release

[unreleased]: https://github.com/pastelmind/kolmafia-types/compare/v0.0.3...HEAD
[0.0.3]: https://github.com/pastelmind/kolmafia-types/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/pastelmind/kolmafia-types/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/pastelmind/kolmafia-types/releases/tag/v0.0.1
