/**
 * @file Type tests for global.d.ts.
 */

import {expectError, expectType} from 'tsd';
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

expectType<Class>(Class.get('foo'));
expectType<Class[]>(Class.get(['foo', 'bar']));
expectType<Class[]>(Class.all());

expectError(Class.get());
expectError(Class.get(undefined));
expectError(Class.get(null));
expectError(Class.get(/regex/));
expectError(Class.get(Symbol('foo')));
expectError(Class.get({}));

expectType<Coinmaster>(Coinmaster.get('foo'));
expectType<Coinmaster[]>(Coinmaster.get(['foo', 'bar']));
expectType<Coinmaster[]>(Coinmaster.all());

expectError(Coinmaster.get());
expectError(Coinmaster.get(undefined));
expectError(Coinmaster.get(null));
expectError(Coinmaster.get(/regex/));
expectError(Coinmaster.get(Symbol('foo')));
expectError(Coinmaster.get({}));

expectType<Effect>(Effect.get('foo'));
expectType<Effect[]>(Effect.get(['foo', 'bar']));
expectType<Effect[]>(Effect.all());

expectError(Effect.get());
expectError(Effect.get(undefined));
expectError(Effect.get(null));
expectError(Effect.get(/regex/));
expectError(Effect.get(Symbol('foo')));
expectError(Effect.get({}));

expectType<Element>(Element.get('foo'));
expectType<Element[]>(Element.get(['foo', 'bar']));
expectType<Element[]>(Element.all());

expectError(Element.get());
expectError(Element.get(undefined));
expectError(Element.get(null));
expectError(Element.get(/regex/));
expectError(Element.get(Symbol('foo')));
expectError(Element.get({}));

expectType<Familiar>(Familiar.get('foo'));
expectType<Familiar[]>(Familiar.get(['foo', 'bar']));
expectType<Familiar[]>(Familiar.all());

expectError(Familiar.get());
expectError(Familiar.get(undefined));
expectError(Familiar.get(null));
expectError(Familiar.get(/regex/));
expectError(Familiar.get(Symbol('foo')));
expectError(Familiar.get({}));

expectType<Item>(Item.get('foo'));
expectType<Item[]>(Item.get(['foo', 'bar']));
expectType<Item[]>(Item.all());

expectError(Item.get());
expectError(Item.get(undefined));
expectError(Item.get(null));
expectError(Item.get(/regex/));
expectError(Item.get(Symbol('foo')));
expectError(Item.get({}));

expectType<Location>(Location.get('foo'));
expectType<Location[]>(Location.get(['foo', 'bar']));
expectType<Location[]>(Location.all());

expectError(Location.get());
expectError(Location.get(undefined));
expectError(Location.get(null));
expectError(Location.get(/regex/));
expectError(Location.get(Symbol('foo')));
expectError(Location.get({}));

expectType<Monster>(Monster.get('foo'));
expectType<Monster[]>(Monster.get(['foo', 'bar']));
expectType<Monster[]>(Monster.all());

expectError(Monster.get());
expectError(Monster.get(undefined));
expectError(Monster.get(null));
expectError(Monster.get(/regex/));
expectError(Monster.get(Symbol('foo')));
expectError(Monster.get({}));

expectType<Phylum>(Phylum.get('foo'));
expectType<Phylum[]>(Phylum.get(['foo', 'bar']));
expectType<Phylum[]>(Phylum.all());

expectError(Phylum.get());
expectError(Phylum.get(undefined));
expectError(Phylum.get(null));
expectError(Phylum.get(/regex/));
expectError(Phylum.get(Symbol('foo')));
expectError(Phylum.get({}));

expectType<Servant>(Servant.get('foo'));
expectType<Servant[]>(Servant.get(['foo', 'bar']));
expectType<Servant[]>(Servant.all());

expectError(Servant.get());
expectError(Servant.get(undefined));
expectError(Servant.get(null));
expectError(Servant.get(/regex/));
expectError(Servant.get(Symbol('foo')));
expectError(Servant.get({}));

expectType<Skill>(Skill.get('foo'));
expectType<Skill[]>(Skill.get(['foo', 'bar']));
expectType<Skill[]>(Skill.all());

expectError(Skill.get());
expectError(Skill.get(undefined));
expectError(Skill.get(null));
expectError(Skill.get(/regex/));
expectError(Skill.get(Symbol('foo')));
expectError(Skill.get({}));

expectType<Slot>(Slot.get('foo'));
expectType<Slot[]>(Slot.get(['foo', 'bar']));
expectType<Slot[]>(Slot.all());

expectError(Slot.get());
expectError(Slot.get(undefined));
expectError(Slot.get(null));
expectError(Slot.get(/regex/));
expectError(Slot.get(Symbol('foo')));
expectError(Slot.get({}));

expectType<Stat>(Stat.get('foo'));
expectType<Stat[]>(Stat.get(['foo', 'bar']));
expectType<Stat[]>(Stat.all());

expectError(Stat.get());
expectError(Stat.get(undefined));
expectError(Stat.get(null));
expectError(Stat.get(/regex/));
expectError(Stat.get(Symbol('foo')));
expectError(Stat.get({}));

expectType<Thrall>(Thrall.get('foo'));
expectType<Thrall[]>(Thrall.get(['foo', 'bar']));
expectType<Thrall[]>(Thrall.all());

expectError(Thrall.get());
expectError(Thrall.get(undefined));
expectError(Thrall.get(null));
expectError(Thrall.get(/regex/));
expectError(Thrall.get(Symbol('foo')));
expectError(Thrall.get({}));

expectType<Vykea>(Vykea.get('foo'));
expectType<Vykea[]>(Vykea.get(['foo', 'bar']));
expectType<Vykea[]>(Vykea.all());

expectError(Vykea.get());
expectError(Vykea.get(undefined));
expectError(Vykea.get(null));
expectError(Vykea.get(/regex/));
expectError(Vykea.get(Symbol('foo')));
expectError(Vykea.get({}));
