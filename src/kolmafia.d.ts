/**
 * @file Type definitions for KoLmafia's standard (runtime) library.
 *
 * Note: This module contains uncategorized library functions.
 * See modules named `kolmafia-*.d.ts` for categorized functions.
 */

import './global';

// These type definitions are derived from kolmafia-js v1.0.4, written by Samuel
// Gaus (@gausie). kolmafia-js provides type definitions generated from
// KoLmafia's source code. kolmafia-js is released under the MIT license:

/*
Copyright (c) 2020 Samuel Gaus

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 */

/**
 * Immediately halts the current script and all queued functions.
 */
export function abort(): void;

/**
 * Immediately halts the current script and all queued functions.
 * @param message Message to print
 */
export function abort(message: string): void;

/**
 * Adds `qty` of `item` to your current adventuring conditions. Auto-adventuring
 * through KoLmafia or the `adventure()` function will stop if your current
 * conditions are met.
 *
 * Note that this function adds items in "+ mode" rather than the standard
 * "total mode" done via the Adventuring pane of KoLmafia; i.e. it will add a
 * condition to get `qty` additional items, rather than a condition to have
 * `qty` total items in inventory.
 * @param qty Desired quantity
 * @param item Desired item
 */
export function addItemCondition(qty: number, item: Item): void;

/**
 * Adds `qty` of `item` to your current adventuring conditions. Auto-adventuring
 * through KoLmafia or the `adventure()` function will stop if your current
 * conditions are met.
 *
 * Note that this function adds items in "+ mode" rather than the standard
 * "total mode" done via the Adventuring pane of KoLmafia; i.e. it will add a
 * condition to get `qty` additional items, rather than a condition to have
 * `qty` total items in inventory.
 * @param item Desired item
 * @param qty Desired quantity
 */
export function addItemCondition(item: Item, qty: number): void;

/**
 * Adventure exactly once in the specified `place` (even if it takes no turns),
 * although it will follow chained choice adventures for as long as you have
 * preset options.
 * @param place Adventuring location
 * @param turnsUsed Overrides the normal number of adventures that are expected
 *    to be consumed at this location, or -1 can be passed to use the default.
 *    Specifically, 0 will prevent any counters from triggering - of course, if
 *    an adventure actually is consumed, any counters that you kept from
 *    triggering will be lost.
 * @param filter A macro (if it contains a semicolon) or the name of a combat
 *    filter function defined elsewhere in your script, with the same behavior
 *    as in the 3-parameter version of `adventure()`. An empty string can be
 *    passed to use your battle action or CCS as normal.
 *    (*NOTE: It is unclear how this parameter works in JavaScript.*)
 * @return `true` if all adventures were used, or `false` otherwise (e.g. not
 *    enough adventures, location unavailable). Also returns `false` if you
 *    successfully adventured in a zone, but KoLmafia was put into a "PENDING"
 *    state, which indicates that we might be done adventuring in this location
 *    (usually because we finished the quest-related action in that zone).
 */
export function adv1(
  place: Location,
  turnsUsed: number,
  filter: string
): boolean;

/**
 * Returns the adventure cost for the next cast of the given skill.
 * @param skill Skill to check the cost of
 * @return Adventure cost of the skill
 */
export function advCost(skill: Skill): number;

/**
 * Spends `adventures` at the `place`, keeping up your current mood & obeying
 * restore settings. This uses your current CSS / battle action script.
 * @param place Adventuring location
 * @param adventures Number of adventures to spend. Any "free" turns (e.g choice
 *    adventures that don't consume an adventure) or adventures spent in other
 *    locations (e.g. by a `counterScript` or a `betweenBattleScript`) do not
 *    count towards this total.
 * @return `true` if the specified number of adventures were used, or `false`
 *    otherwise (e.g. not enough adventures, location unavailable, all goals
 *    satisfied while adventuring, or auto-stop triggered).
 */
export function adventure(place: Location, adventures: number): boolean;

/**
 * Spends `adventures` at the `place`, keeping up your current mood & obeying
 * restore settings. This uses your current CSS / battle action script.
 * @param adventures Number of adventures to spend. Any "free" turns (e.g choice
 *    adventures that don't consume an adventure) or adventures spent in other
 *    locations (e.g. by a `counterScript` or a `betweenBattleScript`) do not
 *    count towards this total.
 * @param place Adventuring location
 * @return `true` if the specified number of adventures were used, or `false`
 *    otherwise (e.g. not enough adventures, location unavailable, all goals
 *    satisfied while adventuring, or auto-stop triggered).
 */
export function adventure(adventures: number, place: Location): boolean;

/**
 * Spends `adventures` at the `place`, keeping up your current mood & obeying
 * restore settings.
 * @param place Adventuring location
 * @param adventures Number of adventures to spend. Any "free" turns (e.g choice
 *    adventures that don't consume an adventure) or adventures spent in other
 *    locations (e.g. by a `counterScript` or a `betweenBattleScript`) do not
 *    count towards this total.
 * @param filter Combat action filter. If this contains a semicolon, it is
 *    interpreted as a macro; otherwise, this is the name of a top-level
 *    function which modifies the current CCS. A combat filter function takes
 *    the parameters of a consult script, but returns lines like a CCS, not like
 *    a consult script. Essentially, this allows the scripter to put a CCS or
 *    macro into a script.
 *    (*NOTE: It is unclear how this parameter works in JavaScript.*)
 * @return `true` if the specified number of adventures were used, or `false`
 *    otherwise (e.g. not enough adventures, location unavailable, all goals
 *    satisfied while adventuring, or auto-stop triggered).
 */
export function adventure(
  place: Location,
  adventures: number,
  filter: string
): boolean;

/**
 * Spends `adventures` at the `place`, keeping up your current mood & obeying
 * restore settings.
 * @param adventures Number of adventures to spend. Any "free" turns (e.g choice
 *    adventures that don't consume an adventure) or adventures spent in other
 *    locations (e.g. by a `counterScript` or a `betweenBattleScript`) do not
 *    count towards this total.
 * @param place Adventuring location
 * @param filter Combat action filter. If this contains a semicolon, it is
 *    interpreted as a macro; otherwise, this is the name of a top-level
 *    function which modifies the current CCS. A combat filter function takes
 *    the parameters of a consult script, but returns lines like a CCS, not like
 *    a consult script. Essentially, this allows the scripter to put a CCS or
 *    macro into a script.
 *    (*NOTE: It is unclear how this parameter works in JavaScript.*)
 * @return `true` if the specified number of adventures were used, or `false`
 *    otherwise (e.g. not enough adventures, location unavailable, all goals
 *    satisfied while adventuring, or auto-stop triggered).
 */
export function adventure(
  adventures: number,
  place: Location,
  filter: string
): boolean;

/**
 * Retrieves the up-to-date internal list of known monsters.
 *
 * This function is needed because `$monsters[]` contains a list of monsters
 * that is fixed when an ASH script begins execution, and does not change while
 * the script is running.
 * (*NOTE: It is unclear whether this function is redundant in JavaScript.*)
 * @return Collection of all monsters that have a non-zero monster ID
 */
export function allMonstersWithId(): {[monster: string]: boolean};

/**
 * Returns a list of all available in-game outfits.
 */
export function allNormalOutfits(): string[];

/**
 * Returns a collection, keyed by monster, with the appearance rate percentages
 * as decimal values (i.e. a 30%-rate monster has a value of 30.0). This
 * accounts for combat rate modifiers, olfaction, etc. as best as it can.
 *
 * - Bosses, semirare encounters, and other one-time-only monsters have a value
 *   of 0.0. Ultra-Rare monsters have a value of -1.0.
 * - Impossible monsters (mostly just monsters that only appear on odd/even
 *   ascensions) have a value of -2.0. (Properly, as in not-also-olfacted)
 * - Banished monsters have a value of -3.0.
 * - Monsters banished by in-game mechanics (such as pygmy janitors in the
 *   Hidden City) have a value of -4.0 (is often mixed up with 0.0 values).
 *
 * If there is a chance of non-combat encounters, that will be listed as the
 * chance of encountering `none`.
 * @param place Adventuring location
 * @return Mapping of monster names to appearance rates as percentages
 */
export function appearanceRates(place: Location): {[monster: string]: number};

/**
 * Returns a collection, keyed by monster, with the appearance rate percentages
 * as decimal values (i.e. a 30%-rate monster has a value of 30.0). This
 * accounts for combat rate modifiers, olfaction, etc. as best as it can.
 *
 * - Bosses, semirare encounters, and other one-time-only monsters have a value
 *   of 0.0. Ultra-Rare monsters have a value of -1.0.
 * - Impossible monsters (mostly just monsters that only appear on odd/even
 *   ascensions) have a value of -2.0. (Properly, as in not-also-olfacted)
 * - Banished monsters have a value of -3.0.
 * - Monsters banished by in-game mechanics (such as pygmy janitors in the
 *   Hidden City) have a value of -4.0 (is often mixed up with 0.0 values).
 *
 * If there is a chance of non-combat encounters, that will be listed as the
 * chance of encountering `none`.
 * @param place Adventuring location
 * @param includeQueue If true, this considers monsters in the adventuring queue
 *    when determining the likelihood of future encounters. This is better for a
 *    real prediction of what monster will actually occur. For modeling
 *    theoretical situations, it is better to not consider the queue.
 * @return Mapping of monster names to appearance rates as percentages
 */
export function appearanceRates(
  place: Location,
  includeQueue: boolean
): {[monster: string]: number};

/**
 * **This function cannot be used in JavaScript due to limitations of KoLmafia's
 * type system.**
 *
 * Returns a buffer containing `original` with `add` tacked on to the end.
 * @deprecated
 * @param original Buffer to add to
 * @param add String to add on
 * @return Modified buffer
 */
export function append(original: string, add: string): string;

/**
 * Attacks with your weapon inside a consult script.
 * @return HTML response from the attack attempt
 */
export function attack(): string;

/**
 * Autosells up to `qty` of `item`.
 * @param item Item to sell
 * @param qty Quantity to sell
 * @return `true` if the item(s) were sold, or `false` on failure.
 *    Note that specifying a higher `qty` than you have of an item, or an item
 *    that cannot be autosold, will still return `true` as the function has done
 *    as much as it could.
 */
export function autosell(item: Item, qty: number): boolean;

/**
 * Autosells up to `qty` of `item`.
 * @param item Item to sell
 * @param qty Quantity to sell
 * @return `true` if the item(s) were sold, or `false` on failure.
 *    Note that specifying a higher `qty` than you have of an item, or an item
 *    that cannot be autosold, will still return `true` as the function has done
 *    as much as it could.
 */
export function autosell(qty: number, item: Item): boolean;

/**
 * Returns the autosell price of an item, or a value <= 0 if the item cannot be
 * autosold.
 *
 * For most items that cannot be autosold, such as common Quest Items, this will
 * return 0. In a few unusual cases where an item can't be autosold, but does
 * have a defined value detectable by other means (e.g. a mall minimum price
 * other than 100, or a price in one of the sign restaurants), this will return
 * a negative value. For example, the laser-broiled pear is an example of a
 * non-autosellable item with a value detectable both ways.
 * @param item Item to check the price of
 * @return Autosell price, or a value <= 0 if the item cannot be autosold.
 */
export function autosellPrice(item: Item): number;

/**
 * Returns the total number available of a given item in all inventory sections
 * accessible to your character based on current restrictions, including
 * equipped items (for equipment). In Ronin, this includes free pulls, but does
 * not include any other items in Hangk's Storage. Once out of Ronin/Hardcore,
 * if `autoSatisfyWithStorage` is set to true, this includes items in Hangk's
 * Storage. If `autoSatisfyWithCloset` is set to true, this includes the closet.
 * If `autoSatisfyWithStash` is set to true, this includes clan stash.
 * @param item Item to check
 * @return Available amount, based on current restrictions
 */
export function availableAmount(item: Item): number;

/**
 * Returns all available choice options in the current (or last) choice
 * adventure the player encountered.
 * @return Mapping of choice number to choice button text
 */
export function availableChoiceOptions(): {[key: number]: string};

/**
 * Returns all available choice options in the current (or last) choice
 * adventure the player encountered.
 * @param spoilers If `true`, also adds KoLmafia-generated spoiler text to each
 *    choice button text
 * @return Mapping of choice number to choice button text
 */
export function availableChoiceOptions(spoilers: boolean): {
  [key: number]: string;
};

/**
 * For the `decision` choice in the current (or last) choice adventure, returns
 * all selectable items in the dropdown(s) for the choice.
 * @param decision Choice number
 * @return Object that represents all `<select>` tags associated with the choice
 *    number. Each key is the `name` attribute of the `<select>` tag, and each
 *    value is an object that contains the `value` attribute and text of all
 *    `<option>` tags inside the `<select>` tag.
 */
export function availableChoiceSelectInputs(decision: number): {
  [selectName: string]: {[optionValue: string]: string};
};

/**
 * For the `decision` choice in the current (or last) choice adventure, returns
 * the names of all text inputs for the choice.
 * @param decision Choice number
 * @return Object whose keys are the `name` attributes of all
 *    `<input type="text">` tags associated with the choice. The values are
 *    always empty strings.
 */
export function availableChoiceTextInputs(decision: number): {
  [inputName: string]: '';
};

/**
 * Exits batch mode, executes all batch-aware operations that were called after
 * the last `batchOpen()`. This reduces the number of server hits.
 *
 * Batch-aware functions include: `autosell()`, `mallsell()`, and various
 * `putX()`/`takeX()` functions for the closet, storage, display, and stash.
 *
 * Notes:
 * - Batched functions are not processed in the order they were called.
 * - `putX()` and `takeX()` for the same source (e.g. closet) cannot be batched
 *   together inside a single batch operation.
 * - Each script has its own batch memory. Having an open batch does not affect
 *   another script's batch operation.
 *
 * If the script is aborted, all batched operations are canceled.
 * @return `true` if all batched operations succeed (i.e. return `true`), or
 *    `false` if any of them return `false`.
 */
export function batchClose(): boolean;

/**
 * Enters batch mode, allowing all batch-aware operations to be put into a batch
 * pool. Use `batchOpen()` to exit the batch mode and execute all batch
 * operations.
 */
export function batchOpen(): void;

/**
 * Bjornifies the `familiar` in a Buddy Bjorn.
 * @param familiar Familiar to enthrone
 * @return `true` on success, or `false` if something went wrong (e.g. the
 *    player does not own the `familiar`, or does not have a Buddy Bjorn)
 */
export function bjornifyFamiliar(familiar: Familiar): boolean;

/**
 * @return Whether the current player has unlocked the Black Market
 */
export function blackMarketAvailable(): boolean;

/**
 * Returns the buffed value of the stat used to calculate your hit chance.
 *
 * Note: Melee weapons use muscle to calculate hit change, and ranged weapons
 * use moxie.
 * @return Buffed value of the stat
 */
export function buffedHitStat(): number;

/**
 * Saves a string to a text file.
 * @version r20629
 * @param data String to save
 * @param filepath Path to the text file
 * @return `true` on success, `false` on failure
 */
export function bufferToFile(data: string, filepath: string): boolean;

/**
 * Attempts to buy one of `item`, using your meat in inventory.
 * @param item Item to purchase
 * @return `true` on success, `false` on failure
 */
export function buy(item: Item): boolean;

/**
 * Attempts to buy `qty` of `item`, using your meat in inventory.
 * @param item Item to purchase
 * @param qty Number to purchase. If this is less than 1, the function will
 *    succeed without buying anything.
 * @return `true` on success, `false` on failure
 */
export function buy(item: Item, qty: number): boolean;

/**
 * Attempts to buy `qty` of `item`, using your meat in inventory.
 * @param item Item to purchase
 * @param qty Number to purchase. If this is less than 1, the function will
 *    succeed without buying anything.
 * @param price Maximum price to spend per item. If this is less than 1, the
 *    function will always buy `qty` of `item`, regardless of prices.
 * @return Number of items purchased
 */
export function buy(item: Item, qty: number, price: number): number;

/**
 * Attempts to buy `qty` of `item`, using your meat in inventory.
 * @param qty Number to purchase. If this is less than 1, the function will
 *    succeed without buying anything.
 * @param item Item to purchase
 * @return `true` on success, `false` on failure
 */
export function buy(qty: number, item: Item): boolean;

/**
 * Attempts to buy `qty` of `item`, using your meat in inventory.
 * @param qty Number to purchase. If this is less than 1, the function will
 *    succeed without buying anything.
 * @param item Item to purchase
 * @param price Maximum price to spend per item. If this is less than 1, the
 *    function will always buy `qty` of `item`, regardless of prices.
 * @return Number of items purchased
 */
export function buy(qty: number, item: Item, price: number): number;

/**
 * Attempts to buy `qty` of `item` from a coinmaster, using the currency
 * accepted by the coinmaster.
 * @param coinmaster Coinmaster to buy from
 * @param qty Number to purchase. If this is less than 1, the function will
 *    succeed without buying anything.
 * @param item Item to purchase
 * @return `true` on success, `false` on failure
 */
export function buy(coinmaster: Coinmaster, qty: number, item: Item): boolean;

/**
 * Returns the number of currency (tokens) that the `coinmaster` will give you
 * if you sell `item` to them.
 * @param coinmaster Coinmaster to check
 * @param item Item to check
 * @return Number of currency (tokens)
 */
export function buyPrice(coinmaster: Coinmaster, item: Item): number;

/**
 * Attempts to buy one of `item`, using your meat in inventory.
 * @param item Item to purchase
 * @return `true` on success, `false` on failure
 */
export function buyUsingStorage(item: Item): boolean;

/**
 * Attempts to buy `qty` of `item`, using your meat in inventory.
 * @param item Item to purchase
 * @param qty Number to purchase. If this is less than 1, the function will
 *    succeed without buying anything.
 * @return `true` on success, `false` on failure
 */
export function buyUsingStorage(item: Item, qty: number): boolean;

/**
 * Attempts to buy `qty` of `item`, using your meat in inventory.
 * @param item Item to purchase
 * @param qty Number to purchase. If this is less than 1, the function will
 *    succeed without buying anything.
 * @param price Maximum price to spend per item. If this is less than 1, the
 *    function will always buy `qty` of `item`, regardless of prices.
 * @return Number of items purchased
 */
export function buyUsingStorage(item: Item, qty: number, price: number): number;

/**
 * Attempts to buy `qty` of `item`, using your meat in inventory.
 * @param qty Number to purchase. If this is less than 1, the function will
 *    succeed without buying anything.
 * @param item Item to purchase
 * @return `true` on success, `false` on failure
 */
export function buyUsingStorage(qty: number, item: Item): boolean;

/**
 * Attempts to buy `qty` of `item`, using your meat in inventory.
 * @param qty Number to purchase. If this is less than 1, the function will
 *    succeed without buying anything.
 * @param item Item to purchase
 * @param price Maximum price to spend per item. If this is less than 1, the
 *    function will always buy `qty` of `item`, regardless of prices.
 * @return Number of items purchased
 */
export function buyUsingStorage(qty: number, item: Item, price: number): number;

/**
 * Checks if the coinmaster buys the given item.
 * @param coinmaster Coinmaster to check
 * @param item Item to check
 * @return Whether the coinmaster buys the item
 */
export function buysItem(coinmaster: Coinmaster, item: Item): boolean;

/**
 * Checks if the player is not subject to dietary restrictions that forbid
 * drinking booze, e.g. Path of the Plumber, Teetotaler, or Oxygenarian.
 */
export function canDrink(): boolean;

/**
 * Checks if the player is not subject to dietary restrictions that forbid
 * eating food, e.g. Boozetafarian or Oxygenarian.
 */
export function canEat(): boolean;

/**
 * Checks if the player can equip the item, based on class, path, and stat
 * requirements.
 * This does not check if the player actually has the item in inventory.
 *
 * If `item` is a familiar equipment, this checks if the currently active
 * familiar can equip it.
 * This returns `false` for items that are not equipments.
 * @param item Item to check
 */
export function canEquip(item: Item): boolean;

/**
 * Checks if the player can equip the familiar, based on current (path)
 * restrictions.
 * This does not check if the player actually has the familiar.
 * @version r20652
 * @param familiar Familiar to check
 */
export function canEquip(familiar: Familiar): boolean;

/**
 * Checks if a familiar can equip the item.
 * This does not check if the player actually has the item in inventory.
 *
 * Returns `false` if either the familiar or item is `none`, or
 * @param familiar Familiar to check
 * @param item Item to check
 */
export function canEquip(familiar: Familiar, item: Item): boolean;

/**
 * Checks if the monster can be faxed by any of the faxbots known to KoLmafia.
 * This does not check if the faxbot(s) are online.
 * @param monster Monster to check
 */
export function canFaxbot(monster: Monster): boolean;

/**
 * Checks if the player is free of Ronin/Hardcore restrictions
 * @return `true` if player is neither in Ronin nor Hardcore
 */
export function canInteract(): boolean;

/**
 * Checks if the player can use Pickpocket during the current combat round
 * (i.e. has the Pickpocket button in the fight page).
 * This is intended for use inside custom combat scripts only.
 */
export function canStillSteal(): boolean;

/**
 * Checks if the player has access to Little Canadia.
 */
export function canadiaAvailable(): boolean;

/**
 * Retrieves an array of all candies matching the given `tier`.
 * Chocolates are allowed, and blacklisted candies are ignored.
 *
 * The returned array contains one of each matching item, even if the player has
 * multiples of said item.
 *
 * If the player is subject to Ronin/Hardcore restrictions, this only checks
 * candy in the inventory.
 * @param tier Integer between 0 and 3, inclusive
 * @return Array of all candies with the given `tier`
 */
export function candyForTier(tier: number): Item[];

/**
 * Retrieves an array of all candies matching the given `tier` and `flags`.
 *
 * Supported flags are:
 *
 * | Flag              | Value | Details                           |
 * |-------------------|-------|-----------------------------------|
 * | `CHECK_AVAILABLE` | 0x1 | Only include candies in inventory.  |
 * | `ALLOW_CHOCOLATE` | 0x2 | Do not exclude chocolates.          |
 * | `NO_BLACKLIST`    | 0x4 | Do not exclude blacklisted candies. |
 *
 * The returned array contains one of each matching item, even if the player has
 * multiples of said item.
 * @param tier Integer between 0 and 3, inclusive
 * @param flags Bit field containing flags
 * @return Array of all candies with the given `tier`
 */
export function candyForTier(tier: number, flags: number): Item[];

/**
 * Rounds up a number to the nearest integer.
 * @deprecated Use `Math.ceil()` instead.
 */
export function ceil(value: number): number;

/**
 * Sets your mind-control device (MCD) to the specified `level`.
 *
 * If the request fails, this throws a string (`"Script interrupted."`).
 * @param level Integer between 0 and 10 (11 if you have access to Little
 *    Canadia), inclusive.
 * @return Always returns `true`.
 * @throws {string} If the request fails (e.g. `level` is out of bounds)
 */
export function changeMcd(level: number): boolean;

/**
 * Returns the character in a string at the given index.
 * @deprecated Use `String.prototype.charAt()` instead.
 * @param source
 * @param index
 */
export function charAt(source: string, index: number): string;

/**
 * Posts a chat message to the "/clan" channel.
 * This does nothing if the player has not passed the Literacy test, or if
 * scripted chat has been disabled due to improper use.
 * @param message Chat message
 */
export function chatClan(message: string): void;

/**
 * Posts a chat message to a clan chat channel.
 * This does nothing if the player has not passed the Literacy test, or if
 * scripted chat has been disabled due to improper use.
 *
 * If `channel` is not one of "clan", "hobopolis", "slimetube", "dread", or
 * "hauntedhouse", KoLmafia will disable all scripted chat for the rest of the
 * session. This is a safety measure to prevent spamming.
 * @param message Chat message
 * @param channel Channel name (case sensitive)
 */
export function chatClan(message: string, channel: string): void;

/**
 * Submits a chat macro.
 * This does nothing if the player has not passed the Literacy test, or if
 * scripted chat has been disabled due to improper use.
 *
 * If the macro attempts to post in a chat channel other than one of "clan",
 * "hobopolis", "slimetube", "dread", or "hauntedhouse", KoLmafia will disable
 * all scripted chat for the rest of the session. This is a safety measure to
 * prevent spamming.
 * @param macro Chat macro
 */
export function chatMacro(macro: string): void;

/**
 * Posts a chat message visible only to the player.
 * This can be used to notify a player without using the gCLI.
 * @param message Message to print
 * @param color Message color
 */
export function chatNotify(message: string, color: string): void;

/**
 * Sends a private chat message to another player.
 * @param recipent Target player name
 * @param message Message to send
 */
export function chatPrivate(recipent: string, message: string): void;

/**
 * Attempts to consume a chewable (spleen) item.
 * @param item Item to chew
 * @return `true` if `item` is a chewable item, `false` otherwise.
 *    This returns `true` even if the player failed to consume the item.
 */
export function chew(item: Item): boolean;

/**
 * Attempts to consume a given number of chewable (spleen) item(s).
 * @param item Item to chew
 * @param qty Number of `item` to chew
 * @return `true` if `item` is a chewable item, `false` otherwise.
 *    This returns `true` even if the player failed to consume the item.
 */
export function chew(item: Item, qty: number): boolean;

/**
 * Attempts to consume a given number of chewable (spleen) item(s).
 * @param qty Number of `item` to chew
 * @param item Item to chew
 * @return `true` if `item` is a chewable item, `false` otherwise.
 *    This returns `true` even if the player failed to consume the item.
 */
export function chew(qty: number, item: Item): boolean;

/**
 * Checks if the player has just finished a fight which leads to a choice
 * adventure, which should be handled with `runChoice()`.
 */
export function choiceFollowsFight(): boolean;

/**
 * Empties the given aggregate (map).
 *
 * **NOTE: Because the internal library function actually "clears" a copy of the
 * aggregate, this has no effect on the JavaScript runtime.**
 * @deprecated This function has no practical use for JavaScript. Instead, use
 *    JS-native methods for emptying arrays, sets, and maps.
 * @param map Aggregate to empty
 */
export function clear(map: unknown): void;

/**
 * Executes a gCLI command.
 * @param command gCLI command
 * @return Whether the command was successfully executed
 */
export function cliExecute(command: string): boolean;

/**
 * Executes a gCLI command and captures its output as a string
 * @param command gCLI command
 * @return gCLI output from the command
 */
export function cliExecuteOutput(string: string): string;

/**
 * Returns the amount of `item` in your closet.
 * @param item Item to check
 */
export function closetAmount(item: Item): number;

/**
 * Returns the total of passive MP cost modifiers available in combat.
 */
export function combatManaCostModifier(): number;

/**
 * Returns the current Combat Rate modifier as a percentage.
 * For example, if your total Combat Rate modifier is -15%, this returns -15.0.
 */
export function combatRateModifier(): number;

/**
 * Checks if the `source` string contains the `search` substring.
 * @deprecated Use `String.prototype.includes()` instead
 * @param source Source string to search in
 * @param search Target substring to search for
 * @return Whether `source` contains `search`
 */
export function containsText(source: string, search: string): boolean;

/**
 * Visits the Council of Loathing.
 */
export function council(): void;

/**
 * Returns the number of elements in the aggregate (map).
 * @deprecated Use JavaScript native properties and methods instead, e.g.
 *    `Array.prototype.length` or `Object.keys(obj).length`.
 * @param map Aggregate
 */
export function count(map: unknown): number;

/**
 * Crafts items using a crafting type.
 * @param mode One of `"combine"`, `"cook"`, `"cocktailcraft"`, `"smith"`,
 *    `"jewelry"`
 * @param count Number of each ingredient to use
 * @param item1 Ingredient 1
 * @param item2 Ingredient 2
 * @return Number of each ingredient actually consumed.
 *    This is usually equal to `count`, but may be less if the crafting failed
 *    or was aborted, e.g. because your Chef-in-the-box exploded.
 */
export function craft(
  mode: string,
  count: number,
  item1: Item,
  item2: Item
): number;

/**
 * Crafting types returned by `craftType()`
 * @version r20630
 */
type CraftType =
  | 'chewing gum'
  | '[cannot be created]'
  | 'Cooking (fancy) (Pastamastery)'
  | 'single-use (Unavailable in Beecore)'
  | 'Meatpasting'
  | 'Meatsmithing'
  | 'Meatpasting (not untinkerable)'
  | 'rolling pin/unrolling pin'
  | 'Cooking'
  | 'single-use'
  | 'Mixing'
  | 'Meatsmithing (not Innabox) (Super-Advanced Meatsmithing)'
  | 'Meatsmithing (not Innabox) (Armorcraftiness)'
  | 'Cooking (fancy) (The Way of Sauce)'
  | 'Cooking (fancy) (Advanced Saucecrafting)'
  | 'multi-use (Unavailable in Beecore)'
  | 'Crackpot Mystic'
  | 'Cooking (fancy)'
  | 'star chart'
  | 'Mixing (fancy) (Advanced Cocktailcrafting)'
  | 'Jewelry-making pliers'
  | 'Mixing (fancy)'
  | "Mixing (St. Sneaky Pete's Day only)"
  | 'Supertinkering'
  | 'star chart (Torso Awaregness)'
  | 'Meatsmithing (females only)'
  | 'Meatsmithing (males only)'
  | 'Meatsmithing (not Innabox) (females only) (Armorcraftiness)'
  | 'Meatsmithing (not Innabox) (males only) (Armorcraftiness)'
  | "Uncle Crimbo's Mobile Home (Crimbo 2007)"
  | 'Malus of Forethought'
  | "Nash Crosby's Still"
  | 'Mixing (fancy) (Superhuman Cocktailcrafting)'
  | 'Cooking (fancy) (Transcendental Noodlecraft)'
  | 'multi-use'
  | "Uncle Crimbo's Mobile Home (Crimboween 2006)"
  | 'Rodoric, the Staffcrafter'
  | 'multi-use (Torso Awaregness)'
  | 'Jewelry-making pliers (Really Expensive Jewelrycrafting)'
  | 'Mixing (Advanced Cocktailcrafting)'
  | 'Meatsmithing (depleted Grimacite hammer)'
  | 'Cooking (fancy) (Deep Saucery)'
  | 'Cooking (fancy) (Tempuramancy)'
  | 'Mixing (fancy) (Salacious Cocktailcrafting)'
  | 'Cooking (Advanced Saucecrafting)'
  | 'multi-use (Torso Awaregness) (Unavailable in Beecore)'
  | 'single-use (tenderizing hammer) (Super-Advanced Meatsmithing)'
  | 'sugar sheet'
  | 'sugar sheet (Torso Awaregness)'
  | 'Grandma Sea Monkee'
  | 'Phineas'
  | 'Summon Clip Art'
  | "Uncle Crimbo's Futuristic Trailer (Crimboku 2012)"
  | "Jarlsberg's Kitchen (Boil)"
  | "Jarlsberg's Kitchen (Fry)"
  | "Jarlsberg's Kitchen (Blend)"
  | "Jarlsberg's Kitchen (Slice)"
  | "Jarlsberg's Kitchen (Chop)"
  | "Jarlsberg's Kitchen (Bake)"
  | "Jarlsberg's Kitchen (Grill)"
  | "Jarlsberg's Kitchen (Curdle)"
  | "Jarlsberg's Kitchen (Freeze)"
  | "Jarlsberg's Kitchen"
  | 'Shop Class'
  | 'Art Class'
  | 'Chemistry Class'
  | 'Worse Homes and Gardens'
  | 'Beer Garden'
  | 'Winter Garden'
  | "Rumpelstiltskin's Workshop"
  | 'Xiblaxian 5D printer'
  | 'shrine to the Barrel god'
  | 'Elemental International Airport Duty Free Shop'
  | 'Cooking (Patent Medicine)'
  | 'Source Terminal'
  | 'multi-use (Eldritch Intellect)'
  | 'Cooking (Eldritch Intellect)'
  | 'Mixing (Eldritch Intellect)'
  | 'Crimbo Lumps Shop (Crimbo 2016)'
  | 'globs of wax'
  | 'Spacegate Equipment Requisition'
  | 'spant pieces'
  | 'metal meteoroid'
  | 'XO Shop'
  | 'burning newspaper'
  | 'Fantasy Realm Welcome Center'
  | 'Mad Sliemce'
  | 'Kramco Sausage-o-Matic'
  | 'Mixing (Tiki Mixology)'
  | "Kringle's workshop";

/**
 * Returns a string indicating how the item can be crafted.
 */
export function craftType(item: Item): CraftType;

/**
 * Returns how many of `item` can be created using your current inventory,
 * skills, etc.
 * @param item Item to check
 * @return Amount of `item` that can be created
 */
export function creatableAmount(item: Item): number;

/**
 * Returns the number of Adventures required to create one of `item`.
 *
 * This does NOT consider any free crafting turns that are currently available.
 * @param item Item to check
 * @return Number of turns required to craft one of `item`
 */
export function creatableTurns(item: Item): number;

/**
 * Returns the number of Adventures required to create `count` of `item`.
 * This accounts for recipes that create multiples of `item`, e.g. Advanced
 * Saucecrafting potions created by a Sauceror.
 *
 * This does NOT consider any free crafting turns that are currently available.
 * @param item Item to check
 * @param count Number of `item` to craft
 * @return Number of turns required to craft `count` of `item`
 */
export function creatableTurns(item: Item, count: number): number;

/**
 * Returns the number of Adventures required to create `count` of `item`.
 * This accounts for recipes that create multiples of `item`, e.g. Advanced
 * Saucecrafting potions created by a Sauceror.
 * @param item Item to check
 * @param count Number of `item` to craft
 * @param useFreeCrafting If `true`, deducts any free crafting turns that are
 *    available from the returned total
 * @return Number of turns required to craft `count` of `item`
 */
export function creatableTurns(
  item: Item,
  count: number,
  useFreeCrafting: boolean
): number;

/**
 * Creates one of `item`, automatically acquiring any required ingredients.
 * @param item Item to create
 * @return Whether the item was successfully created
 */
export function create(item: Item): boolean;

/**
 * Creates `qty` of `item`, automatically acquiring any required ingredients.
 * @param item Item to create
 * @param qty Number of items to create
 * @return Whether the items were successfully created
 */
export function create(item: Item, qty: number): boolean;

/**
 * Creates `qty` of `item`, automatically acquiring any required ingredients.
 * @param qty Number of items to create
 * @param item Item to create
 * @return Whether the items were successfully created
 */
export function create(qty: number, item: Item): boolean;

/**
 * Returns the stat that is currently used to determine the player's hit chance.
 */
export function currentHitStat(): Stat;

/**
 * Returns the current MCD level (e.g. Detuned Radio).
 */
export function currentMcd(): number;

/**
 * Returns all available PvP stances as a mapping of stance name to numeric ID.
 */
export function currentPvpStances(): {[key: string]: number};

/**
 * Returns the current Rad Sickness level (in the Nuclear Autumn challenge
 * path).
 */
export function currentRadSickness(): number;

/**
 * Returns the current combat round number.
 */
export function currentRound(): number;

/**
 * Returns the elemental weakness of {@link https://kol.coldfront.net/thekolwiki/index.php/Dad_Sea_Monkee Dad Sea Monkee}
 * for a given combat round.
 * This works only for rounds 1 to 10.
 * @param round Round number
 * @return Element that Dad is weak to for the round
 */
export function dadSeaMonkeeWeakness(round: number): Element;

/**
 * Returns the item offered as a daily special at either {@link https://kol.coldfront.net/thekolwiki/index.php/Chez_Snoot%C3%A9e Chez Snootée}
 * or {@link https://kol.coldfront.net/thekolwiki/index.php/The_Gnomish_Micromicrobrewery The Gnomish Micromicrobrewery},
 * depending on your current moon sign.
 */
export function dailySpecial(): Item;

/**
 * Returns the percentage of damage absorbed by your current {@link https://kol.coldfront.net/thekolwiki/index.php/Damage_Absorption Damage Absoption}
 * amount.
 *
 * For example, if your total DA is 510, this function returns `61.414283752441406`.
 */
export function damageAbsorptionPercent(): number;

/**
 * Returns your current {@link https://kol.coldfront.net/thekolwiki/index.php/Damage_Reduction Damage Reduction}
 * amount.
 */
export function damageReduction(): number;

/**
 * Parses a time string and converts it to a Unix timestamp, using
 * {@link https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html#parse-java.lang.String-java.text.ParsePosition- `java.text.SimpleDateFormat.parse()`}.
 * @param pattern Date and time pattern string to use for parsing the text
 * @param text Text to parse
 * @return Unix timestamp in milliseconds
 */
export function dateToTimestamp(pattern: string, text: string): number;

/**
 * If debugging has been turned on (gCLI `debug on` command), prints the string
 * to the debug log _only_. Otherwise, does nothing.
 * @param text Message to print to debug log
 */
export function debugprint(text: string): void;

/**
 * Returns an Effect whose `descid` exactly matches the given string.
 * @param descid Descid of the effect
 * @return Effect whose `descid` matches the given string, or the `none` effect
 *    if no match is found
 */
export function descToEffect(descid: string): Effect;

/**
 * Returns an Item whose `descid` exactly matches the given string.
 * @param descid Descid of the item
 * @return Item whose `descid` matches the given string, or the `none` item if
 *    no match is found
 */
export function descToItem(value: string): Item;

/**
 * Disables gCLI commands and ASH functions. This can disable built-in library
 * functions as well as custom ASH functions, but not custom JavaScript
 * functions.
 *
 * Disabled functions will usually do nothing and return the "zero" value for
 * its return type (e.g. `false` for `boolean`, `0` for `int`).
 *
 * Note: To disable a built-in library function, you must use the ASH function's
 * name.
 *
 * @example
 * ```js
 *    disable("buffer_to_file"); // Disables the bufferToFile() function
 * ```
 * @param functionNames Names of gCLI commands and ASH functions (case
 *    insensitive), separated by spaces (` `) and/or commas (`,`).
 *    The special keyword `"all"` disables _all_ ASH functions except
 *    `disable()` and `enable()`.
 */
export function disable(functionNames: string): void;

/**
 * Checks if the current player can access the {@link https://kol.coldfront.net/thekolwiki/index.php/Dispensary Cobb's Knob Dispensary}.
 */
export function dispensaryAvailable(): boolean;

/**
 * * Returns the amount of `item` in your Display Case.
 */
export function displayAmount(item: Item): number;

/**
 * Attempts to drink a booze item.
 *
 * If drinking the item would result in overdrinking, KoLmafia will warn the
 * user and ask for confirmation. KoLmafia will also warn about missing effects
 * and items that affect drinking (e.g. Ode to Booze, tuxedo shirt). If the user
 * confirms a warning, KoLmafia will not warn the user again during the current
 * session.
 * @param item Item to drink
 * @return `true` if `item` is a drinkable item, `false` otherwise.
 *    This returns `true` even if the player failed to drink the item.
 */
export function drink(item: Item): boolean;

/**
 * Attempts to drink a given number of booze item(s).
 *
 * If drinking the item would result in overdrinking, KoLmafia will warn the
 * user and ask for confirmation. KoLmafia will also warn about missing effects
 * and items that affect drinking (e.g. Ode to Booze, tuxedo shirt). If the user
 * confirms a warning, KoLmafia will not warn the user again during the current
 * session.
 * @param item Item to drink
 * @param qty Number of `item` to drink
 * @return `true` if `item` is a drinkable item, `false` otherwise.
 *    This returns `true` even if the player failed to drink the item(s).
 */
export function drink(item: Item, qty: number): boolean;

/**
 * Attempts to drink a given number of booze item(s).
 *
 * If drinking the item would result in overdrinking, KoLmafia will warn the
 * user and ask for confirmation. KoLmafia will also warn about missing effects
 * and items that affect drinking (e.g. Ode to Booze, tuxedo shirt). If the user
 * confirms a warning, KoLmafia will not warn the user again during the current
 * session.
 * @param qty Number of `item` to drink
 * @param item Item to drink
 * @return `true` if `item` is a drinkable item, `false` otherwise.
 *    This returns `true` even if the player failed to drink the item(s).
 */
export function drink(qty: number, item: Item): boolean;

/**
 * Attempts to drink a booze item, suppressing all warnings.
 * @param item Item to drink
 * @return `true` if `item` is a drinkable item, `false` otherwise.
 *    This returns `true` even if the player failed to drink the item.
 */
export function drinksilent(item: Item): boolean;

/**
 * Attempts to drink a given number of booze item(s), suppressing all warnings.
 * @param item Item to drink
 * @param qty Number of `item` to drink
 * @return `true` if `item` is a drinkable item, `false` otherwise.
 *    This returns `true` even if the player failed to drink the item.
 */
export function drinksilent(item: Item, qty: number): boolean;

/**
 * Attempts to drink a given number of booze item(s), suppressing all warnings.
 * @param qty Number of `item` to drink
 * @param item Item to drink
 * @return `true` if `item` is a drinkable item, `false` otherwise.
 *    This returns `true` even if the player failed to drink the item.
 */
export function drinksilent(qty: number, item: Item): boolean;

/**
 * Prints the raw value of a variable.
 *
 * Note: This is not very useful for displaying the contents of a JavaScript
 * object or array. Due to how the JavaScript-to-ASH conversion works,
 * attempting to dump irregular data structures will usually cause an error.
 * @param obj Variable to print
 */
export function dump(obj: unknown): void;

/**
 * Prints the raw value of a variable.
 *
 * Note: This is not very useful for displaying the contents of a JavaScript
 * object or array. Due to how the JavaScript-to-ASH conversion works,
 * attempting to dump irregular data structures will usually cause an error.
 * @param obj Variable to print
 * @param color Message color
 */
export function dump(obj: unknown, color: string): void;

/**
 * Attempts to eat a food item.
 *
 * When eating the item, KoLmafia will warn about missing effects and items that
 * affect eating (e.g. Got Milk, Mayodiol). If the user confirms a warning,
 * KoLmafia will not warn the user again during the current session.
 * @param item Item to eat
 * @return `true` if `item` is an edible item, `false` otherwise.
 *    This returns `true` even if the player failed to eat the item(s).
 */
export function eat(item: Item): boolean;

/**
 * Attempts to eat a given number of food item(s).
 *
 * When eating the item(s), KoLmafia will warn about missing effects and items
 * that affect eating (e.g. Got Milk, Mayodiol). If the user confirms a warning,
 * KoLmafia will not warn the user again during the current session.
 * @param item Item to eat
 * @param qty Number of `item` to eat
 * @return `true` if `item` is an edible item, `false` otherwise.
 *    This returns `true` even if the player failed to eat the item(s).
 */
export function eat(item: Item, qty: number): boolean;

/**
 * Attempts to eat a given number of food item(s).
 *
 * When eating the item(s), KoLmafia will warn about missing effects and items
 * that affect eating (e.g. Got Milk, Mayodiol). If the user confirms a warning,
 * KoLmafia will not warn the user again during the current session.
 * @param qty Number of `item` to eat
 * @param item Item to eat
 * @return `true` if `item` is an edible item, `false` otherwise.
 *    This returns `true` even if the player failed to eat the item(s).
 */
export function eat(qty: number, item: Item): boolean;

/**
 * Attempts to eat a food item, suppressing all warnings.
 * @param item Item to eat
 * @return `true` if `item` is an ediable item, `false` otherwise.
 *    This returns `true` even if the player failed to eat the item.
 */
export function eatsilent(item: Item): boolean;

/**
 * Attempts to eat a given number of food item(s), suppressing all warnings.
 * @param item Item to eat
 * @param qty Number of `item` to eat
 * @return `true` if `item` is an ediable item, `false` otherwise.
 *    This returns `true` even if the player failed to eat the item.
 */
export function eatsilent(item: Item, qty: number): boolean;

/**
 * Attempts to eat a given number of food item(s), suppressing all warnings.
 * @param qty Number of `item` to eat
 * @param item Item to eat
 * @return `true` if `item` is an ediable item, `false` otherwise.
 *    This returns `true` even if the player failed to eat the item.
 */
export function eatsilent(qty: number, item: Item): boolean;

/**
 * Returns your Elemental Resistance for the given Element as a percentage of
 * damage absorbed.
 *
 * For example, if your Hot Resistance is Very High (resistance level 6),
 * calling this function with `Element.get('hot')` will return
 * `55.27777862548828`.
 * @param element Element to check
 */
export function elementalResistance(element: Element): number;

/**
 * Returns your Elemental Resistance for the Attack Element of the monster
 * (`attackElement` property of the `Monster` object) that you are currently
 * fighting.
 *
 * If the monster does not have an Attack Element, this returns 0.
 */
export function elementalResistance(): number;

/**
 * Returns your Elemental Resistance for the Attack Element of the given monster
 * (`attackElement` property of the `Monster` object).
 *
 * If the monster does not have an Attack Element, this returns 0.
 */
export function elementalResistance(monster: Monster): number;

/**
 * Takes all items out of your closet.
 * @return Whether all items in your closet were successfully retrieved
 */
export function emptyCloset(): boolean;

/**
 * Enables gCLI commands and ASH functions previously disabled with `disable()`.
 *
 * Note: To enable a built-in library function, you must use the ASH function's
 * name.
 *
 * @example
 * ```js
 *    enable("buffer_to_file"); // Enables the bufferToFile() function
 * ```
 * @param functionNames Names of gCLI commands and ASH functions (case
 *    insensitive), separated by spaces (` `) and/or commas (`,`).
 *    The special keyword `"all"` enables _all_ ASH functions.
 */
export function enable(functionNames: string): void;

/**
 * Checks if the `source` string ends with the given `suffix`.
 * @deprecated Use `String.prototype.endsWith()` instead
 * @param source Source string to search in
 * @param suffix Suffix to search for
 */
export function endsWith(source: string, suffix: string): boolean;

/**
 * Puts the given familiar in your {@link https://kol.coldfront.net/thekolwiki/index.php/Crown_of_Thrones Crown of Thrones}.
 * Also puts the CoT on yourself, if you don't already have it equipped.
 * @return Whether the familiar was successfully put into the Crown of Thrones.
 *    This returns `false` if you don't have the familiar, the Crown of Thrones,
 *    or failed to equip the CoT.
 */
export function enthroneFamiliar(familiar: Familiar): boolean;

/**
 * Decodes (i.e. unescapes) HTML entities in a string (e.g. `&amp;` to `&`).
 *
 * Note: This only supports some common entity names known to KoLmafia.
 * In particular, entity names that are deemed "safe" in HTML are unsupported
 * (e.g. `&lpar;` is _not_ converted to `(`).\
 * Decimal entity numbers are fully supported (e.g. `&#8364;`), but hexadecimals
 * are unsupported (e.g. `&#x20AC;`) and may result in garbage output.
 * @param text String to decode
 * @return Decoded string
 */
export function entityDecode(text: string): string;

/**
 * Encodes (i.e. escapes) special characters in a string to HTML entities
 * (e.g. `"` to `&quot;`).
 *
 * This escapes all non-ASCII characters, as well as characters that are deemed
 * "unsafe" in HTML (e.g. `&` and `"`).\
 * KoLmafia uses entity names for characters that it knows about, and uses
 * decimal entity numbers for other characters.
 * @param text String to encode
 * @return Encoded string
 */
export function entityEncode(arg: string): string;

/**
 * Attempts to equip an item.
 * @param item Item to equip
 * @return `false` if the item cannot be equipped, `true` otherwise
 */
export function equip(item: Item): boolean;

/**
 * Attempts to equip an item in the given slot.
 * @param item Item to equip
 * @param slot Slot to equip the item in
 * @return `false` if the item cannot be equipped in the given slot, `true`
 *    otherwise
 */
export function equip(item: Item, slot: Slot): boolean;

/**
 * Attempts to equip an item in the given slot.
 * @param slot Slot to equip the item in
 * @param item Item to equip
 * @return `false` if the item cannot be equipped in the given slot, `true`
 *    otherwise
 */
export function equip(slot: Slot, item: Item): boolean;

/**
 * Equips all your familiars with their familiar-specific equipments that you
 * have in your inventory. This behaves similiarly to the "Equip All Familiars"
 * button in the Familiar Trainer UI.
 *
 * - This respects your `autoSatisfyWithCloset` setting.
 * - If you are out of Ronin/Hardcore, this automatically pulls any familiar-
 *   specific equipment from your storage.
 * @return `false` if an internal error occurred, `true` otherwise.
 *    Note that this will return `true` even if no familiars were actually
 *    equipped.
 */
export function equipAllFamiliars(): boolean;

/**
 * Returns the amount of the given item currently equipped on your character.
 * This includes any familiar equipment on your _active_ familiar, but not the
 * ones in your terrarium.
 * @param item Item to check
 * @return Number of `item` currently equipped
 */
export function equippedAmount(item: Item): number;

/**
 * Returns the item currently equipped on your character in the given slot.
 * @param slot Slot to check
 * @return Item equipped on `slot`, or the `none` item if the slot is empty.
 */
export function equippedItem(slot: Slot): Item;

/**
 * Correspondence types returned by `eudora()` (no-argument form).
 * @version r20630
 */
type EudoraReturnType =
  | 'none'
  | 'Penpal'
  | 'GameInformPowerDailyPro Magazine'
  | 'Xi Receiver Unit'
  | 'New-You Club';

/**
 * Correspondence types accepted by `eudora()` (single-argument form).
 * Note: The argument passed to `eudora()` is actually case-insensitive.
 * @version r20630
 */
type EudoraInputType = 'penpal' | 'game' | 'xi' | 'newyou';

/**
 * Returns your currently active {@link https://kol.coldfront.net/thekolwiki/index.php/Correspondence correspondent}.
 * @return Your current correspondent type, or `none` if you have no
 *    correspondent set. If the correspondent type is unknown to KoLmafia, this
 *    returns `Unknown`.\
 *    Note: This is _different_ from the values accepted by the single-argument
 *    form of `eudora()`.
 */
export function eudora(): EudoraReturnType | 'Unknown';

/**
 * Changes your active {@link https://kol.coldfront.net/thekolwiki/index.php/Correspondence correspondent}.
 *    If an invalid correspondent type is given, this returns `false`.
 * @param newEudora New correspondent type (case-insensitive).\
 *    Note: This is _different_ from the values returned by the no-argument form
 *    of `eudora()`.
 * @return Whether the correspondent was changed successfully
 * @example let isSuccessful = eudora("penpal");
 */
// Case-insensitive type-checking trick appropriated from:
//    https://stackoverflow.com/a/64932909/
export function eudora<T extends string>(
  newEudora: Lowercase<T> extends EudoraInputType ? T : EudoraInputType
): boolean;

/**
 * Card names returned by `everyCardName()`
 * @version r20630
 */
type EveryCardName =
  | 'X of Clubs' // 1
  | 'X of Hearts' // 2
  | 'X of Diamonds' // 3
  | 'X of Spades' // 4
  | 'X of Cups' // 5
  | 'X of Wands' // 6
  | 'X of Swords' // 7
  | 'X of Coins' // 8
  | 'XIII - Death' // 9
  | 'Goblin Sapper' // 10
  | 'The Hive' // 11
  | 'Hunky Fireman Card' // 12
  | 'V - The Hierophant' // 13
  | 'XVIII - The Moon' // 14
  | 'Werewolf' // 15
  | 'XV - The Devil' // 16
  | 'Fire Elemental' // 17
  | 'Slimer Trading Card' // 18
  | 'VII - The Chariot' // 19
  | 'II - The High Priestess' // 20
  | 'XII - The Hanged Man' // 21
  | 'Plantable Greeting Card' // 22
  | 'Pirate Birthday Card' // 23
  | 'XIV - Temperance' // 24
  | 'Unstable Portal' // 25
  | 'XVII - The Star' // 26
  | 'Suit Warehouse Discount Card' // 27
  | 'Christmas Card' // 28
  | 'Go Fish' // 29
  | 'Aquarius Horoscope' // 30
  | 'Plains' // 31
  | 'Swamp' // 32
  | 'Mountain' // 33
  | 'Forest' // 34
  | 'Island' // 35
  | 'Healing Salve' // 36
  | 'Dark Ritual' // 37
  | 'Lightning Bolt' // 38
  | 'Giant Growth' // 39
  | 'Ancestral Recall' // 40
  | 'Gift Card' // 41
  | 'X of Papayas' // 42
  | 'X of Salads' // 43
  | 'IX - The Hermit' // 44
  | 'IV - The Emperor' // 45
  | 'Green Card' // 46
  | 'XVI - The Tower' // 47
  | 'The Race Card' // 48
  | '0 - The Fool' // 49
  | 'I - The Magician' // 50
  | 'XI - Strength' // 51
  | 'Lead Pipe' // 52
  | 'Rope' // 53
  | 'Wrench' // 54
  | 'Candlestick' // 55
  | 'Knife' // 56
  | 'Revolver' // 57
  | '1952 Mickey Mantle' // 58
  | 'Spare Tire' // 59
  | 'Extra Tank' // 60
  | 'Sheep' // 61
  | 'Year of Plenty' // 62
  | 'Mine' // 63
  | 'Laboratory' // 64
  | 'X of Kumquats' // 65
  | 'Professor Plum' // 66
  | 'X - The Wheel of Fortune' // 67
  | 'XXI - The World' // 68
  | 'VI - The Lovers' // 69
  | 'III - The Empress'; // 70

/**
 * Returns the name of a card from the {@link https://kol.coldfront.net/thekolwiki/index.php/Deck_of_Every_Card Deck of Every Card}
 * which uniquely matches the given string.
 * @param name String to search for (uses fuzzy matching)
 * @return Full unambiguous name of the card that matches the given string.
 *    If no match is found, or multiple matches are found, this returns an empty
 *    string.
 */
export function everyCardName(name: string): EveryCardName | '';

/**
 * Estimates how much damage the current (or last encountered) monster will deal
 * to you, given your current modifiers (including Monster Level adjustments).
 * @return Expected damage dealt by the monster as an integer
 */
export function expectedDamage(): number;

/**
 * Estimates how much damage a given monster will deal to you, given your
 * current modifiers (including Monster Level adjustments).
 * @param monster Monster to check
 * @return Expected damage dealt by the monster as an integer
 */
export function expectedDamage(monster: Monster): number;

/**
 * Returns your current experience bonus for your mainstat as a floating-point
 * number.
 * For example, if your bonus stat gain is +150%, this returns 1.5.
 * @return Experience bonus for your mainstat
 */
export function experienceBonus(): number;

/**
 * Returns the result of evaluating a mathematical expression.
 *
 * This uses a mini-language different from JavaScript or ASH:
 *
 * - Whitespace is _not_ permitted.
 * - Parentheses (`()`) can be used to group subexpressions.
 * - Available operators: addition (`+`), subtraction (`-`),
 *   multiplication (`*`), division (`/`), modulo (`%`), exponentiation (`^`)
 * - Available functions: `abs(x)`, `ceil(x)`, `floor(x)`, `sqrt(x)`,
 *   `min(x, y)`, `max(x, y)`
 * - `pref(property)` can be used to retrieve the value of KoLmafia property.
 *   `true` becomes 1, `false` becomes 0, and other values are parsed as a
 *   floating-point number. A nonexistent property evaluates to 0.
 *   - `pref(property,substr)` evaluates to 1 if the value of a KoLmafia
 *     property contains the given substring, otherwise 0.
 *
 * An invalid expression or a computation error (e.g. divide by 0) will
 * terminate the script _immediately_ without throwing an exception.
 *
 * _Note: This mini-language is used internally to compute the values of certain
 * data-driven text files such as `modifiers.txt`._
 * @param expr Mathematical expression
 * @return Result of evaluating the expression as a floating-point number.
 */
export function expressionEval(expr: string): number;

/**
 * Parses the given HTML and returns a collection of items gained.
 * This can be used to parse the results of an adventure, using another item,
 * etc.
 * @param html HTML from an in-game page
 * @return Mapping of gained items to their quantities
 */
export function extractItems(html: string): {[item: string]: number};

/**
 * Parses the given HTML and returns the amount of Meat gained or lost.
 * This can be used to parse the results of an adventure, using another item,
 * etc.
 * @param html HTML from an in-game page
 * @return Amount of meat gained (positive) or lost (negative)
 */
export function extractMeat(html: string): number;

/**
 * Returns the representative familiar-specific equipment of a familiar.
 * If the familiar has multiple familiar-specific equipment, returns the
 * "default" variant (usually the one that can be won at the Cake-Shaped Arena).
 * @param familiar Familiar to check
 * @return Familiar-specific equipment for the familiar, or `none` if the
 *    familiar does not have a familiar-specific equipment.
 */
export function familiarEquipment(familiar: Familiar): Item;

/**
 * Returns the item currently worn by the `familiar`. This includes items on
 * familiars that can wear player equipment (e.g.
 * {@link https://kol.coldfront.net/thekolwiki/index.php/Left-Hand_Man Left-Hand Man}).
 * @param familiar Familiar to check
 * @return Equipment worn by the familiar, or `none` if the familiar has no item
 *    equipped.
 */
export function familiarEquippedEquipment(familiar: Familiar): Item;

/**
 * Returns the base weight of the familiar.
 * @param familiar Familiar weight
 * @return Base weight of the familiar without applying any modifiers
 * @see weightAdjustment
 */
export function familiarWeight(familiar: Familiar): number;

/**
 * Retrieves an object containing your favorite familiars.
 * @return Object containing your favirite familiars. Each key is the name of a
 *    familiar type, and each value is a boolean that indicates whether the
 *    familiar can be used under current restrictions (i.e. the return value of
 *    `canEquip()` for that familiar).
 */
export function favoriteFamiliars(): {[familiar: string]: boolean};

/**
 * Requests a fax for the `monster` from a
 * {@link https://kol.coldfront.net/thekolwiki/index.php/A_Fax_Machine#FaxBots FaxBot}
 * known to KoLmafia that is currently online and has the requested monster.
 * As of r19492, this includes EasyFax and CheeseFax.
 * @param monster Monster to request a fax for
 * @return Whether the fax was successfully requested
 */
export function faxbot(monster: Monster): boolean;

/**
 * Requests a fax for the `monster` from a specific
 * {@link https://kol.coldfront.net/thekolwiki/index.php/A_Fax_Machine#FaxBots FaxBot}
 * @param monster Monster to request a fax for
 * @param botName Name of the faxbot
 * @return Whether the fax was successfully requested
 */
export function faxbot(monster: Monster, botName: string): boolean;

/**
 * Checks if the last choice adventure has lead into a fight page.
 */
export function fightFollowsChoice(): boolean;

/**
 * Loads the contents of a file, skipping empty lines or lines beginning with
 * `#`.
 * Despite the name, this does _not_ return an array.
 * @param path Relative path to a file on disk or embedded within KoLmafia.
 *    The path must be relative to KoLmafia's root directory.
 * @return Object whose keys are "row numbers" and values are the contents of
 *    each line. Row numbers start at 1, so the object looks like this:
 *
 *    ```
 *    { "1": "line 1 contents", "2": "line 2 contents", ... }
 *    ```
 */
export function fileToArray(path: string): {[row: number]: string};

/**
 * Loads the contents of a file as a string.
 * Unlike other file I/O functions, this does not discard empty lines or lines
 * beginning with `#`.
 * @param path Relative path to a file on disk or embedded within KoLmafia.
 *    The path must be relative to KoLmafia's root directory.
 * @return Contents of the file
 */
export function fileToBuffer(path: string): string;

/**
 * Loads the contents of a file into an ASH map.
 * Since ASH maps cannot be created or used directly in JavaScript, this
 * function is useless.
 * @deprecated Use `fileToArray()` or `fileToBuffer()` instead
 * @param path Relative path to a file on disk or embedded within KoLmafia.
 *    The path must be relative to KoLmafia's root directory.
 * @param map ASH map to load the data into
 * @return Whether the file was loaded successfully
 */
export function fileToMap(path: string, map: unknown): boolean;

/**
 * Loads the contents of a file into an ASH map.
 * Since ASH maps cannot be created or used directly in JavaScript, this
 * function is useless.
 * @deprecated Use `fileToArray()` or `fileToBuffer()` instead
 * @param path Relative path to a file on disk or embedded within KoLmafia.
 *    The path must be relative to KoLmafia's root directory.
 * @param map ASH map to load the data into
 * @param compact If `false`, KoLmafia will attempt to parse the text file as a
 *    legacy "non-compact" format. This parameter exists for backwards
 *    compatibility and should not be used in newer scripts.
 * @return Whether the file was loaded successfully
 */
export function fileToMap(
  path: string,
  map: unknown,
  compact: boolean
): boolean;

/**
 * Rounds down a number to the nearest integer.
 * @deprecated Use `Math.floor()` instead.
 */
export function floor(arg: number): number;

/**
 * Checks whether you have access to the
 * {@link https://kol.coldfront.net/thekolwiki/index.php/The_Florist_Friar%27s_Cottage Florist Friar}.
 */
export function floristAvailable(): boolean;

/**
 * Flushes KoLmafia's internal cache for your
 * {@link https://kol.coldfront.net/thekolwiki/index.php/Monster_Manuel Monster Manuel}.
 * The cache can be repopulated by manually visiting the Monster Manuel pages.
 * @return Always returns `true`
 */
export function flushMonsterManuelCache(): true;

/**
 * Returns the submitted value of a URL parameter or form input field.
 * This can be used in a relay script to process form submissions.
 * @param name Name of the URL parameter or form input.
 * @return Value of the URL parameter/form input, or an empty string if the
 *    parameter is not present.
 */
export function formField(name: string): string;

/**
 * Returns all URL parameters and submitted form input values.
 * This can be used in a relay script to process form submissions.
 * @return Object that maps each URL parameter name or form input field name to
 *    to its value.
 */
export function formFields(): {[name: string]: string};

/**
 * Parses a date/time string using `inFormat`, then converts it to another
 * string using `outFormat`.
 *
 * Both `inFormat` and `outFormat` use date/time format patterns supported by
 * {@link https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html `java.text.SimpleDateFormat`}.
 *
 * This is roughly equivalent to calling
 * ```
 * timestampToDate(dateToTimestamp(inFormat, text), outFormat);
 * ```
 * @param inFormat Format pattern that describes `text`
 * @param text Date/time string to parse
 * @param outFormat Format pattern to use for producing the final string
 * @return Reformatted date/time string
 */
export function formatDateTime(
  inFormat: string,
  text: string,
  outFormat: string
): string;

/**
 * Checks if the current character has completed the
 * {@link https://kol.coldfront.net/thekolwiki/index.php/Deep_Fat_Friar%27s_Gate_Quest Deep Fat Friars' Gate quest}.
 */
export function friarsAvailable(): boolean;

/**
 * Returns the fuel cost of an
 * {@link https://kol.coldfront.net/thekolwiki/index.php/Asdon_Martin Asdon Martin}
 * skill.
 * @param skill Skill to check
 * @return Fuel cost if the `skill` is an Asdon Martin skill, or 0 for other
 * skills.
 */
export function fuelCost(skill: Skill): number;

/**
 * Returns the current character's maximum fullness.
 */
export function fullnessLimit(): number;

export function gamedayToInt(): number;
export function gamedayToString(): string;
export function gametimeToInt(): number;
export function getAllProperties(
  filterValue: string,
  globalValue: boolean
): {[key: string]: boolean};
export function getAutoAttack(): number;
export function getCampground(): {[item: string]: number};
export function getCcsAction(index: number): string;
export function getChateau(): {[item: string]: number};
export function getClanId(): number;
export function getClanLounge(): {[item: string]: number};
export function getClanName(): string;
export function getClanRumpus(): {[key: string]: number};
export function getCloset(): {[item: string]: number};
export function getCounters(label: string, min: number, max: number): string;
export function getCustomOutfits(): string[];
export function getDwelling(): Item;
export function getFloristPlants(): {[location: string]: string[]};
export function getFreePulls(): {[item: string]: number};
export function getFuel(): number;
export function getGoals(): string[];
export function getIgnoreZoneWarnings(): boolean;
export function getIngredients(arg: Item): {[item: string]: number};
export function getInventory(): {[item: string]: number};
export function getLocationMonsters(location: Location): {
  [monster: string]: boolean;
};
export function getMonsterMapping(): {[monster: string]: Monster};
export function getMonsterMapping(path: string): {[monster: string]: Monster};
export function getMonsters(location: Location): Monster[];
export function getMoods(): string[];
export function getOutfits(): string[];
export function getPath(): string;
export function getPathFull(): string;
export function getPathVariables(): string;
export function getPlayerId(playerNameValue: string): string;
export function getPlayerName(playerIdValue: number): string;
export function getPower(item: Item): number;
export function getProperty(name: string): string;
export function getProperty(name: string, globalValue: boolean): string;
export function getRelated(item: Item, type: string): {[item: string]: number};
export function getRevision(): number;
export function getShop(): {[item: string]: number};
export function getShopLog(): string[];
export function getStackTrace(): {file: string; name: string; line: number}[];
export function getStash(): {[item: string]: number};
export function getStorage(): {[item: string]: number};
export function getVersion(): string;

/**
 * Returns the item that represents the appliance installed in your
 * {@link https://kol.coldfront.net/thekolwiki/index.php/Your_Workshed Workshed}.
 * @version r20678
 * @return Item used to install your current workshed appliance, e.g.
 *    `diabolic pizza cube`. If you don't have a Workshed, returns `none`.
 */
export function getWorkshed(): Item;

export function gnomadsAvailable(): boolean;
export function goalExists(check: string): boolean;
export function groupString(
  string: string,
  regex: string
): {[key: number]: {[key: number]: string}};
export function guildStoreAvailable(): boolean;
export function handlingChoice(): boolean;
export function haveBartender(): boolean;
export function haveChef(): boolean;
export function haveDisplay(): boolean;
export function haveEffect(arg: Effect): number;
export function haveEquipped(item: Item): boolean;
export function haveFamiliar(familiar: Familiar): boolean;
export function haveMushroomPlot(): boolean;
export function haveOutfit(outfit: string): boolean;
export function haveServant(servant: Servant): boolean;
export function haveShop(): boolean;
export function haveSkill(arg: Skill): boolean;
export function hedgeMaze(arg: string): boolean;
export function hermit(arg1: Item, arg2: number): boolean;
export function hermit(arg1: number, arg2: Item): boolean;
export function hiddenTempleUnlocked(): boolean;
export function hippyStoneBroken(): boolean;
export function hippyStoreAvailable(): boolean;
export function historicalAge(item: Item): number;
export function historicalPrice(item: Item): number;
export function holiday(): string;
export function hpCost(skill: Skill): number;
export function imageToMonster(value: string): Monster;
export function inBadMoon(): boolean;
export function inHardcore(): boolean;
export function inMoxieSign(): boolean;
export function inMultiFight(): boolean;
export function inMuscleSign(): boolean;
export function inMysticalitySign(): boolean;
export function inaccessibleReason(master: Coinmaster): string;
export function indexOf(source: string, search: string): number;
export function indexOf(source: string, search: string, start: number): number;
export function inebrietyLimit(): number;
export function initiativeModifier(): number;
export function insert(buffer: string, index: number, s: string): string;
export function isAccessible(master: Coinmaster): boolean;
export function isBanished(arg: Monster): boolean;
export function isCoinmasterItem(item: Item): boolean;

/**
 * Checks if KoLmafia is using a Dark Mode theme.
 * @version r20566
 * @return Whether KoLmafia is currently using a Dark Mode theme
 */
export function isDarkMode(): boolean;

export function isDiscardable(item: Item): boolean;
export function isDisplayable(item: Item): boolean;
export function isFamiliarEquipmentLocked(): boolean;
export function isGiftable(item: Item): boolean;
export function isGoal(item: Item): boolean;
export function isInteger(string: string): boolean;
export function isNpcItem(item: Item): boolean;
export function isOnline(arg: string): boolean;
export function isTradeable(item: Item): boolean;
export function isTrendy(thing: Item): boolean;
export function isTrendy(thing: Skill): boolean;
export function isTrendy(thing: Familiar): boolean;
export function isTrendy(thing: string): boolean;
export function isUnrestricted(thing: Item): boolean;
export function isUnrestricted(thing: Skill): boolean;
export function isUnrestricted(thing: Familiar): boolean;
export function isUnrestricted(thing: string): boolean;
export function isWearingOutfit(outfit: string): boolean;
export function itemAmount(arg: Item): number;
export function itemDropModifier(): number;
export function itemDrops(): {[item: string]: number};
export function itemDrops(arg: Monster): {[item: string]: number};
export function itemDropsArray(): {drop: Item; rate: number; type: string}[];
export function itemDropsArray(
  monster: Monster
): {drop: Item; rate: number; type: string}[];
export function itemDropsArray(
  arg: Monster
): {drop: Item; rate: number; type: string}[];
export function itemType(item: Item): string;
export function jumpChance(): number;
export function jumpChance(arg: Monster): number;
export function jumpChance(arg: Monster, init: number): number;
export function jumpChance(arg: Monster, init: number, ml: number): number;
export function jumpChance(arg: Location): number;
export function jumpChance(arg: Location, init: number): number;
export function jumpChance(arg: Location, init: number, ml: number): number;
export function knollAvailable(): boolean;
export function lastChoice(): number;
export function lastDecision(): number;
export function lastIndexOf(source: string, search: string): number;
export function lastIndexOf(
  source: string,
  search: string,
  start: number
): number;
export function lastItemMessage(): string;
export function lastMonster(): Monster;
export function lastSkillMessage(): string;
export function leetify(string: string): string;
export function length(string: string): number;
export function lightningCost(skill: Skill): number;
export function limitMode(): string;
export function loadHtml(string: string): string;
export function lockFamiliarEquipment(lock: boolean): void;
export function logN(arg: number): number;
export function logN(arg: number, base: number): number;
export function logprint(string: string): void;
export function makeUrl(arg1: string, arg2: boolean, arg3: boolean): string;
export function mallPrice(item: Item): number;
export function mallPrices(arg: {[key: number]: boolean}): number;
export function mallPrices(arg: string): number;
export function mallPrices(category: string, tiers: string): number;
export function manaCostModifier(): number;
export function mapToFile(var1: unknown, var2: string): boolean;
export function mapToFile(var1: unknown, var2: string, var3: boolean): boolean;

/**
 * Returns the largest number among the given arguments.
 * @deprecated Use `Math.max()`
 */
export function max(arg1: number, ...args: number[]): number;
export function maximize(
  maximizerStringValue: string,
  isSpeculateOnlyValue: boolean
): boolean;
export function maximize(
  maximizerStringValue: string,
  maxPriceValue: number,
  priceLevelValue: number,
  isSpeculateOnlyValue: boolean
): boolean;
export function maximize(
  maximizerStringValue: string,
  maxPriceValue: number,
  priceLevelValue: number,
  isSpeculateOnlyValue: boolean,
  showEquipment: boolean
): {
  display: string;
  command: string;
  score: number;
  effect: Effect;
  item: Item;
  skill: Skill;
}[];
export function meatDrop(): number;
export function meatDrop(arg: Monster): number;
export function meatDropModifier(): number;

/**
 * Returns the smallest number among the given arguments.
 * @deprecated Use `Math.min()`
 */
export function min(arg1: number, ...args: number[]): number;
export function minstrelInstrument(): Item;
export function minstrelLevel(): number;
export function minstrelQuest(): boolean;
export function modifierEval(expr: string): number;
export function monsterAttack(): number;
export function monsterAttack(arg: Monster): number;
export function monsterDefense(): number;
export function monsterDefense(arg: Monster): number;
export function monsterElement(): Element;
export function monsterElement(arg: Monster): Element;
export function monsterEval(expr: string): number;
export function monsterFactoidsAvailable(arg1: Monster, arg2: boolean): number;
export function monsterHp(): number;
export function monsterHp(arg: Monster): number;
export function monsterInitiative(): number;
export function monsterInitiative(arg: Monster): number;
export function monsterLevelAdjustment(): number;
export function monsterManuelText(arg: Monster): string;
export function monsterPhylum(): Phylum;
export function monsterPhylum(arg: Monster): Phylum;
export function moodExecute(multiplicity: number): void;
export function moodList(): string[];
export function moonLight(): number;
export function moonPhase(): number;
export function mpCost(skill: Skill): number;
export function myAbsorbs(): number;
export function myAdventures(): number;
export function myAscensions(): number;
export function myAudience(): number;
export function myBasestat(arg: Stat): number;
export function myBjornedFamiliar(): Familiar;
export function myBuffedstat(arg: Stat): number;
export function myClass(): Class;
export function myClosetMeat(): number;
export function myCompanion(): string;
export function myDaycount(): number;
export function myDiscomomentum(): number;
export function myEffectiveFamiliar(): Familiar;
export function myEffects(): {[effect: string]: number};
export function myEnthronedFamiliar(): Familiar;
export function myFamiliar(): Familiar;
export function myFullness(): number;
export function myFury(): number;
export function myGardenType(): string;
export function myHash(): string;
export function myHp(): number;
export function myId(): string;
export function myInebriety(): number;
export function myLevel(): number;
export function myLightning(): number;
export function myLocation(): Location;
export function myMask(): string;
export function myMaxfury(): number;
export function myMaxhp(): number;
export function myMaxmp(): number;
export function myMaxpp(): number;
export function myMeat(): number;
export function myMp(): number;
export function myName(): string;
export function myPath(): string;
export function myPathId(): number;
export function myPokeFam(arg: number): Familiar;
export function myPp(): number;
export function myPrimestat(): Stat;
export function myRain(): number;

/**
 * Returns your current Energy amount in a You, Robot challenge path.
 * @version r20643
 */
export function myRobotEnergy(): number;

/**
 * Returns your current Scrap amount in a You, Robot challenge path.
 * @version r20643
 */
export function myRobotScraps(): number;

export function myServant(): Servant;
export function mySessionAdv(): number;
export function mySessionItems(): {[item: string]: number};
export function mySessionItems(item: Item): number;
export function mySessionMeat(): number;

/**
 * Returns the contents of your current session results. This includes not only
 * meat and items gained/lost, but also stats, adventures, and pseudo-items such
 * as pirate insults, hobo parts, etc.
 * @version r20680
 * @return Object whose keys represent each entry in the session results tally,
 *    and whose values represent the changed amount.
 */
export function mySessionResults(): {[what: string]: number};

export function mySign(): string;
export function mySoulsauce(): number;
export function mySpleenUse(): number;
export function myStorageMeat(): number;
export function myThrall(): Thrall;
export function myThunder(): number;
export function myTurncount(): number;
export function myVykeaCompanion(): Vykea;
export function nowToInt(): number;
export function nowToString(dateFormatValue: string): string;
export function npcPrice(item: Item): number;
export function numberologyPrize(num: number): string;
export function outfit(outfit: string): boolean;
export function outfitPieces(outfit: string): Item[];
export function outfitTattoo(outfit: string): string;
export function overdrink(item: Item): boolean;
export function overdrink(arg1: Item, arg2: number): boolean;
export function overdrink(arg1: number, arg2: Item): boolean;
export function pathIdToName(value: number): string;
export function pathNameToId(value: string): number;
export function print(): void;
export function print(string: string): void;
export function print(string: string, color: string): void;
export function printHtml(string: string): void;
export function propertyDefaultValue(nameValue: string): string;
export function propertyExists(nameValue: string): boolean;
export function propertyExists(
  nameValue: string,
  globalValue: boolean
): boolean;
export function propertyHasDefault(nameValue: string): boolean;
export function pullsRemaining(): number;
export function putCloset(arg1: number): boolean;
export function putCloset(arg1: Item): boolean;
export function putCloset(arg1: Item, arg2: number): boolean;
export function putCloset(arg1: number, arg2: Item): boolean;
export function putDisplay(arg1: number, arg2: Item): boolean;
export function putDisplay(arg1: Item, arg2: number): boolean;
export function putShop(
  priceValue: number,
  limitValue: number,
  itemValue: Item
): boolean;
export function putShop(
  priceValue: number,
  limitValue: number,
  qtyValue: number,
  itemValue: Item
): boolean;
export function putShopUsingStorage(
  priceValue: number,
  limitValue: number,
  itemValue: Item
): boolean;
export function putShopUsingStorage(
  priceValue: number,
  limitValue: number,
  qtyValue: number,
  itemValue: Item
): boolean;
export function putStash(arg1: Item, arg2: number): boolean;
export function putStash(arg1: number, arg2: Item): boolean;
export function pvpAttacksLeft(): number;
export function rainCost(skill: Skill): number;
export function random(arg: number): number;
export function rawDamageAbsorption(): number;
export function refreshShop(): boolean;
export function refreshStash(): boolean;
export function refreshStatus(): boolean;
export function removeItemCondition(arg1: number, arg2: Item): void;
export function removeItemCondition(arg1: Item, arg2: number): void;
export function removeProperty(nameValue: string): string;
export function removeProperty(nameValue: string, globalValue: boolean): string;
export function renameProperty(
  oldNameValue: string,
  newNameValue: string
): boolean;
export function replace(
  buffer: string,
  start: number,
  finish: number,
  s: string
): string;
export function replaceString(
  source: string,
  searchValue: string,
  replaceValue: string
): string;
export function replaceString(
  source: string,
  searchValue: string,
  replaceValue: string
): string;
export function repriceShop(priceValue: number, itemValue: Item): boolean;
export function repriceShop(
  priceValue: number,
  limitValue: number,
  itemValue: Item
): boolean;
export function restoreHp(amount: number): boolean;
export function restoreMp(amount: number): boolean;
export function retrieveItem(item: Item): boolean;
export function retrieveItem(arg1: Item, arg2: number): boolean;
export function retrieveItem(arg1: number, arg2: Item): boolean;
export function reverseNumberology(): {[key: number]: number};
export function reverseNumberology(
  advDelta: number,
  spleenDelta: number
): {[key: number]: number};
export function rollover(): number;
export function round(arg: number): number;
export function runChoice(decision: number): string;
export function runChoice(decision: number, extra: string): string;
export function runChoice(decision: number, extra: boolean): string;
export function runChoice(
  decision: number,
  custom: boolean,
  more: string
): string;
export function runCombat(): string;
export function runCombat(filterFunction: string): string;
export function runTurn(): string;
export function runaway(): string;
export function sell(
  master: Coinmaster,
  countValue: number,
  itemValue: Item
): boolean;
export function sellPrice(master: Coinmaster, item: Item): number;
export function sellsItem(master: Coinmaster, item: Item): boolean;
export function sessionLogs(dayCount: number): string[];
export function sessionLogs(player: string, dayCount: number): string[];
export function sessionLogs(
  playerName: string,
  baseDate: string,
  count: number
): string[];
export function setAutoAttack(attackValue: number): void;
export function setAutoAttack(attackValue: string): void;
export function setLength(buffer: string, i: number): void;
export function setLocation(location: Location): void;
export function setProperty(nameValue: string, value: string): void;
export function shopAmount(arg: Item): number;
export function shopLimit(arg: Item): number;
export function shopPrice(item: Item): number;
export function slashCount(arg: Item): number;
export function soulsauceCost(skill: Skill): number;
export function spleenLimit(): number;
export function splitString(string: string): string[];
export function splitString(string: string, regex: string): string[];
export function squareRoot(val: number): number;
export function startsWith(source: string, prefix: string): boolean;
export function stashAmount(arg: Item): number;
export function statBonusToday(): Stat;
export function statBonusTomorrow(): Stat;
export function steal(): string;
export function stillsAvailable(): number;
export function stopCounter(label: string): void;
export function storageAmount(arg: Item): number;
export function stunSkill(): Skill;
export function substring(source: string, start: number): string;
export function substring(
  source: string,
  start: number,
  finish: number
): string;
export function svnAtHead(project: string): boolean;
export function svnExists(project: string): boolean;
export function svnInfo(script: string): {
  url: string;
  revision: number;
  last_changed_author: string;
  last_changed_rev: number;
  last_changed_date: string;
};
export function sweetSynthesis(effect: Effect): boolean;
export function sweetSynthesis(arg1: number, arg2: Effect): boolean;
export function sweetSynthesis(arg1: Effect, arg2: number): boolean;
export function sweetSynthesis(
  arg1: number,
  arg2: Effect,
  arg3: number
): boolean;
export function sweetSynthesis(arg1: Item, arg2: Item): boolean;
export function sweetSynthesis(arg1: number, arg2: Item, arg3: Item): boolean;
export function sweetSynthesisPair(arg1: Effect): Item[];
export function sweetSynthesisPair(arg1: Effect, arg2: number): Item[];
export function sweetSynthesisPairing(arg1: Effect, arg2: Item): Item[];
export function sweetSynthesisPairing(
  arg1: Effect,
  arg2: Item,
  arg3: number
): Item[];
export function sweetSynthesisResult(item1: Item, item2: Item): Effect;
export function takeCloset(arg1: number): boolean;
export function takeCloset(arg1: Item): boolean;
export function takeCloset(arg1: Item, arg2: number): boolean;
export function takeCloset(arg1: number, arg2: Item): boolean;
export function takeDisplay(arg1: Item, arg2: number): boolean;
export function takeDisplay(arg1: number, arg2: Item): boolean;
export function takeShop(itemValue: Item): boolean;
export function takeShop(arg1: number, arg2: Item): boolean;
export function takeStash(arg1: Item, arg2: number): boolean;
export function takeStash(arg1: number, arg2: Item): boolean;
export function takeStorage(arg1: Item, arg2: number): boolean;
export function takeStorage(arg1: number, arg2: Item): boolean;
export function tavern(): number;
export function tavern(arg: string): number;
export function throwItem(item: Item): string;
export function throwItems(item1: Item, item2: Item): string;
export function thunderCost(skill: Skill): number;
export function timeToString(): string;
export function timestampToDate(timestamp: number, outFormat: string): string;
export function toBoolean(value: string): boolean;
export function toBoolean(value: boolean): boolean;
export function toBoolean(value: number): boolean;
export function toBounty(value: string): Bounty;
export function toClass(value: string): Class;
export function toClass(value: number): Class;
export function toCoinmaster(value: string): Coinmaster;
export function toEffect(value: string): Effect;
export function toEffect(value: number): Effect;
export function toEffect(value: Skill): Effect;
export function toElement(value: string): Element;
export function toFamiliar(value: string): Familiar;
export function toFamiliar(value: number): Familiar;
export function toFloat(value: string): number;
export function toFloat(value: boolean): number;
export function toFloat(value: number): number;
export function toFloat(value: number): number;
export function toInt(value: string): number;
export function toInt(value: boolean): number;
export function toInt(value: number): number;
export function toInt(value: number): number;
export function toInt(value: Item): number;
export function toInt(value: Familiar): number;
export function toInt(value: Skill): number;
export function toInt(value: Effect): number;
export function toInt(value: Class): number;
export function toInt(value: Monster): number;
export function toInt(value: Thrall): number;
export function toInt(value: Servant): number;
export function toInt(value: Vykea): number;
export function toItem(value: string): Item;
export function toItem(value: number): Item;
export function toItem(name: string, count: number): Item;
export function toJson(val: unknown): string;
export function toLocation(value: string): Location;
export function toLocation(value: number): Location;
export function toLowerCase(string: string): string;
export function toMonster(value: string): Monster;
export function toMonster(value: number): Monster;
export function toPhylum(value: string): Phylum;
export function toPlural(item: Item): string;
export function toServant(value: string): Servant;
export function toServant(value: number): Servant;
export function toSkill(value: string): Skill;
export function toSkill(value1: string, value2: string): Skill;
export function toSkill(value: number): Skill;
export function toSkill(value: Effect): Skill;
export function toSlot(item: string): Slot;
export function toSlot(item: Item): Slot;
export function toStat(value: string): Stat;
export function toString(val: string): string;
export function toString(val: number, fmt: string): string;
export function toString(val: number, fmt: string): string;
export function toThrall(value: string): Thrall;
export function toThrall(value: number): Thrall;
export function toUpperCase(string: string): string;
export function toUrl(value: Location): string;
export function toVykea(value: string): Vykea;
export function todayToString(): string;
export function totalFreeRests(): number;
export function totalTurnsPlayed(): number;
export function towerDoor(): boolean;
export function traceprint(string: string): void;
export function truncate(arg: number): number;
export function turnsPerCast(skill: Skill): number;
export function turnsPlayed(): number;
export function twiddle(): string;
export function unusualConstructDisc(): Item;
export function updateCandyPrices(): void;
export function urlDecode(arg: string): string;
export function urlEncode(arg: string): string;
export function use(item: Item): boolean;
export function use(arg1: Item, arg2: number): boolean;
export function use(arg1: number, arg2: Item): boolean;
export function useFamiliar(familiar: Familiar): boolean;
export function useServant(servant: Servant): boolean;
export function useSkill(arg1: Skill, arg2: number): boolean;
export function useSkill(arg1: number, arg2: Skill): boolean;
export function useSkill(arg1: Skill, arg2: number, target: string): boolean;
export function useSkill(arg1: number, arg2: Skill, target: string): boolean;
export function useSkill(skill: Skill): string;
export function userConfirm(message: string): boolean;
export function userConfirm(
  message: string,
  timeOut: number,
  defaultBoolean: boolean
): boolean;
export function visit(master: Coinmaster): boolean;
export function visitUrl(): string;
export function visitUrl(string: string): string;
export function visitUrl(string: string, usePostMethod: boolean): string;
export function visitUrl(
  string: string,
  usePostMethod: boolean,
  encoded: boolean
): string;
export function votingBoothInitiatives(
  clss: Class,
  path: number,
  daycount: number
): {[key: string]: boolean};
export function votingBoothInitiatives(
  clss: number,
  path: number,
  daycount: number
): {[key: string]: boolean};
export function wait(delay: number): void;
export function waitq(delay: number): void;
export function weaponHands(item: Item): number;
export function weaponType(item: Item): Stat;
export function weightAdjustment(): number;
export function whiteCitadelAvailable(): boolean;
export function whoClan(): {[key: string]: boolean};
export function willUsuallyDodge(): boolean;
export function willUsuallyMiss(): boolean;
export function write(string: string): void;
export function writeln(string: string): void;
export function xpath(html: string, xpath: string): string[];
