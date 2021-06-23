/**
 * @file Type tests for methematics functions.
 */

import {expectError, expectType} from 'tsd';
import {
  ceil,
  floor,
  logN,
  max,
  min,
  random,
  round,
  squareRoot,
  truncate,
} from '../src';

expectType<number>(ceil(5.5));
expectType<number>(floor(5.5));

expectType<number>(logN(5, 5.5));
expectType<number>(logN(5));
expectError(logN(5, undefined));

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

expectType<number>(random(10));
expectType<number>(round(1.5));
expectType<number>(squareRoot(100));
expectType<number>(truncate(1.5));
