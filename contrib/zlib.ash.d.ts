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

/**
 * Returns the best familiar you own for a given type.
 *
 * If your `is_100_run` ZLib variable is anything other than `none`, this
 * returns that familiar instead, so that you do not accidentally break a 100%
 * familiar run.
 * @param type Familiar type known to ZLib
 * @return Best familiar you own for the given type
 */
export function bestFam(
  type:
    | 'combat'
    | 'delevel'
    | 'dodge'
    | 'elemental damage'
    | 'items'
    | 'meat'
    | 'produce'
    | 'restore hp'
    | 'stat'
    | 'water'
): Familiar;

// Due to compatibility issues between ASH and JavaScript, only the 3-parameter
// form of kmail() can be called from JavaScript.
/**
 * Sends a kmail (or gift message) to another player.
 * @param recipent Target player ID or username
 * @param message Kmail or gift message
 * @param meat Amount of meat to send
 */
export function kmail(recipent: string, message: string, meat: number): boolean;

/**
 * Attempts to obtain `qty` of `condition`, either by purchasing, pulling, or
 * adventuring at the specified `location`.
 * @param qty Item quantity, or number of choice adventure number
 * @param condition Condition to use as goal for auto-adventuring.
 *    Any condition understood by KoLmafia is supported.
 * @param location Location to adventure in
 * @return Whether the condition was satisfied
 */
export function obtain(
  qty: number,
  condition: string,
  location: Location
): boolean;

/**
 * Attempts to obtain `qty` of `condition`, either by purchasing, pulling, or
 * adventuring at the specified `location`.
 * @param qty Item quantity, or number of choice adventure number
 * @param condition Condition to use as goal for auto-adventuring.
 *    Any condition understood by KoLmafia is supported.
 * @param location Location to adventure in
 * @param filter Combat filter string to use while adventuring
 * @return Whether the condition was satisfied
 */
export function obtain(
  qty: number,
  condition: string,
  location: Location,
  filter: string
): boolean;

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

/**
 * Prints a message to the gCLI, obeying the user's current verbosity settings,
 * and choosing a color depending on the user's KoLmafia theme.
 *
 * If `level` is 0, aborts the script.
 * @param message
 * @param lightColor Text color for light themes (hex code or CSS color name)
 * @param darkColor Text color for dark themes (hex code or CSS color name)
 * @param level Verbosity level (integer between -10 and 10)
 * @return `true` if `level` > 0, `false` if `level` < 0
 */
export function vprint<VerbosityT extends number>(
  message: string,
  lightColor: string,
  darkColor: string,
  level: VerbosityT
): VerbosityT extends 0 ? never : boolean;
