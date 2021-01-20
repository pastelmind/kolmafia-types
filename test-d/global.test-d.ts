/**
 * @file Type tests for global.d.ts.
 */

import {expectError, expectType} from 'tsd';
import '../src';

expectType<Item>(Item.get('foo'));
expectType<Item[]>(Item.get(['foo', 'bar']));
expectType<Item[]>(Item.all());

expectError(Item.get());
expectError(Item.get(undefined));
expectError(Item.get(null));
