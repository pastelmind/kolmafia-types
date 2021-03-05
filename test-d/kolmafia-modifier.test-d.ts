/**
 * @file Type tests for modifier-related functions.
 */

import {expectType} from 'tsd';
import {
  booleanModifier,
  classModifier,
  effectModifier,
  numericModifier,
  skillModifier,
  statModifier,
  stringModifier,
} from '../src';

expectType<boolean>(booleanModifier('foo'));
expectType<boolean>(booleanModifier('foo', 'bar'));
expectType<boolean>(booleanModifier(Item.get('foo'), 'bar'));
expectType<boolean>(booleanModifier(Effect.get('foo'), 'bar'));

expectType<boolean>(booleanModifier('foo'));
expectType<boolean>(booleanModifier('foo', 'bar'));
expectType<boolean>(booleanModifier(Item.get('foo'), 'bar'));
expectType<boolean>(booleanModifier(Effect.get('foo'), 'bar'));

expectType<Class>(classModifier('foo', 'bar'));
expectType<Class>(classModifier(Item.get('foo'), 'bar'));

expectType<Effect>(effectModifier('foo', 'bar'));
expectType<Effect>(effectModifier(Item.get('foo'), 'bar'));

expectType<number>(numericModifier('foo'));
expectType<number>(numericModifier('foo', 'bar'));
expectType<number>(numericModifier(Item.get('foo'), 'bar'));
expectType<number>(numericModifier(Effect.get('foo'), 'bar'));
expectType<number>(numericModifier(Skill.get('foo'), 'bar'));
expectType<number>(
  numericModifier(Familiar.get('foo'), 'bar', 10, Item.get('baz'))
);

expectType<Skill>(skillModifier('foo', 'bar'));
expectType<Skill>(skillModifier(Item.get('foo'), 'bar'));

expectType<Stat>(statModifier(Effect.get('foo'), 'bar'));

expectType<string>(stringModifier('foo'));
expectType<string>(stringModifier('foo', 'bar'));
