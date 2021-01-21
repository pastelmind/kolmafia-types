/**
 * @file Type tests for kolmafia.d.ts.
 */

import {expectType} from 'tsd';
import {isDarkMode} from '../src';

expectType<boolean>(isDarkMode());
