# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<!--
List of sections:
- Added: for new features.
- Changed: for changes in existing functionality.
- Deprecated: for soon-to-be removed features.
- Removed: for now removed features.
- Fixed: for any bug fixes.
- Security: in case of vulnerabilities.
-->

## [Unreleased]

## [0.3.0] - 2021-08-30

### Added

- Wildfire path support: added `myWildfireWater()` and `Location.fireLevel`.
  ([#49])
- `stringModifier(Item, string)` form ([#46])

### Changed

- The return type of `itemDropsArray()` has been reified as the `ItemDropEntry`
  interface. Also added a `@version` tag to indicate that it was broken before
  r20827. ([#47])
- `eudora()` now supports Our Daily Candles&trade;. ([#48])

### Fixed

- `Location.get()` now accepts `snarfblat` values (integers) in addition to
  names (strings). ([#50])
- ZLib: `kmail()` uses the correct JSDoc comment as tooltip. ([#45])

[#45]: https://github.com/pastelmind/kolmafia-types/pull/45
[#46]: https://github.com/pastelmind/kolmafia-types/pull/46
[#47]: https://github.com/pastelmind/kolmafia-types/pull/47
[#48]: https://github.com/pastelmind/kolmafia-types/pull/48
[#49]: https://github.com/pastelmind/kolmafia-types/pull/49
[#50]: https://github.com/pastelmind/kolmafia-types/pull/50

## [0.2.0] - 2021-07-14

### Added

- `eudoraItem()` ([#37]), `inCasual()` ([#39])
- `clearBoozeHelper()`, `clearFoodHelper()` ([#43])
- `userPrompt()` ([#44])
- JSDoc comments for all string-manipulating functions ([#40])
- JSDoc comments for all Cargo Cultist Shorts functions ([#41])
- EatDrink: Added 20-parameter form of `eatdrink()` ([#38])

### Changed

- String-manipulating functions that have equivalent JavaScript builtins are
  marked as `@deprecated`. This includes `indexOf()`, `lastIndexOf()`,
  `length()`, `splitString()`, `startsWith()`, and `substring()`. ([#40])

### Removed

- `append()`, `insert()`, `replace()`, and `setLength()` are removed. Although
  KoLmafia provides these functions, they require an ASH buffer as argument.
  Since ASH buffers cannot be constructed in JavaScript, these functions are
  effectively unusable. ([#40])

### Fixed

- `eudora()` returns `"None"` instead of `"none"` ([#37])
- Variants of `pickPocket()` that accept an `Effect`, `Item`, or `Stat` now
  return a `boolean`. ([#41])
- `abort()` now has a return type of `never` instead of `void`. ([#42])

[#37]: https://github.com/pastelmind/kolmafia-types/pull/37
[#38]: https://github.com/pastelmind/kolmafia-types/pull/38
[#39]: https://github.com/pastelmind/kolmafia-types/pull/39
[#40]: https://github.com/pastelmind/kolmafia-types/pull/40
[#41]: https://github.com/pastelmind/kolmafia-types/pull/41
[#42]: https://github.com/pastelmind/kolmafia-types/pull/42
[#43]: https://github.com/pastelmind/kolmafia-types/pull/43
[#44]: https://github.com/pastelmind/kolmafia-types/pull/44

## [0.1.2] - 2021-06-23

### Added

- Add `guildAvailable()` ([#31])
- `adv1()`, `adventure()`, and `runCombat()` now support passing a combat filter
  function as the parameter. (r20738) ([#34])
- Add 1- and 2-parameter versions of `adv1()` (r20740) ([#35])
- ZLib: Add `bestFam()`, `obtain()` ([#36])

### Changed

- Mark `round()`, `squareRoot()`, `truncate()` as `@deprecated` ([#33])

[#31]: https://github.com/pastelmind/kolmafia-types/pull/31
[#33]: https://github.com/pastelmind/kolmafia-types/pull/33
[#34]: https://github.com/pastelmind/kolmafia-types/pull/34
[#35]: https://github.com/pastelmind/kolmafia-types/pull/35
[#36]: https://github.com/pastelmind/kolmafia-types/pull/36

## [0.1.1] - 2021-05-03

### Added

- Type definitions for CommonJS `require()` and `module`. ([#24])
- Detailed comments for library functions that start with F. ([#29])
- Add `getWorkshed()` (r20678) and `mySessionResults()` (r20680) ([#25])
- ZLib: Add dark mode-aware version of `vprint()` ([#26])

### Changed

- Built-in classes can no longer be instantiated directly; their constructors
  have been marked as private. ([#23])

[#23]: https://github.com/pastelmind/kolmafia-types/pull/23
[#24]: https://github.com/pastelmind/kolmafia-types/pull/24
[#25]: https://github.com/pastelmind/kolmafia-types/pull/25
[#26]: https://github.com/pastelmind/kolmafia-types/pull/26
[#29]: https://github.com/pastelmind/kolmafia-types/pull/29

## [0.1.0] - 2021-04-05

### Added

- Added `canEquip(fam: Familiar)` form ([#15])
- Detailed comments for library functions that start with D up to E. ([#19])

### Changed

- Now requires TypeScript 4.1+ ([#20])

### Fixed

- Properly specify the license of [kolmafia-js], which this project derives
  from. ([#16])
- Fixed a bug that caused TypeScript to select the wrong overloaded form of
  `pickPocket()` when a number is passed as the argument. ([#17])

[#15]: https://github.com/pastelmind/kolmafia-types/pull/15
[#16]: https://github.com/pastelmind/kolmafia-types/pull/16
[#17]: https://github.com/pastelmind/kolmafia-types/pull/17
[#19]: https://github.com/pastelmind/kolmafia-types/pull/19
[#20]: https://github.com/pastelmind/kolmafia-types/pull/20

## [0.0.6] - 2021-02-20

### Added

- `myRobotEnergy()`, `myRobotScraps()` ([#14])

### Fixed

- `dump()` and `toJson()` accept arguments of type `unknown` instead of `null`.
  This incorporates a change in [kolmafia-js] v1.0.4.

[#14]: https://github.com/pastelmind/kolmafia-types/pull/14

## [0.0.5] - 2021-02-09

### Added

- Detailed comments for library functions that start with A up to C.

### Changed

- `Item.buyer` and `Item.seller` now have `@version` comments describing the
  KoLmafia version where they no longer cause crashes.

### Removed

- Custom `valueOf()` methods are no longer available on enumerated types ([#13])

[#13]: https://github.com/pastelmind/kolmafia-types/pull/13

## [0.0.4] - 2021-01-29

### Added

- Add `valueOf()` on enumerated classes. ([#10])

  - The following classes return integer IDs:
    Class, Effect, Familiar, Item, Monster, Servant, Skill, Slot, Thrall, Vykea
  - All other classes return 0, and `valueOf()` is marked as @deprecated
    (Bounty, Coinmaster, Element, Location, Phylum, Stat)

- ZLib: Add `rnum()`, `vprint()` ([#12])

### Fixed

- Fix arguments of `min()` and `max()`. They are now properly variadic. ([#11])

[#10]: https://github.com/pastelmind/kolmafia-types/pull/10
[#11]: https://github.com/pastelmind/kolmafia-types/pull/11
[#12]: https://github.com/pastelmind/kolmafia-types/pull/12

## [0.0.3] - 2021-01-21

### Added

- Support `isDarkMode()` (KoLmafia r20566) ([#9])

[#9]: https://github.com/pastelmind/kolmafia-types/pull/9

## [0.0.2] - 2021-01-21

### Added

- Added (partial) type definitions for some popular ASH scripts ([#8]):
  - CanAdv r109
  - EatDrink 3.2
  - PriceAdvisor 1.62
  - ZLib r49

### Changed

- Add TypeScript version requirement (>= 3.0) ([#1])

### Fixed

- Use `unknown` instead of `any` ([#1])
- The `get()` static method of `Effect`, `Item`, `Familiar`, `Item`, `Monster`,
  `Servant`, `Skill`, and `Thrall` now accept numbers (integer IDs) in addition
  to strings (names). ([#4])

[#1]: https://github.com/pastelmind/kolmafia-types/pull/1
[#4]: https://github.com/pastelmind/kolmafia-types/pull/4
[#8]: https://github.com/pastelmind/kolmafia-types/pull/8

## [0.0.1] - 2021-01-20

### Added

- Initial release

[unreleased]: https://github.com/pastelmind/kolmafia-types/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/pastelmind/kolmafia-types/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/pastelmind/kolmafia-types/compare/v0.1.2...v0.2.0
[0.1.2]: https://github.com/pastelmind/kolmafia-types/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/pastelmind/kolmafia-types/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/pastelmind/kolmafia-types/compare/v0.0.6...v0.1.0
[0.0.6]: https://github.com/pastelmind/kolmafia-types/compare/v0.0.5...v0.0.6
[0.0.5]: https://github.com/pastelmind/kolmafia-types/compare/v0.0.4...v0.0.5
[0.0.4]: https://github.com/pastelmind/kolmafia-types/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/pastelmind/kolmafia-types/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/pastelmind/kolmafia-types/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/pastelmind/kolmafia-types/releases/tag/v0.0.1
[kolmafia-js]: https://github.com/Loathing-Associates-Scripting-Society/kolmafia-js
