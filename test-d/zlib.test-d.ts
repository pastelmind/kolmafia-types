/**
 * @file Type tests for zlib.ash.d.ts.
 */

import {expectType} from 'tsd';
import {rnum, vprint} from '../contrib/zlib.ash';

expectType<string>(rnum(0));
expectType<string>(rnum(1.5));
expectType<string>(rnum(123.45, 10));

expectType<never>(vprint('abort the script', 0));
expectType<boolean>(vprint('print stuff', 5));
expectType<boolean>(vprint('print stuff', -2));

expectType<never>(vprint('abort the script', 'red', 0));
expectType<boolean>(vprint('print stuff', '#ff0000', 5));
expectType<boolean>(vprint('print stuff', '#00ffff', -2));
