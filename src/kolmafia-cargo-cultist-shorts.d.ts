/**
 * @file KoLmafia functions for managing the pockets of Cargo Cultist Shorts.
 */

import './global';

/**
 * Returns an unopened pocket number in your {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}
 * that will result in a fight with the `monster`.
 * @param monster Monster to search for
 * @return Pocket number (integer between 1 and 666, inclusive), or 0 if no
 *    available pockets contain the `monster`
 */
export function availablePocket(monster: Monster): number;

/**
 * Returns an unopened pocket number in your {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}
 * that will give the most turns of `effect`.
 * @param effect Effect to search for
 * @return Pocket number (integer between 1 and 666, inclusive), or 0 if no
 *    available pockets contain the `effect`
 */
export function availablePocket(effect: Effect): number;

/**
 * Returns an unopened pocket number in your {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}
 * that will give the largest number of `item`.
 * @param item Item to look for
 * @return Pocket number (integer between 1 and 666, inclusive), or 0 if no
 *    available pockets contain the `item`
 */
export function availablePocket(item: Item): number;

/**
 * Returns an unopened pocket number in your {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}
 * that will give the most substats for the `stat`.
 * @param stat Stat to look for
 * @return Pocket number (integer between 1 and 666, inclusive), or 0 if no
 *    available pockets give the `stat`
 */
export function availablePocket(stat: Stat): number;

/**
 * Returns an object whose keys are pocket numbers (converted to strings) of all
 * pockets in the {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}
 * that give effects.
 * This includes both used and unused pockets.
 */
export function effectPockets(): {[pocket: number]: true};

/**
 * Returns an object whose keys are pocket numbers (converted to strings) of all
 * pockets in the {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}
 * that give items.
 * This includes both used and unused pockets.
 */
export function itemPockets(): {[pocket: number]: true};

/**
 * Returns an object whose keys are pocket numbers (converted to strings) of all
 * pockets in the {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}
 * that contain a joke and give the {@link https://kol.coldfront.net/thekolwiki/index.php/Joke-Mad Joke-Mad}
 * effect.
 * This includes both used and unused pockets.
 */
export function jokePockets(): {[pocket: number]: true};

/**
 * Returns an object whose _values_ are pocket numbers of all pockets in the
 * {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}
 * that contain meat and puzzles, sorted by meat amount in ascending order.
 * (The keys merely serve as indices.)
 * This includes both used and unused pockets.
 */
export function meatPockets(): {[index: number]: number};

/**
 * Returns an object whose keys are pocket numbers (converted to strings) of all
 * pockets in the {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}
 * that contain a monster.
 * This includes both used and unused pockets.
 */
export function monsterPockets(): {[pocket: number]: true};

/**
 * Picks a pocket in your {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}.
 * @param pocket Pocket number (integer between 1 and 666, inclusive)
 * @return Whether the pocket was successfully picked
 */
export function pickPocket(pocket: number): boolean;

/**
 * Picks an unopened pocket in your {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}
 * that will result in a fight with the `monster`.
 * @param monster Monster to search for
 * @return Whether the pocket was successfully picked
 */
export function pickPocket(monster: Monster): boolean;

/**
 * Picks an unopened pocket in your {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}
 * that will give the most turns of `effect`.
 * @param effect Effect to search for
 * @return Whether the pocket was successfully picked
 */
export function pickPocket(effect: Effect): boolean;

/**
 * Picks an unopened pocket in your {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}
 * that will give the greatest number of `item`.
 * @param item Item to search for
 * @return Whether the pocket was successfully picked
 */
export function pickPocket(item: Item): boolean;

/**
 * Picks an unopened pocket in your {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}
 * that will give the most amount of substats for the `stat`.
 * @param stat Stat to search for
 * @return Whether the pocket was successfully picked
 */
export function pickPocket(stat: Stat): boolean;

/**
 * Returns an object whose keys are pocket numbers (converted to strings) of all
 * picked pockets in your {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}.
 */
export function pickedPockets(): {[pocket: number]: true};

/**
 * Returns an object whose keys are pocket numbers (converted to strings) of all
 * picked pockets in your {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}
 * that contains a scrap (number) puzzle.
 * This does not include waterlogged cipher puzzles or joke pockets.
 */
export function pickedScraps(): {[pocket: number]: true};

/**
 * Returns an object containing the names and number of turns of all effects
 * given by the `pocket` in your {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}.
 * @param pocket Pocket number (integer between 1 and 666, inclusive)
 * @return Object whose keys are names of all effects given by the `pocket`,
 *    and values are the number of turns of each effect given.
 *    If the `pocket` does not give any effect, returns an empty object.
 */
export function pocketEffects(pocket: number): {[effect: string]: number};

/**
 * Returns an object containing the names and quantity of all items given by
 * the `pocket` in your {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}.
 * @param pocket Pocket number (integer between 1 and 666, inclusive)
 * @return Object whose keys are names of all items given by the `pocket`, and
 *    values are the number of each item given.
 *    If the `pocket` does not give any item, returns an empty object.
 */
export function pocketItems(pocket: number): {[item: string]: number};

/**
 * Returns the joke message that would be given from a joke `pocket` in your
 * {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}.
 * @param pocket Pocket number (integer between 1 and 666, inclusive)
 * @return Joke message from the pocket, or an empty string if the `pocket` does
 *    not contain a joke
 */
export function pocketJoke(pocket: number): string;

// pocketMeat(), pocketPoem(), and pocketScrap() are effectively the same
// function, as they contain exactly the same code.
/**
 * Returns the contents of a meat puzzle pocket, a number puzzle pocket, or a
 * waterlogged poem pocket in your {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}.
 *
 * - If `pocket` is a meat puzzle pocket, the object contains a single key,
 *   which is the amount of meat given (as a string). The corresponding value
 *   is the puzzle message given together with the meat.
 * - If `pocket` is a number puzzle pocket, the object contains a single key,
 *   which is an internal number that KoLmafia uses to track the puzzle. The
 *   corresponding value is the syllable you saw when you last picked the
 *   `pocket`, or an empty string if you haven't picked it yet.
 * - If `pocket` is a waterlogged cipher puzzle pocket, the object contains a
 *   single key, which is an internal number that KoLmafia uses to track the
 *   puzzle. The corresponding value is a poem fragment string.
 *
 * Note: This is effectively identical to {@link pocketPoem pocketPoem()} and
 * {@link pocketScrap pocketScrap()}.
 * @param pocket Pocket number (integer between 1 and 666, inclusive)
 * @return Object that represents the contents of a puzzle pocket, or an empty
 *    object if the `pocket` is not a puzzle pocket.
 */
export function pocketMeat(pocket: number): {[meat: number]: string};

/**
 * Returns the monster that is contained in the `pocket` in your
 * {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}.
 * @param pocket Pocket number (integer between 1 and 666, inclusive)
 * @return Monster in the `pocket`, or `none` if the `pocket` does not contain a
 *    monster
 */
export function pocketMonster(pocket: number): Monster;

/**
 * Returns the contents of a meat puzzle pocket, a number puzzle pocket, or a
 * waterlogged poem pocket in your {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}.
 *
 * - If `pocket` is a meat puzzle pocket, the object contains a single key,
 *   which is the amount of meat given (as a string). The corresponding value
 *   is the puzzle message given together with the meat.
 * - If `pocket` is a number puzzle pocket, the object contains a single key,
 *   which is an internal number that KoLmafia uses to track the puzzle. The
 *   corresponding value is the syllable you saw when you last picked the
 *   `pocket`, or an empty string if you haven't picked it yet.
 * - If `pocket` is a waterlogged cipher puzzle pocket, the object contains a
 *   single key, which is an internal number that KoLmafia uses to track the
 *   puzzle. The corresponding value is a poem fragment string.
 *
 * Note: This is effectively identical to {@link pocketMeat pocketMeat()} and
 * {@link pocketScrap pocketScrap()}.
 * @param pocket Pocket number (integer between 1 and 666, inclusive)
 * @return Object that represents the contents of a puzzle pocket, or an empty
 *    object if the `pocket` is not a puzzle pocket.
 */
export function pocketPoem(pocket: number): {[key: number]: string};

/**
 * Returns the contents of a meat puzzle pocket, a number puzzle pocket, or a
 * waterlogged poem pocket in your {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}.
 *
 * - If `pocket` is a meat puzzle pocket, the object contains a single key,
 *   which is the amount of meat given (as a string). The corresponding value
 *   is the puzzle message given together with the meat.
 * - If `pocket` is a number puzzle pocket, the object contains a single key,
 *   which is an internal number that KoLmafia uses to track the puzzle. The
 *   corresponding value is the syllable you saw when you last picked the
 *   `pocket`, or an empty string if you haven't picked it yet.
 * - If `pocket` is a waterlogged cipher puzzle pocket, the object contains a
 *   single key, which is an internal number that KoLmafia uses to track the
 *   puzzle. The corresponding value is a poem fragment string.
 *
 * Note: This is effectively identical to {@link pocketMeat pocketMeat()} and
 * {@link pocketPoem pocketPoem()}.
 * @param pocket Pocket number (integer between 1 and 666, inclusive)
 * @return Object that represents the contents of a puzzle pocket, or an empty
 *    object if the `pocket` is not a puzzle pocket.
 */
export function pocketScrap(pocket: number): {[key: number]: string};

/**
 * Returns an object containing the names and substat amounts of all stats
 * given by the `pocket` in your {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}.
 * @param pocket Pocket number (integer between 1 and 666, inclusive)
 * @return Object whose keys are names of all stats given by the `pocket`, and
 *    values are the amount of substat given for each stat.
 *    If the `pocket` does not give any stat, returns an empty object.
 */
export function pocketStats(pocket: number): {[stat: string]: number};

/**
 * Returns an object whose _values_ are pocket numbers of all pockets in the
 * {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}
 * that contain a waterlogged cipher poem puzzle, sorted in the order of the
 * poem.
 * (The keys merely serve as indices.)
 * This includes both used and unused pockets.
 */
export function poemPockets(): {[pocket: number]: number};

/**
 * Returns an object whose _values_ are pocket numbers of all pockets in the
 * {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}
 * that contain the `monster`.
 * (The keys merely serve as indices.)
 * This includes both used and unused pockets.
 */
export function potentialPockets(monster: Monster): {[key: number]: number};

/**
 * Returns an object whose _values_ are pocket numbers of all pockets in the
 * {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}
 * that give the `effect`, sorted by the number of turns of the effect given in
 * descending order.
 * (The keys merely serve as indices.)
 * This includes both used and unused pockets.
 */
export function potentialPockets(effect: Effect): {[key: number]: number};

/**
 * Returns an object whose _values_ are pocket numbers of all pockets in the
 * {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}
 * that give the `item`, sorted by the number of `item` given in descending
 * order.
 * (The keys merely serve as indices.)
 * This includes both used and unused pockets.
 */
export function potentialPockets(item: Item): {[key: number]: number};

/**
 * Returns an object whose _values_ are pocket numbers of all pockets in the
 * {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}
 * that give substats for the `stat`, sorted by the amount of `stat` given in
 * descending order.
 * (The keys merely serve as indices.)
 * This includes both used and unused pockets.
 */
export function potentialPockets(stat: Stat): {[key: number]: number};

/**
 * Returns an object whose keys are pocket numbers (converted to strings) of all
 * pockets in the {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}
 * that restore all your HP and MP.
 * This includes both used and unused pockets.
 */
export function restorationPockets(): {[pocket: number]: true};

/**
 * Returns an object whose _values_ are pocket numbers of all pockets in the
 * {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}
 * that contain a scrap (number) puzzle, sorted in the order of syllables.
 * (The keys merely serve as indices.)
 * This includes both used and unused pockets.
 */
export function scrapPockets(): {[pocket: number]: number};

/**
 * Returns an object whose keys are pocket numbers (converted to strings) of all
 * pockets in the {@link https://kol.coldfront.net/thekolwiki/index.php/Cargo_Cultist_Shorts Cargo Cultist Shorts}
 * that give stats.
 * This includes both used and unused pockets.
 */
export function statsPockets(): {[pocket: number]: true};
