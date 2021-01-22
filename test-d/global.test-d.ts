/**
 * @file Type tests for global.d.ts.
 */

import {
  expectDeprecated,
  expectError,
  expectNotDeprecated,
  expectType,
} from 'tsd';
import '../src';

expectType<Bounty>(Bounty.get('foo'));
expectType<Bounty[]>(Bounty.get(['foo', 'bar']));
expectType<Bounty[]>(Bounty.all());

expectError(Bounty.get());
expectError(Bounty.get(undefined));
expectError(Bounty.get(null));
expectError(Bounty.get(/regex/));
expectError(Bounty.get(Symbol('foo')));
expectError(Bounty.get({}));

expectType<0>(Bounty.get('asdf').valueOf());
expectDeprecated(Bounty.get('asdf').valueOf);

expectType<Class>(Class.get('foo'));
expectType<Class[]>(Class.get(['foo', 'bar']));
expectType<Class[]>(Class.all());

expectError(Class.get());
expectError(Class.get(undefined));
expectError(Class.get(null));
expectError(Class.get(/regex/));
expectError(Class.get(Symbol('foo')));
expectError(Class.get({}));

expectType<number>(Class.get('asdf').valueOf());
expectNotDeprecated(Class.get('asdf').valueOf);

expectType<Coinmaster>(Coinmaster.get('foo'));
expectType<Coinmaster[]>(Coinmaster.get(['foo', 'bar']));
expectType<Coinmaster[]>(Coinmaster.all());

expectError(Coinmaster.get());
expectError(Coinmaster.get(undefined));
expectError(Coinmaster.get(null));
expectError(Coinmaster.get(/regex/));
expectError(Coinmaster.get(Symbol('foo')));
expectError(Coinmaster.get({}));

expectType<0>(Coinmaster.get('asdf').valueOf());
expectDeprecated(Coinmaster.get('asdf').valueOf);

expectType<Effect>(Effect.get('foo'));
expectType<Effect>(Effect.get(5));
expectType<Effect[]>(Effect.get(['foo', 'bar', 123]));
expectType<Effect[]>(Effect.all());

expectError(Effect.get());
expectError(Effect.get(undefined));
expectError(Effect.get(null));
expectError(Effect.get(/regex/));
expectError(Effect.get(Symbol('foo')));
expectError(Effect.get({}));

expectType<number>(Effect.get('asdf').valueOf());
expectNotDeprecated(Effect.get('asdf').valueOf);

expectType<Element>(Element.get('foo'));
expectType<Element[]>(Element.get(['foo', 'bar']));
expectType<Element[]>(Element.all());

expectError(Element.get());
expectError(Element.get(undefined));
expectError(Element.get(null));
expectError(Element.get(/regex/));
expectError(Element.get(Symbol('foo')));
expectError(Element.get({}));

expectType<0>(Element.get('asdf').valueOf());
expectDeprecated(Element.get('asdf').valueOf);

expectType<Familiar>(Familiar.get('foo'));
expectType<Familiar>(Familiar.get(5));
expectType<Familiar[]>(Familiar.get(['foo', 'bar', 123]));
expectType<Familiar[]>(Familiar.all());

expectError(Familiar.get());
expectError(Familiar.get(undefined));
expectError(Familiar.get(null));
expectError(Familiar.get(/regex/));
expectError(Familiar.get(Symbol('foo')));
expectError(Familiar.get({}));

expectType<number>(Familiar.get('asdf').valueOf());
expectNotDeprecated(Familiar.get('asdf').valueOf);

expectType<Item>(Item.get('foo'));
expectType<Item>(Item.get(5));
expectType<Item[]>(Item.get(['foo', 'bar', 123]));
expectType<Item[]>(Item.all());

expectError(Item.get());
expectError(Item.get(undefined));
expectError(Item.get(null));
expectError(Item.get(/regex/));
expectError(Item.get(Symbol('foo')));
expectError(Item.get({}));

expectType<number>(Item.get('asdf').valueOf());
expectNotDeprecated(Item.get('asdf').valueOf);

expectType<Location>(Location.get('foo'));
expectType<Location[]>(Location.get(['foo', 'bar']));
expectType<Location[]>(Location.all());

expectError(Location.get());
expectError(Location.get(undefined));
expectError(Location.get(null));
expectError(Location.get(/regex/));
expectError(Location.get(Symbol('foo')));
expectError(Location.get({}));

expectType<0>(Location.get('asdf').valueOf());
expectDeprecated(Location.get('asdf').valueOf);

expectType<Monster>(Monster.get('foo'));
expectType<Monster>(Monster.get(5));
expectType<Monster[]>(Monster.get(['foo', 'bar', 123]));
expectType<Monster[]>(Monster.all());

expectError(Monster.get());
expectError(Monster.get(undefined));
expectError(Monster.get(null));
expectError(Monster.get(/regex/));
expectError(Monster.get(Symbol('foo')));
expectError(Monster.get({}));

expectType<number>(Monster.get('asdf').valueOf());
expectNotDeprecated(Monster.get('asdf').valueOf);

expectType<Phylum>(Phylum.get('foo'));
expectType<Phylum[]>(Phylum.get(['foo', 'bar']));
expectType<Phylum[]>(Phylum.all());

expectError(Phylum.get());
expectError(Phylum.get(undefined));
expectError(Phylum.get(null));
expectError(Phylum.get(/regex/));
expectError(Phylum.get(Symbol('foo')));
expectError(Phylum.get({}));

expectType<0>(Phylum.get('asdf').valueOf());
expectDeprecated(Phylum.get('asdf').valueOf);

expectType<Servant>(Servant.get('foo'));
expectType<Servant>(Servant.get(5));
expectType<Servant[]>(Servant.get(['foo', 'bar', 123]));
expectType<Servant[]>(Servant.all());

expectError(Servant.get());
expectError(Servant.get(undefined));
expectError(Servant.get(null));
expectError(Servant.get(/regex/));
expectError(Servant.get(Symbol('foo')));
expectError(Servant.get({}));

expectType<number>(Servant.get('asdf').valueOf());
expectNotDeprecated(Servant.get('asdf').valueOf);

expectType<Skill>(Skill.get('foo'));
expectType<Skill>(Skill.get(5));
expectType<Skill[]>(Skill.get(['foo', 'bar', 123]));
expectType<Skill[]>(Skill.all());

expectError(Skill.get());
expectError(Skill.get(undefined));
expectError(Skill.get(null));
expectError(Skill.get(/regex/));
expectError(Skill.get(Symbol('foo')));
expectError(Skill.get({}));

expectType<number>(Skill.get('asdf').valueOf());
expectNotDeprecated(Skill.get('asdf').valueOf);

expectType<Slot>(Slot.get('foo'));
expectType<Slot[]>(Slot.get(['foo', 'bar']));
expectType<Slot[]>(Slot.all());

expectError(Slot.get());
expectError(Slot.get(undefined));
expectError(Slot.get(null));
expectError(Slot.get(/regex/));
expectError(Slot.get(Symbol('foo')));
expectError(Slot.get({}));

expectType<number>(Slot.get('asdf').valueOf());
expectNotDeprecated(Slot.get('asdf').valueOf);

expectType<Stat>(Stat.get('foo'));
expectType<Stat[]>(Stat.get(['foo', 'bar']));
expectType<Stat[]>(Stat.all());

expectError(Stat.get());
expectError(Stat.get(undefined));
expectError(Stat.get(null));
expectError(Stat.get(/regex/));
expectError(Stat.get(Symbol('foo')));
expectError(Stat.get({}));

expectType<0>(Stat.get('asdf').valueOf());
expectDeprecated(Stat.get('asdf').valueOf);

expectType<Thrall>(Thrall.get('foo'));
expectType<Thrall>(Thrall.get(5));
expectType<Thrall[]>(Thrall.get(['foo', 'bar', 123]));
expectType<Thrall[]>(Thrall.all());

expectError(Thrall.get());
expectError(Thrall.get(undefined));
expectError(Thrall.get(null));
expectError(Thrall.get(/regex/));
expectError(Thrall.get(Symbol('foo')));
expectError(Thrall.get({}));

expectType<number>(Thrall.get('asdf').valueOf());
expectNotDeprecated(Thrall.get('asdf').valueOf);

expectType<Vykea>(Vykea.get('foo'));
expectType<Vykea[]>(Vykea.get(['foo', 'bar']));
expectType<Vykea[]>(Vykea.all());

expectError(Vykea.get());
expectError(Vykea.get(undefined));
expectError(Vykea.get(null));
expectError(Vykea.get(/regex/));
expectError(Vykea.get(Symbol('foo')));
expectError(Vykea.get({}));

expectType<number>(Vykea.get('asdf').valueOf());
expectNotDeprecated(Vykea.get('asdf').valueOf);
