/**
 * @file KoLmafia functions for managing the pockets of Cargo Cultist Shorts.
 */

import './global';

/**
 * Returns an unopened pocket number in your Cargo Cultist Shorts that will
 * result in a fight with the `monster`.
 * @param monster Monster to search for
 * @return Pocket number (integer between 1 and 666, inclusive), or 0 if no
 *    available pockets contain the `monster`
 */
export function availablePocket(monster: Monster): number;

/**
 * Returns an unopened pocket number in your Cargo Cultist Shorts that will give
 * the most turns of `effect`.
 * @param effect Effect to search for
 * @return Pocket number (integer between 1 and 666, inclusive), or 0 if no
 *    available pockets contain the `effect`
 */
export function availablePocket(effect: Effect): number;

/**
 * Returns an unopened pocket number in your Cargo Cultist Shorts that will give
 * the largest number of `item`.
 * @param item Item to look for
 * @return Pocket number (integer between 1 and 666, inclusive), or 0 if no
 *    available pockets contain the `item`
 */
export function availablePocket(item: Item): number;

/**
 * Returns an unopened pocket number in your Cargo Cultist Shorts that will give
 * the most substats for the `stat`.
 * @param stat Stat to look for
 * @return Pocket number (integer between 1 and 666, inclusive), or 0 if no
 *    available pockets give the `stat`
 */
export function availablePocket(stat: Stat): number;

export function effectPockets(): {[key: number]: boolean};
export function itemPockets(): {[key: number]: boolean};
export function jokePockets(): {[key: number]: boolean};
export function meatPockets(): {[key: number]: number};
export function monsterPockets(): {[key: number]: boolean};

export function pickPocket(arg: number): boolean;
export function pickPocket(arg: Monster): boolean;
export function pickPocket(arg: Effect): {[effect: string]: number};
export function pickPocket(arg: Item): {[item: string]: number};
export function pickPocket(arg: Stat): {[stat: string]: number};

export function pickedPockets(): {[key: number]: boolean};
export function pickedScraps(): {[key: number]: boolean};

export function pocketEffects(pocket: number): {[effect: string]: number};
export function pocketItems(pocket: number): {[item: string]: number};
export function pocketJoke(pocket: number): string;
export function pocketMeat(pocket: number): {[key: number]: string};
export function pocketMonster(pocket: number): Monster;
export function pocketPoem(pocket: number): {[key: number]: string};
export function pocketScrap(pocket: number): {[key: number]: string};
export function pocketStats(pocket: number): {[stat: string]: number};

export function poemPockets(): {[key: number]: number};

export function potentialPockets(arg: Monster): {[key: number]: number};
export function potentialPockets(arg: Effect): {[key: number]: number};
export function potentialPockets(arg: Item): {[key: number]: number};
export function potentialPockets(arg: Stat): {[key: number]: number};

export function restorationPockets(): {[key: number]: boolean};
export function scrapPockets(): {[key: number]: number};
export function statsPockets(): {[key: number]: boolean};
