# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Added `canEquip(fam: Familiar)` form (#15)

### Fixed

- Properly specify the license of [kolmafia-js], which this project derives
  from.(#16)
- Fixed a bug that caused TypeScript to select the wrong overloaded form of
  `pickPocket()` when a number is passed as the argument. (#17)

## [0.0.6] - 2021-02-20

### Added

- `myRobotEnergy()`, `myRobotScraps()` (#14)

### Fixed

- `dump()` and `toJson()` accept arguments of type `unknown` instead of `null`.
  This incorporates a change in [kolmafia-js] v1.0.4.

## [0.0.5] - 2021-02-09

### Added

- Detailed comments for library functions that start with A up to C.

### Changed

- `Item.buyer` and `Item.seller` now have `@version` comments describing the
  KoLmafia version where they no longer cause crashes.

### Removed

- Custom `valueOf()` methods are no longer available on enumerated types. (#13)

## [0.0.4] - 2021-01-29

### Added

- Add `valueOf()` on enumerated classes. (#10)

  - The following classes return integer IDs:
    Class, Effect, Familiar, Item, Monster, Servant, Skill, Slot, Thrall, Vykea
  - All other classes return 0, and `valueOf()` is marked as @deprecated
    (Bounty, Coinmaster, Element, Location, Phylum, Stat)

- ZLib: Add `rnum()`, `vprint()` (#12)

### Fixed

- Fix arguments of `min()` and `max()`. They are now properly variadic. (#11)

## [0.0.3] - 2021-01-21

### Added

- Support `isDarkMode()` (KoLmafia r20566) (#9)

## [0.0.2] - 2021-01-21

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

## [0.0.1] - 2021-01-20

### Added

- Initial release

[unreleased]: https://github.com/pastelmind/kolmafia-types/compare/v0.0.6...HEAD
[0.0.6]: https://github.com/pastelmind/kolmafia-types/compare/v0.0.5...v0.0.6
[0.0.5]: https://github.com/pastelmind/kolmafia-types/compare/v0.0.4...v0.0.5
[0.0.4]: https://github.com/pastelmind/kolmafia-types/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/pastelmind/kolmafia-types/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/pastelmind/kolmafia-types/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/pastelmind/kolmafia-types/releases/tag/v0.0.1
[kolmafia-js]: https://github.com/Loathing-Associates-Scripting-Society/kolmafia-js
