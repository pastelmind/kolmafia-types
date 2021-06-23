/**
 * @file Type tests for zlib.ash.d.ts.
 */

import {expectError, expectType} from 'tsd';
import {bestFam, obtain, rnum, vprint} from '../contrib/zlib.ash';

expectType<Familiar>(bestFam('combat'));
expectError(bestFam('asdf'));

expectType<boolean>(obtain(1, 'spider web', Location.get('foo')));
expectType<boolean>(obtain(1, 'spider web', Location.get('foo'), 'macro;'));

expectType<string>(rnum(0));
expectType<string>(rnum(1.5));
expectType<string>(rnum(123.45, 10));

expectType<never>(vprint('abort the script', 0));
expectType<boolean>(vprint('print stuff', 5));
expectType<boolean>(vprint('print stuff', -2));

expectType<never>(vprint('abort the script', 'red', 0));
expectType<boolean>(vprint('print stuff', '#ff0000', 5));
expectType<boolean>(vprint('print stuff', '#00ffff', -2));
