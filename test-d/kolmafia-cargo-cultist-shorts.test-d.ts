/**
 * @file Type tests for Cargo Cultist Shorts-related functions.
 */

import {expectType} from 'tsd';

import {
  availablePocket,
  effectPockets,
  itemPockets,
  jokePockets,
  meatPockets,
  monsterPockets,
  pickedPockets,
  pickedScraps,
  pickPocket,
  pocketEffects,
  pocketItems,
  pocketJoke,
  pocketMeat,
  pocketMonster,
  pocketPoem,
  pocketScrap,
  pocketStats,
  poemPockets,
  potentialPockets,
  restorationPockets,
  scrapPockets,
  statsPockets,
} from '../src';

expectType<number>(availablePocket(Monster.get('foo')));
expectType<number>(availablePocket(Effect.get('foo')));
expectType<number>(availablePocket(Item.get('foo')));
expectType<number>(availablePocket(Stat.get('foo')));

expectType<Record<number, true>>(effectPockets());
expectType<Record<number, boolean>>(itemPockets());
expectType<Record<number, boolean>>(jokePockets());
expectType<Record<number, number>>(meatPockets());
expectType<Record<number, boolean>>(monsterPockets());
expectType<Record<number, number>>(poemPockets());
expectType<Record<number, boolean>>(restorationPockets());
expectType<Record<number, number>>(scrapPockets());
expectType<Record<number, boolean>>(statsPockets());

expectType<Record<number, boolean>>(pickedPockets());
expectType<Record<number, boolean>>(pickedScraps());

expectType<boolean>(pickPocket(1234));
expectType<boolean>(pickPocket(Monster.get('foo')));
expectType<Record<string, number>>(pickPocket(Effect.get('foo')));
expectType<Record<string, number>>(pickPocket(Item.get('foo')));
expectType<Record<string, number>>(pickPocket(Stat.get('foo')));

expectType<Record<string, number>>(pocketEffects(123));
expectType<Record<string, number>>(pocketItems(123));
expectType<string>(pocketJoke(123));
expectType<Record<number, string>>(pocketMeat(123));
expectType<Monster>(pocketMonster(123));
expectType<Record<number, string>>(pocketPoem(123));
expectType<Record<number, string>>(pocketScrap(123));
expectType<Record<string, number>>(pocketStats(123));

expectType<Record<number, number>>(potentialPockets(Monster.get('foo')));
expectType<Record<number, number>>(potentialPockets(Effect.get('foo')));
expectType<Record<number, number>>(potentialPockets(Item.get('foo')));
expectType<Record<number, number>>(potentialPockets(Stat.get('foo')));
