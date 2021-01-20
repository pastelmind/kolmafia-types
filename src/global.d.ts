/**
 * @file Type definitions for global identifiers in KoLmafia's JavaScript
 * runtime environment.
 */

// Dummy export statement needed to make TypeScript treat this as an external
// module
export {};

// These type definitions are derived from kolmafia-js v0.0.3, written by Samuel
// Gaus (@gausie). kolmafia-js provides type definitions generated from
// KoLmafia's source code. Because kolmafia-js does not come with a license as
// of writing, I post none here.

declare abstract class MafiaClass {
  static get<T>(name: string): T;
  static get<T>(names: string[]): T[];
  static all<T>(): T[];
}

declare global {
  class Bounty extends MafiaClass {
    static get<T = Bounty>(name: string): T;
    static get<T = Bounty>(names: string[]): T[];
    static all<T = Bounty>(): T[];
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

  class Class extends MafiaClass {
    static get<T = Class>(name: string): T;
    static get<T = Class>(names: string[]): T[];
    static all<T = Class>(): T[];
    /** Primestat */
    readonly primestat: Stat;
  }

  class Coinmaster extends MafiaClass {
    static get<T = Coinmaster>(name: string): T;
    static get<T = Coinmaster>(names: string[]): T[];
    static all<T = Coinmaster>(): T[];
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

  class Effect extends MafiaClass {
    static get<T = Effect>(name: string): T;
    static get<T = Effect>(names: string[]): T[];
    static all<T = Effect>(): T[];
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

  class Element extends MafiaClass {
    static get<T = Element>(name: string): T;
    static get<T = Element>(names: string[]): T[];
    static all<T = Element>(): T[];
    /** Image */
    readonly image: string;
  }

  class Familiar extends MafiaClass {
    static get<T = Familiar>(name: string): T;
    static get<T = Familiar>(names: string[]): T[];
    static all<T = Familiar>(): T[];
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

  class Item extends MafiaClass {
    static get<T = Item>(name: string): T;
    static get<T = Item>(names: string[]): T[];
    static all<T = Item>(): T[];
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
    /** Which Coinmaster sells this Item, if any. */
    readonly seller: Coinmaster;
    /** Which Coinmaster buys this Item, if any. */
    readonly buyer: Coinmaster;
    /** The length of this Item's display name. */
    readonly nameLength: number;
    /** The noob Skill granted by absorbing this Item. */
    readonly noobSkill: Skill;
  }

  class Location extends MafiaClass {
    static get<T = Location>(name: string): T;
    static get<T = Location>(names: string[]): T[];
    static all<T = Location>(): T[];
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

  class Monster extends MafiaClass {
    static get<T = Monster>(name: string): T;
    static get<T = Monster>(names: string[]): T[];
    static all<T = Monster>(): T[];
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

  class Phylum extends MafiaClass {
    static get<T = Phylum>(name: string): T;
    static get<T = Phylum>(names: string[]): T[];
    static all<T = Phylum>(): T[];
    /** Image */
    readonly image: string;
  }

  class Servant extends MafiaClass {
    static get<T = Servant>(name: string): T;
    static get<T = Servant>(names: string[]): T[];
    static all<T = Servant>(): T[];
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

  class Skill extends MafiaClass {
    static get<T = Skill>(name: string): T;
    static get<T = Skill>(names: string[]): T[];
    static all<T = Skill>(): T[];
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

  class Thrall extends MafiaClass {
    static get<T = Thrall>(name: string): T;
    static get<T = Thrall>(names: string[]): T[];
    static all<T = Thrall>(): T[];
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

  class Vykea extends MafiaClass {
    static get<T = Vykea>(name: string): T;
    static get<T = Vykea>(names: string[]): T[];
    static all<T = Vykea>(): T[];
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

  class Slot extends MafiaClass {
    static get<T = Slot>(name: string): T;
    static get<T = Slot>(names: string[]): T[];
    static all<T = Slot>(): T[];
  }

  class Stat extends MafiaClass {
    static get<T = Stat>(name: string): T;
    static get<T = Stat>(names: string[]): T[];
    static all<T = Stat>(): T[];
  }
}
