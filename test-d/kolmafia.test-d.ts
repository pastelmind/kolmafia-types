/**
 * @file Type tests for kolmafia.d.ts.
 */

import {expectError, expectType} from 'tsd';
import {adv1, adventure, isDarkMode, max, min, runCombat} from '../src';

expectType<boolean>(isDarkMode());

expectType<number>(max(0));
expectType<number>(max(0, 1));
expectType<number>(max(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));

// @ts-expect-error In tsd 0.14.0, expectError() doesn't catch this error
max();
expectError(max('foo bar'));
expectError(max(null));
expectError(max(undefined));

expectType<number>(min(0));
expectType<number>(min(0, 1));
expectType<number>(min(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15));

// @ts-expect-error In tsd 0.14.0, expectError() doesn't catch this error
min();
expectError(min('foo bar'));
expectError(min(null));
expectError(min(undefined));

expectType<boolean>(adventure(Location.get('someplace'), 1));
expectType<boolean>(adventure(1, Location.get('someplace')));
expectType<boolean>(adventure(Location.get('someplace'), 1, 'combat filter'));
expectType<boolean>(adventure(1, Location.get('someplace'), 'combat filter'));
expectType<boolean>(
  adventure(
    Location.get('someplace'),
    1,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (round: number, monster: Monster, page: string) => 'macro'
  )
);
expectType<boolean>(
  adventure(
    1,
    Location.get('someplace'),
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (round: number, monster: Monster, page: string) => 'macro'
  )
);

expectType<boolean>(adv1(Location.get('foo'), -1, 'macro'));
expectType<boolean>(
  adv1(
    Location.get('foo'),
    -1,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (round: number, monster: Monster, page: string) => 'macro'
  )
);

expectType<string>(runCombat());
expectType<string>(runCombat('combat filter'));
expectType<string>(
  runCombat(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (round: number, monster: Monster, page: string) => 'macro'
  )
);
