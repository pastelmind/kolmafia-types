/**
 * @file Type definition for Zlib, made by zarqon.
 *
 * - ASH script name: Zlib
 * - ASH script version: r49
 * - ASH script authors: zarqon
 *
 * Links:
 *  - ASH script forum thread: https://kolmafia.us/threads/zlib-zarqons-useful-function-library.2072/
 *  - Wiki page: https://wiki.kolmafia.us/index.php?title=Zlib
 */

export function kmail(to: string, message: string, meat: number): boolean;

export function setvar(
  varname: string,
  defaultValue: string,
  type:
    | 'string'
    | 'boolean'
    | 'bounty'
    | 'class'
    | 'coinmaster'
    | 'effect'
    | 'element'
    | 'familiar'
    | 'float'
    | 'int'
    | 'item'
    | 'location'
    | 'monster'
    | 'phylum'
    | 'servant'
    | 'skill'
    | 'stat'
    | 'thrall'
    | 'vykea'
): void;

export function setvar(
  varname: string,
  defaultValue:
    | string
    | boolean
    | Bounty
    | Class
    | Coinmaster
    | Effect
    | Element
    | Familiar
    | number
    | Item
    | Location
    | Monster
    | Phylum
    | Servant
    | Skill
    | Stat
    | Thrall
    | Vykea
): void;

export function getvar(varname: string): string;

/**
 * Converts a number to a human-readable string, based on the user's locale.
 * This adds grouping separators (,). If `value` is a floating-point number,
 * also rounds to 2 digits after the decimal.
 * @param value Integer or floating-point number
 */
export function rnum(value: number): string;

/**
 * Converts a number to a human-readable string, based on the user's locale.
 * This adds grouping separators (,). If `value` is a floating-point number,
 * also rounds to the nearest `place` digits after the decimal.
 * @param value Integer or floating-point number
 * @param place Must be integer
 */
export function rnum(value: number, place: number): string;

/**
 * Prints a message to the gCLI, obeying the user's current verbosity settings.
 * Prints red text if `level` < 0, and black text if `level` > 0.
 *
 * If `level` is 0, aborts the script.
 * @param message
 * @param level Verbosity level (integer between -10 and 10)
 * @return `true` if `level` > 0, `false` if `level` < 0
 */
export function vprint<VerbosityT extends number>(
  message: string,
  level: VerbosityT
): VerbosityT extends 0 ? never : boolean;

/**
 * Prints a message to the gCLI, obeying the user's current verbosity settings.
 *
 * If `level` is 0, aborts the script.
 * @param message
 * @param color Text color (hex code or CSS color name)
 * @param level Verbosity level (integer between -10 and 10)
 * @return `true` if `level` > 0, `false` if `level` < 0
 */
export function vprint<VerbosityT extends number>(
  message: string,
  color: string,
  level: VerbosityT
): VerbosityT extends 0 ? never : boolean;
