/**
 * @file Type definition for EatDrink, made by dj_d.
 *
 * - ASH script name: EatDrink
 * - ASH script version: 3.2
 * - ASH script authors: dj_d
 *
 * Links:
 *  - ASH script forum thread: https://kolmafia.us/threads/eatdrink-ash-optimize-your-daily-diet-and-see-how-your-old-diet-stacks-up.1519/
 */

/** Helper type for distinguishing `int` and `float` types used by ASH */
type Integer = number;
/** Helper type for distinguishing `int` and `float` types used by ASH */
type Float = number;

/**
 * Fills up your organs to maximize adventures and stats.
 *
 * This uses the following settings:
 *
 * - KoLmafia properties: `valueOfAdventure`, `autoBuyPriceLimit` (and more...)
 * - ZLib variables:
 *    - `eatdrink_accurateMake`
 *    - `eatdrink_budget`
 *    - `eatdrink_costOfPull`
 *    - `eatdrink_piePriority`
 *    - `eatdrink_priceFlexibility`
 *    - `eatdrink_priceOfNontradeables`
 *    - `eatdrink_priceOfQuestItems`
 *    - `eatdrink_priceOfUnknowns`
 *    - `eatdrink_simConsume`
 *    - `eatdrink_simLevel`
 *    - `eatdrink_simRonin`
 *    - `eatdrink_suppressOverdrink`
 *    - `eatdrink_valueOfNonPrimeStat`
 *    - `eatdrink_valueOfPrimeStat`
 *    - (and more...)
 * @param foodMax Amount of Fullness to reach
 * @param drinkMax Amount of Drunkenness to reach
 * @param spleenMax Amount of Spleen to reach
 * @param overdrink Whether to overdrink.
 *    If `drinkMax` is less than your maximum Drunkenness, this must be `false`;
 *    otherwise, the script will abort immediately.
 * @return Net number of adventures gained
 */
export function eatdrink(
  foodMax: Integer,
  drinkMax: Integer,
  spleenMax: Integer,
  overdrink: boolean
): Integer;

/**
 * Fills up your organs to maximize adventures and stats.
 *
 * This uses the following settings:
 *
 * - KoLmafia properties: `autoBuyPriceLimit` (and more...)
 * - ZLib variables:
 *    - `eatdrink_accurateMake`
 *    - `eatdrink_budget`
 *    - `eatdrink_piePriority`
 *    - `eatdrink_priceFlexibility`
 *    - `eatdrink_priceOfNontradeables`
 *    - `eatdrink_priceOfQuestItems`
 *    - `eatdrink_priceOfUnknowns`
 *    - `eatdrink_simLevel`
 *    - `eatdrink_simRonin`
 *    - `eatdrink_suppressOverdrink`
 *    - (and more...)
 *
 * NOTE: Any KoLmafia properties and ZLib variables "overridden" by this
 * function affects all future calls to `eatdrink()` for the remainder of the
 * current script instance.
 * @param foodMax Amount of Fullness to reach
 * @param drinkMax Amount of Drunkenness to reach
 * @param spleenMax Amount of Spleen to reach
 * @param overdrink Whether to overdrink.
 *    If `drinkMax` is less than your maximum Drunkenness, this must be `false`;
 *    otherwise, the script will abort immediately.
 * @param advmeat Value of an adventure in meat.
 *    This overrides your `valueOfAdventure` KoLmafia property.
 * @param primemeat Value of a substat for your mainstat in meat.
 *    This overrides your `eatdrink_valueOfPrimeStat` ZLib variable.
 * @param offmeat Value of a substat for your offstat(s) in meat.
 *    This overrides your `eatdrink_valueOfNonPrimeStat` ZLib variable.
 * @param pullmeat Value of a item pull from Hagnk's if you are in Ronin.
 *    This overrides your `eatdrink_costOfPull` ZLib variable.
 * @param sim Whether to display a simulation only, or actually consume items.
 *    This overrides your `eatdrink_simConsume` ZLib variable.
 */
export function eatdrink(
  foodMax: Integer,
  drinkMax: Integer,
  spleenMax: Integer,
  overdrink: boolean,
  advmeat: Integer,
  primemeat: Integer,
  offmeat: Integer,
  pullmeat: Integer,
  sim: boolean
): void;

/**
 * Fills up your organs to maximize adventures and stats.
 *
 * This uses the following settings:
 *
 * - KoLmafia properties: `autoBuyPriceLimit` (and more...)
 * - ZLib variables: Any ZLib variable not overridden by the parameters
 *
 * NOTE: Any KoLmafia properties and ZLib variables "overridden" by this
 * function affects all future calls to `eatdrink()` for the remainder of the
 * current script instance.
 * @param foodMax Amount of Fullness to reach
 * @param drinkMax Amount of Drunkenness to reach
 * @param spleenMax Amount of Spleen to reach
 * @param overdrink Whether to overdrink.
 *    If `drinkMax` is less than your maximum Drunkenness, this must be `false`;
 *    otherwise, the script will abort immediately.
 * @param sim_consume_p Whether to display a simulation only, or actually
 *    consume items.
 *    This overrides your `eatdrink_simConsume` ZLib variable.
 * @param supress_overdrink_p Whether to suppress the warning popup when
 *    overdrinking.
 *    This overrides your `eatdrink_suppressOverdrink` ZLib variable.
 * @param accurate_p Whether to eliminate consumables for which you do not have
 *    ingredients.
 *    This overrides your `eatdrink_accurateMake` ZLib variable.
 * @param budget_p Prevents you from spending too much meat buying items.
 *    This is affected by `price_flexibility_p`.
 *    This overrides your `eatdrink_budget` ZLib variable.
 * @param price_flexibility_p Flexibility parameter that accounts for items that
 *    cost more to create than what is estimated.
 *    This overrides your `eatdrink_priceFlexibility` ZLib variable.
 * @param consider_cost_when_owned_p Whether to consider the cost of consumables
 *    that you already own.
 *    This overrides your `eatdrink_considerCostWhenOwned` variable.
 * @param cost_of_pull_p Value of a item pull from Hagnk's if you are in
 *    Ronin.
 *    This overrides your `eatdrink_costOfPull` ZLib variable.
 * @param value_of_adventure_p Value of an adventure in meat.
 *    This overrides your `valueOfAdventure` KoLmafia property.
 * @param value_of_prime_stat_p Value of a substat for your mainstat in meat.
 *    This overrides your `eatdrink_valueOfPrimeStat` ZLib variable.
 * @param value_of_nonprime_stat_p Value of a substat for your offstat(s) in
 *    meat.
 *    This overrides your `eatdrink_valueOfNonPrimeStat` ZLib variable.
 * @param pie_priority_p Whether to prioritize eating a Boris's / Jarlsberg's /
 *    Sneaky Pete's key lime pie if you don't have the corresponding key.
 *    This overrides your `eatdrink_piePriority` ZLib variable.
 * @param price_of_nontradeables_p Value of an untradable, non-quest item in
 *    meat.
 *    This overrides your `eatdrink_priceOfNontradeables` ZLib variable.
 * @param price_of_unknowns_p Value of items whose value cannot be computed for
 *    whatever reason.
 *    This overrides your `eatdrink_priceOfUnknowns` ZLib variable.
 * @param price_of_questitems_p Value of a quest item in meat.
 *    This overrides your `eatdrink_priceOfQuestItems` ZLib variable.
 * @param sim_ronin_p Whether to simulate that you are in Ronin for the purposes
 *    of selecting optimal consumable(s).
 *    This overrides your `eatdrink_simRonin` ZLib variable.
 * @param sim_level_p Character level to use for planning consumption. If this
 *    value is `0`, EatDrink will use your actual character level instead.
 *    This overrides your `eatdrink_simLevel` ZLib variable.
 */
export function eatdrink(
  foodMax: Integer,
  drinkMax: Integer,
  spleenMax: Integer,
  overdrink: boolean,
  sim_consume_p: boolean,
  supress_overdrink_p: boolean,
  accurate_p: boolean,
  budget_p: Integer,
  price_flexibility_p: Float,
  consider_cost_when_owned_p: boolean,
  cost_of_pull_p: Integer,
  value_of_adventure_p: Integer,
  value_of_prime_stat_p: Integer,
  value_of_nonprime_stat_p: Integer,
  pie_priority_p: boolean,
  price_of_nontradeables_p: Integer,
  price_of_unknowns_p: Integer,
  price_of_questitems_p: Integer,
  sim_ronin_p: boolean,
  sim_level_p: Integer
): void;
