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
export function availableChoiceOptions(
  spoilers: boolean
): {[key: number]: string};

/**
 * For the `decision` choice in the current (or last) choice adventure, returns
 * all selectable items in the dropdown(s) for the choice.
 * @param decision Choice number
 * @return Object that represents all `<select>` tags associated with the choice
 *    number. Each key is the `name` attribute of the `<select>` tag, and each
 *    value is an object that contains the `value` attribute and text of all
 *    `<option>` tags inside the `<select>` tag.
 */
export function availableChoiceSelectInputs(
  decision: number
): {[selectName: string]: {[optionValue: string]: string}};

/**
 * For the `decision` choice in the current (or last) choice adventure, returns
 * the names of all text inputs for the choice.
 * @param decision Choice number
 * @return Object whose keys are the `name` attributes of all
 *    `<input type="text">` tags associated with the choice. The values are
 *    always empty strings.
 */
export function availableChoiceTextInputs(
  decision: number
): {[inputName: string]: ''};

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
 * @param data Contents of the file
 * @param filepath Path to the text file to save
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
export function dadSeaMonkeeWeakness(arg: number): Element;
export function dailySpecial(): Item;
export function damageAbsorptionPercent(): number;
export function damageReduction(): number;
export function dateToTimestamp(
  inFormat: string,
  dateTimeString: string
): number;
export function debugprint(string: string): void;
export function descToEffect(value: string): Effect;
export function descToItem(value: string): Item;
export function disable(name: string): void;
export function dispensaryAvailable(): boolean;
export function displayAmount(arg: Item): number;
export function drink(item: Item): boolean;
export function drink(arg1: Item, arg2: number): boolean;
export function drink(arg1: number, arg2: Item): boolean;
export function drinksilent(item: Item): boolean;
export function drinksilent(arg1: Item, arg2: number): boolean;
export function drinksilent(arg1: number, arg2: Item): boolean;
export function dump(arg: unknown): void;
export function dump(arg: unknown, color: string): void;
export function eat(item: Item): boolean;
export function eat(arg1: Item, arg2: number): boolean;
export function eat(arg1: number, arg2: Item): boolean;
export function eatsilent(item: Item): boolean;
export function eatsilent(arg1: Item, arg2: number): boolean;
export function eatsilent(arg1: number, arg2: Item): boolean;
export function elementalResistance(arg: Element): number;
export function elementalResistance(): number;
export function elementalResistance(arg: Monster): number;
export function emptyCloset(): boolean;
export function enable(name: string): void;
export function endsWith(source: string, suffix: string): boolean;
export function enthroneFamiliar(familiar: Familiar): boolean;
export function entityDecode(arg: string): string;
export function entityEncode(arg: string): string;
export function equip(item: Item): boolean;
export function equip(arg1: Item, arg2: Slot): boolean;
export function equip(arg1: Slot, arg2: Item): boolean;
export function equipAllFamiliars(): boolean;
export function equippedAmount(arg: Item): number;
export function equippedItem(slot: Slot): Item;
export function eudora(): string;
export function eudora(newEudora: string): boolean;
export function everyCardName(name: string): string;
export function expectedDamage(): number;
export function expectedDamage(arg: Monster): number;
export function experienceBonus(): number;
export function expressionEval(expr: string): number;
export function extractItems(string: string): {[item: string]: number};
export function extractMeat(string: string): number;
export function familiarEquipment(familiar: Familiar): Item;
export function familiarEquippedEquipment(familiar: Familiar): Item;
export function familiarWeight(familiar: Familiar): number;
export function favoriteFamiliars(): {[familiar: string]: boolean};
export function faxbot(monsterName: Monster): boolean;
export function faxbot(monsterName: Monster, botName: string): boolean;
export function fightFollowsChoice(): boolean;
export function fileToArray(var1: string): {[key: number]: string};
export function fileToBuffer(var1: string): string;
export function fileToMap(var1: string, var2: unknown): boolean;
export function fileToMap(var1: string, var2: unknown, var3: boolean): boolean;
export function floor(arg: number): number;
export function floristAvailable(): boolean;
export function flushMonsterManuelCache(): boolean;
export function formField(key: string): string;
export function formFields(): {[key: string]: string};
export function formatDateTime(
  inFormat: string,
  dateTimeString: string,
  outFormat: string
): string;
export function friarsAvailable(): boolean;
export function fuelCost(skill: Skill): number;
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
export function getLocationMonsters(
  location: Location
): {[monster: string]: boolean};
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
export function svnInfo(
  script: string
): {
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
