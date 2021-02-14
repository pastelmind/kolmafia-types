/**
 * @file KoLmafia functions that interact with modifiers.
 */

import './global';

/**
 * Accesses fields of your current modifiers for all of your current equipment
 * and effects. This uses the same mechanism that lets KoLmafia decide whether
 * you can adventure underwater, or how many songs you can keep in your head.
 * @param modifier Modifier name
 * @return Modifier value
 */
export function booleanModifier(modifier: string): boolean;

/**
 * Extracts a modifier from `source` and parses it as a boolean value.
 *
 * The modifier string can be any of the following:
 *
 * - Item name, e.g. `"pail"`
 * - Item ID (integer) surrounded by brackets, e.g. `"[123]"`
 * - String of the form `<type>:<name>`, where...
 *   - `<type>` is a modifier source type, e.g. `Item`, `Effect`, `Skill`
 *   - `<name>` is the name of the item/effect/skill/etc.
 * @param source Modifier source string
 * @param modifier Modifier name
 * @return Modifier value
 */
export function booleanModifier(source: string, modifier: string): boolean;

/**
 * Accesses a boolean modifier provided by the `item`.
 * @param item Item to check
 * @param modifier Modifier name
 * @return Modifier value
 */
export function booleanModifier(item: Item, modifier: string): boolean;

/**
 * Accesses a boolean modifier provided by the `effect`.
 * @param effect Effect to check
 * @param modifier Modifier name
 * @return Modifier value
 */
export function booleanModifier(effect: Effect, modifier: string): boolean;

/**
 * Extracts a modifier from `source` and parses it as a `Class` object.
 *
 * The modifier string can be any of the following:
 *
 * - Item name, e.g. `"pail"`
 * - Item ID (integer) surrounded by brackets, e.g. `"[123]"`
 * - String of the form `<type>:<name>`, where...
 *   - `<type>` is a modifier source type, e.g. `Item`, `Effect`, `Skill`
 *   - `<name>` is the name of the item/effect/skill/etc.
 * @param source Modifier source string
 * @param modifier Modifier name to parse, typically `"Class"`
 * @return Value of the modifier, parsed as a `Class`
 */
export function classModifier(source: string, modifier: string): Class;

/**
 * Extracts a modifier on an `item` and parses it as a `Class` object.
 * By passing `"Class"` as the modifier name, this function can be used to
 * retrieve the character class of a class-specific item.
 * @param item Item to check
 * @param modifier Modifier name to parse, typically `"Class"`
 * @return Value of the modifier, parsed as a `Class`
 */
export function classModifier(item: Item, modifier: string): Class;

/**
 * Extracts a modifier from `source` and parses it as an `Effect` object.
 *
 * The modifier string can be any of the following:
 *
 * - Item name, e.g. `"pail"`
 * - Item ID (integer) surrounded by brackets, e.g. `"[123]"`
 * - String of the form `<type>:<name>`, where...
 *   - `<type>` is a modifier source type, e.g. `Item`, `Effect`, `Skill`
 *   - `<name>` is the name of the item/effect/skill/etc.
 * @param source Modifier source string
 * @param modifier Modifier name to parse
 * @return Modifier value parsed as an `Effect`.
 *    If the value is not a valid Effect, returns the `none` Effect.
 */
export function effectModifier(source: string, modifier: string): Effect;

/**
 * Extracts a modifier on an `item` and parses it as an `Effect` object.
 * By passing `"Intrinsic Effect"` as the modifier name, this function can be
 * used to retrieve the intrinsic effect provided by an item. Note, however,
 * that all intrinsic effects on items have been removed as of March 1st, 2012.
 * @param item Item to check
 * @param modifier Modifier name to parse, typically `"Intrinsic Effect"`
 * @return Modifier value parsed as an `Effect`.
 *    If the value is not a valid Effect, returns the `none` Effect.
 */
export function effectModifier(item: Item, modifier: string): Effect;

export function numericModifier(modifier: string): number;
export function numericModifier(arg: string, modifier: string): number;
export function numericModifier(arg: Item, modifier: string): number;
export function numericModifier(arg: Effect, modifier: string): number;
export function numericModifier(arg: Skill, modifier: string): number;
export function numericModifier(
  familiar: Familiar,
  modifier: string,
  weight: number,
  item: Item
): number;

export function skillModifier(arg: string, modifier: string): Skill;
export function skillModifier(arg: Item, modifier: string): Skill;

export function statModifier(arg: Effect, modifier: string): Stat;

export function stringModifier(modifier: string): string;
export function stringModifier(arg: string, modifier: string): string;
