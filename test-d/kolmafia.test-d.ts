/**
 * @file Type tests for kolmafia.d.ts.
 */

import {expectError, expectType} from 'tsd';
import {isDarkMode, max, min} from '../src';

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
