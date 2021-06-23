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

expectType<number>(max(0, 1, 2));
expectType<number>(min(0, 1, 2));
expectType<number>(random(10));
expectType<number>(round(1.5));
expectType<number>(squareRoot(100));
expectType<number>(truncate(1.5));
