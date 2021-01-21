# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Add TypeScript version requirement (>= 3.0)

### Fixed

- Use `unknown` instead of `any`
- The `get()` static method of `Effect`, `Item`, `Familiar`, `Item`, `Monster`,
  `Servant`, `Skill`, and `Thrall` now accept numbers (integer IDs) in addition
  to strings (names).

## [0.0.1] - 2020-01-20

### Added

- Initial release

[unreleased]: https://github.com/pastelmind/kolmafia-types/compare/v0.0.1...HEAD
[0.0.1]: https://github.com/pastelmind/kolmafia-types/releases/tag/v0.0.1
