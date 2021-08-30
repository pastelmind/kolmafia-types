/**
 * @file Type definitions for global identifiers in KoLmafia's JavaScript
 * runtime environment.
 */

// Dummy export statement needed to make TypeScript treat this as an external
// module
export {};

// These type definitions are derived from kolmafia-js v0.0.3, written by Samuel
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

declare global {
  // KoLmafia built-in classes cannot be instanted; KoLmafia will abort the
  // JavaScript runtime.
  // As such, all constructors have been made private to prevent users from
  // attempting to instantiate them. This still allows the classes to be used in
  // `instanceof` checks.

  class Bounty {
    /** KoLmafia built-in classes cannot be instantiated directly. */
    private constructor();
    static get(name: string): Bounty;
    static get(names: string[]): Bounty[];
    static all(): Bounty[];
    /** Plural */
    readonly plural: string;
    /** Type */
    readonly type: string;
    /** Kol internal type */
    readonly kolInternalType: string;
    /** Number */
    readonly number: number;
    /** Image */
    readonly image: string;
    /** Monster */
    readonly monster: Monster;
    /** Location */
    readonly location: Location;
  }

  class Class {
    /** KoLmafia built-in classes cannot be instantiated directly. */
    private constructor();
    static get(name: string): Class;
    static get(names: string[]): Class[];
    static all(): Class[];
    /** Primestat */
    readonly primestat: Stat;
  }

  class Coinmaster {
    /** KoLmafia built-in classes cannot be instantiated directly. */
    private constructor();
    static get(name: string): Coinmaster;
    static get(names: string[]): Coinmaster[];
    static all(): Coinmaster[];
    /** Token */
    readonly token: string;
    /** Item */
    readonly item: Item;
    /** Property */
    readonly property: string;
    /** Available tokens */
    readonly availableTokens: number;
    /** Buys */
    readonly buys: boolean;
    /** Sells */
    readonly sells: boolean;
    /** Nickname */
    readonly nickname: string;
  }

  class Effect {
    /** KoLmafia built-in classes cannot be instantiated directly. */
    private constructor();
    static get(nameOrId: number | string): Effect;
    static get(namesAndIds: (number | string)[]): Effect[];
    static all(): Effect[];
    /** Name */
    readonly name: string;
    /** Default */
    readonly default: string;
    /** Quality */
    readonly quality: string;
    /** Attributes */
    readonly attributes: string;
    /** Note */
    readonly note: string;
    /** All */
    readonly all: {[source: string]: boolean};
    /** Image */
    readonly image: string;
    /** Descid */
    readonly descid: string;
    /** Candy tier */
    readonly candyTier: number;
  }

  class Element {
    /** KoLmafia built-in classes cannot be instantiated directly. */
    private constructor();
    static get(name: string): Element;
    static get(names: string[]): Element[];
    static all(): Element[];
    /** Image */
    readonly image: string;
  }

  class Familiar {
    /** KoLmafia built-in classes cannot be instantiated directly. */
    private constructor();
    static get(nameOrId: number | string): Familiar;
    static get(namesAndIds: (number | string)[]): Familiar[];
    static all(): Familiar[];
    /** Hatchling */
    readonly hatchling: Item;
    /** Image */
    readonly image: string;
    /** Name */
    readonly name: string;
    /** Experience */
    readonly experience: number;
    /** Charges */
    readonly charges: number;
    /** Drop name */
    readonly dropName: string;
    /** Drop item */
    readonly dropItem: Item;
    /** Drops today */
    readonly dropsToday: number;
    /** Drops limit */
    readonly dropsLimit: number;
    /** Fights today */
    readonly fightsToday: number;
    /** Fights limit */
    readonly fightsLimit: number;
    /** Combat */
    readonly combat: boolean;
    /** Physical damage */
    readonly physicalDamage: boolean;
    /** Elemental damage */
    readonly elementalDamage: boolean;
    /** Block */
    readonly block: boolean;
    /** Delevel */
    readonly delevel: boolean;
    /** Hp during combat */
    readonly hpDuringCombat: boolean;
    /** Mp during combat */
    readonly mpDuringCombat: boolean;
    /** Other action during combat */
    readonly otherActionDuringCombat: boolean;
    /** Hp after combat */
    readonly hpAfterCombat: boolean;
    /** Mp after combat */
    readonly mpAfterCombat: boolean;
    /** Other action after combat */
    readonly otherActionAfterCombat: boolean;
    /** Passive */
    readonly passive: boolean;
    /** Underwater */
    readonly underwater: boolean;
    /** Variable */
    readonly variable: boolean;
    /** Attributes */
    readonly attributes: string;
    /** Poke level */
    readonly pokeLevel: number;
    /** Poke level 2 power */
    readonly pokeLevel_2Power: number;
    /** Poke level 2 hp */
    readonly pokeLevel_2Hp: number;
    /** Poke level 3 power */
    readonly pokeLevel_3Power: number;
    /** Poke level 3 hp */
    readonly pokeLevel_3Hp: number;
    /** Poke level 4 power */
    readonly pokeLevel_4Power: number;
    /** Poke level 4 hp */
    readonly pokeLevel_4Hp: number;
    /** Poke move 1 */
    readonly pokeMove_1: string;
    /** Poke move 2 */
    readonly pokeMove_2: string;
    /** Poke move 3 */
    readonly pokeMove_3: string;
    /** Poke attribute */
    readonly pokeAttribute: string;
  }

  class Item {
    /** KoLmafia built-in classes cannot be instantiated directly. */
    private constructor();
    static get(nameOrId: number | string): Item;
    static get(namesAndIds: (number | string)[]): Item[];
    static all(): Item[];
    /** The name of this Item. */
    readonly name: string;
    /** The name of this Item as it appears in your current Two Crazy Random Summer run. If you are not in a TCRS run, the regular Item name is returned. */
    readonly tcrsName: string;
    /** The plural of this Item. If the official plural is not known, returns the name of this Item with an "s" appended. */
    readonly plural: string;
    /** The identifier used to see the description of this Item. */
    readonly descid: string;
    /** The filename of the image associated with this Item. */
    readonly image: string;
    /** The filename of the small image associated with this Item. For items with an image that is usually larger than 30x30, this is their 30x30 equivalent. For example, the images for "folders" from the "over-the-shoulder Folder Holder" will normally be 100x100 but this will return a 30x30 equivalent. */
    readonly smallimage: string;
    /** The level requirement for consuming or equipping this Item. */
    readonly levelreq: number;
    /** The quality of this Item if it is a consumable, or blank otherwise. Quality can be one of "decent", "crappy", "good", "awesome", "EPIC" or "". */
    readonly quality: string;
    /** The range of adventures gained from consuming this Item. The string will either contain the adventures for invariant gains, or a hyphen-separated minimum and maximum for variant gains. */
    readonly adventures: string;
    /** The range of muscle substats gained from consuming this Item. The string will either contain the substats for invariant gains, or a hyphen-separated minimum and maximum for variant gains. Note that substat gains can be negative. */
    readonly muscle: string;
    /** The range of mysticality substats gained from consuming this Item. The string will either contain the substats for invariant gains, or a hyphen-separated minimum and maximum for variant gains. Note that substat gains can be negative. */
    readonly mysticality: string;
    /** The range of moxie substats gained from consuming this Item. The string will either contain the substats for invariant gains, or a hyphen-separated minimum and maximum for variant gains. Note that substat gains can be negative. */
    readonly moxie: string;
    /** The stomach size of this Item. If this Item is not edible, returns 0. */
    readonly fullness: number;
    /** The liver size of this Item. If this Item is not drinkable, returns 0. */
    readonly inebriety: number;
    /** The spleen size of this Item. If this Item is not chewable, returns 0. */
    readonly spleen: number;
    /** The minimum HP restored by consuming this Item. */
    readonly minhp: number;
    /** The maximum HP restored by consuming this Item. */
    readonly maxhp: number;
    /** The minimum MP restored by consuming this Item. */
    readonly minmp: number;
    /** The maximum MP restored by consuming this Item. */
    readonly maxmp: number;
    /** The number of daily uses remaining for this Item. */
    readonly dailyusesleft: number;
    /** The notes that exist for this Item. Examples of (comma-separated) contents are:
     *
     * *   The name and duration of any effects granted by consumption, if applicable.
     * *   Items dropped when this Item is consumed, if applicable.
     * *   Tags relevant to game mechanics (such as "MARTINI", "BEER" and "SAUCY")
     * *   "Unspaded" */
    readonly notes: string;
    /** `true` if this Item is a quest item, else `false`. */
    readonly quest: boolean;
    /** `true` if this Item is a gift item, else `false`. */
    readonly gift: boolean;
    /** `true` if this Item is tradeable, else `false`. */
    readonly tradeable: boolean;
    /** `true` if this Item is discardable, else `false`. */
    readonly discardable: boolean;
    /** `true` if this Item usable in combat, else `false`. This returns `true` regardless of whether this Item is consumed when used in combat. */
    readonly combat: boolean;
    /** `true` if this Item is usable in combat and is not consumed when doing so, else `false`. */
    readonly combatReusable: boolean;
    /** `true` if this Item is usable, else `false`. This returns `true` regardless of whether this Item is consumed when used. */
    readonly usable: boolean;
    /** `true` if this Item is usable and is not consumed when doing so, else `false`. */
    readonly reusable: boolean;
    /** `true` if more than one of this Item can be used at once, else `false`. */
    readonly multi: boolean;
    /** `true` if this Item is a "fancy" ingredient, else `false`. */
    readonly fancy: boolean;
    /** `true` if this Item is a meatpasting ingredient, else `false`. */
    readonly pasteable: boolean;
    /** `true` if this Item is a meatsmithing ingredient, else `false`. */
    readonly smithable: boolean;
    /** `true` if this Item is a cooking ingredient, else `false`. */
    readonly cookable: boolean;
    /** `true` if this Item is a cocktailcrafting ingredient, else `false`. */
    readonly mixable: boolean;
    /** `true` if this Item is a candy, else `false`. */
    readonly candy: boolean;
    /** The candy type of this Item if it is a candy, or blank otherwise. Candy type can be one of "simple", "complex" or "unspaded". */
    readonly candyType: string;
    /** `true` if this Item is a chocolate, else `false`. */
    readonly chocolate: boolean;
    /**
     * Which Coinmaster sells this Item, if any.
     *
     * @version r20627 Prior to this version, attempting to access this field
     *    caused the JavaScript runtime to abort with an error.
     */
    readonly seller: Coinmaster;
    /**
     * Which Coinmaster buys this Item, if any.
     *
     * @version r20627 Prior to this version, attempting to access this field
     *    caused the JavaScript runtime to abort with an error.
     */
    readonly buyer: Coinmaster;
    /** The length of this Item's display name. */
    readonly nameLength: number;
    /** The noob Skill granted by absorbing this Item. */
    readonly noobSkill: Skill;
  }

  class Location {
    /** KoLmafia built-in classes cannot be instantiated directly. */
    private constructor();

    /**
     * Retrieves a location by name or its "snarfblat" number.
     *
     * The "snarfblat" is the number associated with the location's URL
     * (returned by `toUrl()`).
     * @param nameOrSnarfblat Location name (string) or snarfblat (number)
     * @return Matched Location object
     */
    static get(nameOrSnarfblat: number | string): Location;

    /**
     * Retrieves an array of locations by names and/or "snarfblat" numbers.
     *
     * The "snarfblat" is the number associated with the location's URL
     * (returned by `toUrl()`).
     * @param namesOrSnafblats Array of location names and snarfblats
     */
    static get(namesOrSnafblats: (number | string)[]): Location[];

    static all(): Location[];
    /** Nocombats */
    readonly nocombats: boolean;
    /** Combat percent */
    readonly combatPercent: number;
    /** Zone */
    readonly zone: string;
    /** Parent */
    readonly parent: string;
    /** Parentdesc */
    readonly parentdesc: string;
    /** Environment */
    readonly environment: string;
    /**
     * If in {@link https://kol.coldfront.net/thekolwiki/index.php/Wildfire Wildfire},
     * indicates the fire level in this location.
     * Otherwise, this is always 0.
     * @version r20830
     */
    readonly fireLevel: number;
    /** Bounty */
    readonly bounty: Bounty;
    /** Combat queue */
    readonly combatQueue: string;
    /** Noncombat queue */
    readonly noncombatQueue: string;
    /** Turns spent */
    readonly turnsSpent: number;
    /** Kisses */
    readonly kisses: number;
    /** Recommended stat */
    readonly recommendedStat: number;
    /** Water level */
    readonly waterLevel: number;
    /** Wanderers */
    readonly wanderers: boolean;
  }

  class Monster {
    /** KoLmafia built-in classes cannot be instantiated directly. */
    private constructor();
    static get(nameOrId: number | string): Monster;
    static get(namesAndIds: (number | string)[]): Monster[];
    static all(): Monster[];
    /** Name */
    readonly name: string;
    /** Id */
    readonly id: number;
    /** Base hp */
    readonly baseHp: number;
    /** Base attack */
    readonly baseAttack: number;
    /** Raw hp */
    readonly rawHp: number;
    /** Raw attack */
    readonly rawAttack: number;
    /** Raw defense */
    readonly rawDefense: number;
    /** Base defense */
    readonly baseDefense: number;
    /** Base initiative */
    readonly baseInitiative: number;
    /** Raw initiative */
    readonly rawInitiative: number;
    /** Attack element */
    readonly attackElement: Element;
    /** Defense element */
    readonly defenseElement: Element;
    /** Physical resistance */
    readonly physicalResistance: number;
    /** Min meat */
    readonly minMeat: number;
    /** Max meat */
    readonly maxMeat: number;
    /** Min sprinkles */
    readonly minSprinkles: number;
    /** Max sprinkles */
    readonly maxSprinkles: number;
    /** Base mainstat exp */
    readonly baseMainstatExp: number;
    /** Phylum */
    readonly phylum: Phylum;
    /** Poison */
    readonly poison: Effect;
    /** Boss */
    readonly boss: boolean;
    /** Copyable */
    readonly copyable: boolean;
    /** Image */
    readonly image: string;
    /** Images */
    readonly images: {[image: string]: boolean};
    /** Random modifiers */
    readonly randomModifiers: {[randomModifier: string]: boolean};
    /** Sub types */
    readonly subTypes: {[subType: string]: boolean};
    /** Manuel name */
    readonly manuelName: string;
    /** Wiki name */
    readonly wikiName: string;
    /** Attributes */
    readonly attributes: string;
  }

  class Phylum {
    /** KoLmafia built-in classes cannot be instantiated directly. */
    private constructor();
    static get(name: string): Phylum;
    static get(names: string[]): Phylum[];
    static all(): Phylum[];
    /** Image */
    readonly image: string;
  }

  class Servant {
    /** KoLmafia built-in classes cannot be instantiated directly. */
    private constructor();
    static get(nameOrId: number | string): Servant;
    static get(namesAndIds: (number | string)[]): Servant[];
    static all(): Servant[];
    /** Id */
    readonly id: number;
    /** Name */
    readonly name: string;
    /** Level */
    readonly level: number;
    /** Experience */
    readonly experience: number;
    /** Image */
    readonly image: string;
    /** Level1 ability */
    readonly level1Ability: string;
    /** Level7 ability */
    readonly level7Ability: string;
    /** Level14 ability */
    readonly level14Ability: string;
    /** Level21 ability */
    readonly level21Ability: string;
  }

  class Skill {
    /** KoLmafia built-in classes cannot be instantiated directly. */
    private constructor();
    static get(nameOrId: number | string): Skill;
    static get(namesAndIds: (number | string)[]): Skill[];
    static all(): Skill[];
    /** Name */
    readonly name: string;
    /** Type */
    readonly type: string;
    /** Level */
    readonly level: number;
    /** Image */
    readonly image: string;
    /** Traincost */
    readonly traincost: number;
    /** Class */
    readonly class: Class;
    /** Libram */
    readonly libram: boolean;
    /** Passive */
    readonly passive: boolean;
    /** Buff */
    readonly buff: boolean;
    /** Combat */
    readonly combat: boolean;
    /** Song */
    readonly song: boolean;
    /** Expression */
    readonly expression: boolean;
    /** Walk */
    readonly walk: boolean;
    /** Summon */
    readonly summon: boolean;
    /** Permable */
    readonly permable: boolean;
    /** Dailylimit */
    readonly dailylimit: number;
    /** Timescast */
    readonly timescast: number;
  }

  class Slot {
    /** KoLmafia built-in classes cannot be instantiated directly. */
    private constructor();
    static get(name: string): Slot;
    static get(names: string[]): Slot[];
    static all(): Slot[];
  }

  class Stat {
    /** KoLmafia built-in classes cannot be instantiated directly. */
    private constructor();
    static get(name: string): Stat;
    static get(names: string[]): Stat[];
    static all(): Stat[];
  }

  class Thrall {
    /** KoLmafia built-in classes cannot be instantiated directly. */
    private constructor();
    static get(nameOrId: number | string): Thrall;
    static get(namesAndIds: (number | string)[]): Thrall[];
    static all(): Thrall[];
    /** Id */
    readonly id: number;
    /** Name */
    readonly name: string;
    /** Level */
    readonly level: number;
    /** Image */
    readonly image: string;
    /** Tinyimage */
    readonly tinyimage: string;
    /** Skill */
    readonly skill: Skill;
    /** Current modifiers */
    readonly currentModifiers: string;
  }

  class Vykea {
    /** KoLmafia built-in classes cannot be instantiated directly. */
    private constructor();
    static get(name: string): Vykea;
    static get(names: string[]): Vykea[];
    static all(): Vykea[];
    /** Id */
    readonly id: number;
    /** Name */
    readonly name: string;
    /** Type */
    readonly type: string;
    /** Rune */
    readonly rune: Item;
    /** Level */
    readonly level: number;
    /** Image */
    readonly image: string;
    /** Modifiers */
    readonly modifiers: string;
    /** Attack element */
    readonly attackElement: Element;
  }

  // eslint-disable-next-line no-var
  var require: RhinoRequire;
  // eslint-disable-next-line no-var
  var module: RhinoModule;
}

interface RhinoRequire {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (id: string): any;
  main: RhinoModule | undefined;
}

interface RhinoModule {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  exports: any;
  id: string;
}
