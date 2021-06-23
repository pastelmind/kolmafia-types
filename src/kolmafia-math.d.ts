/**
 * @file KoLmafia functions for mathematics.
 * Most of them are marked as deprecated since they can be replaced by
 * JavaScript built-ins.
 */

/**
 * Rounds up a number to the nearest integer.
 * @deprecated Use `Math.ceil()` instead.
 */
export function ceil(value: number): number;

/**
 * Rounds down a number to the nearest integer.
 * @deprecated Use `Math.floor()` instead.
 */
export function floor(arg: number): number;

/**
 * Returns the natural logarithm (i.e. base e) of a number.
 * @deprecated Use `Math.log()` instead.
 */
export function logN(arg: number): number;

/**
 * Returns the logarithm of `arg` with the specified `base`.
 *
 * This is similar (but not guaranteed to be identical) to
 * `Math.log(arg) / Math.log(base)`.
 */
export function logN(arg: number, base: number): number;

/**
 * Returns the largest number among the given arguments.
 * @deprecated Use `Math.max()` instead.
 */
export function max(arg1: number, ...args: number[]): number;

/**
 * Returns the smallest number among the given arguments.
 * @deprecated Use `Math.min()` instead.
 */
export function min(arg1: number, ...args: number[]): number;

/**
 * Returns a random integer between 0 and `stop` - 1, inclusive.
 *
 * If `stop` is less than 2, the script is aborted immediately.
 * This cannot be caught as an exception.
 * @param stop Upper limit of the range of random numbers.
 *    Must be greater than or equal to 2.
 */
export function random(stop: number): number;

/**
 * Rounds the number to the nearest integer.
 * @deprecated Use `Math.round()` instead.
 */
export function round(number: number): number;

/**
 * Returns the square root of a number.
 *
 * If a negative number is given, the script is aborted immediately.
 * This cannot be caught as an exception.
 * @deprecated Use `Math.sqrt()` instead.
 */
export function squareRoot(val: number): number;

/**
 * Returns the integer portion of a floating-point number.
 * @deprecated Use `Math.trunc()` instead.
 */
export function truncate(arg: number): number;
