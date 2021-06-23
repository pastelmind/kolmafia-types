/**
 * @file Type tests for kolmafia.d.ts.
 */

import {expectType} from 'tsd';
import {adv1, adventure, isDarkMode, runCombat} from '../src';

expectType<boolean>(isDarkMode());

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

expectType<boolean>(adv1(Location.get('foo')));
expectType<boolean>(adv1(Location.get('foo'), -1));
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
