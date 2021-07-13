/**
 * @file KoLmafia functions for manipulating strings.
 * Most of them are marked as deprecated since they can be replaced by
 * JavaScript built-ins.
 */

/**
 * Returns the character in a string at the given index.
 * @deprecated Use `String.prototype.charAt()` instead.
 * @param source
 * @param index
 * @return Character at the specified `index`
 */
export function charAt(source: string, index: number): string;

/**
 * Checks if the `source` string contains the `search` substring.
 * @deprecated Use `String.prototype.includes()` instead
 * @param source Source string to search in
 * @param search Target substring to search for
 * @return Whether `source` contains `search`
 */
export function containsText(source: string, search: string): boolean;

/**
 * Checks if the `source` string ends with the given `suffix`.
 * @deprecated Use `String.prototype.endsWith()` instead.
 * @param source Source string to search in
 * @param suffix Suffix to search for
 * @return Whether the end of `source` matches `prefix`
 */
export function endsWith(source: string, suffix: string): boolean;

// TODO: Deprecate this when Rhino implements `String.prototype.matchAll()`.
// See https://github.com/mozilla/rhino/issues/933
/**
 * Finds all matches of `regex` against the `source` string and return an object
 * containing every match result.
 * @param source Source string to search in
 * @param regex Java regular expression pattern
 *    (_This does **not** use JavaScript's regular expressions_)
 * @return Object whose keys are integers (0, 1, ...) and values are match
 *    results. Each match result is a object whose keys are integers and values
 *    are strings. The first item (index 0) in a match result is the whole
 *    substring in the current match; any subsequent items correspond to
 *    capturing groups within the `regex`.
 */
export function groupString(
  source: string,
  regex: string
): {[key: number]: {[group: number]: string}};

/**
 * Searches for the first occurrence of `substring` within the `source` string
 * and returns its position.
 * @deprecated Use `String.prototype.indexOf()` instead.
 * @param source Source string to search in
 * @param substring Substring to search for
 * @return Index of substring, or -1 if the substring is not found
 */
export function indexOf(source: string, substring: string): number;

/**
 * Searches for the first occurrence of `substring` within the `source` string,
 * starting at the index `start`, and returns its position.
 * @deprecated Use `String.prototype.indexOf()` instead.
 * @param source Source string to search in
 * @param substring Substring to search for
 * @param start Index to start searching at
 * @return Index of substring, or -1 if the substring is not found
 */
export function indexOf(
  source: string,
  substring: string,
  start: number
): number;

/**
 * Searches for the last occurrence of `substring` within the `source` string
 * and returns its position.
 * @deprecated Use `String.prototype.lastIndexOf()` instead.
 * @param source Source string to search in
 * @param substring Substring to search for
 * @return Index of substring, or -1 if the substring is not found
 */
export function lastIndexOf(source: string, substring: string): number;

/**
 * Searches for the last occurrence of `substring` within the `source` string,
 * up to the index `start`, and returns its position.
 * @deprecated Use `String.prototype.lastIndexOf()` instead.
 * @param source Source string to search in
 * @param substring Substring to search for
 * @param finish Index of last character to attempt a match
 * @return Index of substring, or -1 if the substring is not found
 */
export function lastIndexOf(
  source: string,
  substring: string,
  finish: number
): number;

/**
 * Returns the number of characters in a string.
 * @deprecated Use the `.length` property on string values instead.
 * @param string
 * @return Length of the given `string`
 */
export function length(string: string): number;

// TODO: Deprecate this when Rhino implements `String.prototype.replaceAll()`.
// See https://github.com/mozilla/rhino/issues/944
/**
 * Replace all occurrences of `find` in `source` with `replacement`.
 * @param source String to search in
 * @param find Substring to search for
 * @param replacement Replacement string
 * @return Modified string
 */
export function replaceString(
  source: string,
  find: string,
  replacement: string
): string;

/**
 * Splits the `string` at line breaks into multiple fragments.
 *
 * Note: This uses OS-specific line breaks. On Windows, it will split `\r\n` but
 * ignore `\n`.
 * @deprecated Use `String.prototype.split()` instead.
 * @param string String to split
 * @return Array of string fragments
 */
export function splitString(string: string): string[];

/**
 * Splits the `string` into multiple fragments, using `regex` as the deliminter.
 * @deprecated Use `String.prototype.split()` instead.
 * @param string String to split
 * @param regex Java regular expression pattern
 *    (_This does **not** use JavaScript's regular expressions_)
 * @return Array of string fragments
 */
export function splitString(string: string, regex: string): string[];

/**
 * Checks if the `source` string starts with the given `prefix`.
 * @deprecated Use `String.prototype.startsWith()` instead.
 * @param source Source string to search in
 * @param prefix Prefix to search for
 * @return Whether the beginning of `source` matches `prefix`
 */
export function startsWith(source: string, prefix: string): boolean;

/**
 * Extracts a substring of `source`, starting at index `start` up to the end of
 * `source`.
 * @deprecated Use `String.prototype.slice()` or `String.prototype.substring()`
 *    instead.
 * @param source Source string to slice
 * @param start Index at which to begin slicing. If this is less than 0 or
 *    greater than the length of `source`, this aborts the script.
 * @return Extracted substring
 */
export function substring(source: string, start: number): string;

/**
 * Extracts a substring of `source`, starting at index `start` up to (but not
 * including) `finish`.
 * @deprecated Use `String.prototype.slice()` or `String.prototype.substring()`
 *    instead.
 * @param source Source string to slice
 * @param start Index at which to begin slicing. If this is less than 0 or
 *    greater than the length of `source`, this aborts the script.
 * @param finish Index at which to end slicing. If this is less than 0, greater
 *    than the length of `source`, or less than `start`, this aborts the script.
 * @return Extracted substring
 */
export function substring(
  source: string,
  start: number,
  finish: number
): string;
