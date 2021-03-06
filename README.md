# isdo
A simple, basic, and robust set of utilities for javascript - inspired by, but not copied from, lodash.

## Table of Contents

1. [Installation](#installation)
1. [Examples](#examples)
1. [Usage](#usage)
1. [Roadmap](#roadmap)

## Installation
`$ npm i -S isdo`

## Examples
```js
const { is } = require('isdo');

let foo;
is.defined(foo); // => false
is.missing(foo); // => true

foo = null;
is.defined(foo) // => true
is.missing(foo) // => true

const arry = [];
is.array(arry); // => true
is.empty(arry); // => true

arry.push(1);
is.empty(arry); // => false
```

## Usage

### [is](#is-1)

#### Extending is

You can add your own useful comparisons and checks by using [is.extend](#isextendsource).

*type comparisons*

- [.array](#isarraytarget)
- [.boolean](#isbooleantarget)
- [.float](#isfloattarget)
- [.function](#isfunctiontarget)
- [.integer](#isintegertarget)
- [.iterable](#isiterabletarget)
- [.map](#ismaptarget)
- [.null](#isnulltarget)
- [.number](#isnumbertarget)
- [.object](#isobjecttarget)
- [.set](#issettarget)
- [.string](#isstringtarget)
- [.undefined](#isundefinedtarget)

*presence checks*
- [.defined](#isdefinedtarget)
- [.missing](#ismissingtarget)
- [.notNull](#isnotnulltarget)
- [.present](#ismissingtarget)
- [.undefined](#isundefinedtarget)

*quality checks*
- [.blank](#isblanktarget)
- [.empty](#isemptytarget)

*truthy/falsey checks*
- [.true](#istruetarget)
- [.false](#isfalsetarget)

*extending with custom methods*
- [.extend](#isextendsource)

### [is.all](#isall-1)

*presence checks*
- [.defined](#isalldefinedtargets)
- [.missing](#isallmissingtargets)
- [.present](#isallmissingtargets)
- [.undefined](#isallundefinedtargets)

*truthy/falsey checks*
- [.true](#isalltruetargets)
- [.false](#isallfalsetargets)

### [is.any](#isany-1)

*presence checks*
- [.defined](#isanydefinedtargets)
- [.missing](#isanymissingtargets)
- [.present](#isanymissingtargets)
- [.undefined](#isanyundefinedtargets)

*truthy/falsey checks*
- [.true](#isanytruetargets)
- [.false](#isanyfalsetargets)

---

## is

### `is.array(target)`
**Returns**

`true` if target is an array, otherwise `false`.


### `is.boolean(target)`
**Returns**

`true` if target is a boolean, otherwise `false`.


### `is.float(target)`
**Returns**

`true` if target is a float, otherwise `false`.


### `is.function(target)`
**Returns**

`true` if target is a function, otherwise `false`.


### `is.integer(target)`
**Returns**

`true` if target is an integer, otherwise `false`.


### `is.iterable(target)`
**Returns**

`true` if target conforms to the iterable protocol, otherwise `false`.


### `is.map(target)`
**Returns**

`true` if target is a map, otherwise `false`.


### `is.number(target)`
**Returns**

`true` if target is a number (integer or float), otherwise `false`.


### `is.object(target)`
**Returns**

`true` if target is a plain object, otherwise `false`.


### `is.set(target)`
**Returns**

`true` if target is a set, otherwise `false`.


### `is.string(target)`
**Returns**

`true` if target is a string, otherwise `false`.


### `is.defined(target)`
**Returns**

`true` if target is NOT undefined, otherwise `false`.


### `is.missing(target)`
**Returns**

`true` if target is either undefined or null, otherwise `false`.


### `is.notNull(target)`
**Returns**

`true` if target is anything other than null, even undefined, otherwise `false`.


### `is.present(target)`
**Returns**

`true` if target is both defined and not null, otherwise `false`.


### `is.blank(target)`
**Returns**

`true` if target *string* is missing or has length < 1, otherwise `false`.


### `is.empty(target)`
**Returns**

`true` if target's length < 1, otherwise `false`.

*If target is an array or string, length = target.length, if target is a map or set, length = target.size, if target is an object, length = number of keys in target, otherwise length = 0.*


### `is.true(target)`
**Returns**

`true` if target is a string and is one of `["t", "true", "1"]`, or if target is a number and is > 0, or if target is a boolean and is `true`, otherwise returns `false`.

*Ignores capitalization.*


### `is.false(target)`
**Returns**

`true` if target is a string and is one of `["f", "false", "0"]`, or if target is a number and is <= 0, or if target is a boolean and is `false`, otherwise returns `false`.

*Ignores capitalization.*


### `is.extend(source)`

Transfers functions and nested functions from source to `is`.

**Example**
```javascript
const moment = require('moment');
const isdo = require('is');

const is = isdo.is.extend({
  date: obj => moment.isDate(obj),
});

is.date('foo'); // => false
is.date(new Date()); // => true
```


## is.all


### `is.all.defined(targets)`
**Returns**

`true` if all targets are defined, otherwise `false`.


### `is.all.undefined(targets)`
**Returns**

`true` if all targets are undefined, otherwise `false`.


### `is.all.present(targets)`
**Returns**

`true` if all targets are neither null nor undefined, otherwise `false`.


### `is.all.missing(targets)`
**Returns**

`true` if all targets are null or undefined, otherwise `false`.


### `is.all.true(targets)`
**Returns**

`true` if all targets are truthy, otherwise `false`.


### `is.all.false(targets)`
**Returns**

`true` if all targets are falsey, otherwise `false`.


## is.any


### `is.any.defined(targets)`
**Returns**

`true` if at least one of targets are defined, otherwise `false`.


### `is.any.undefined(targets)`
**Returns**

`true` if at least one of targets are undefined, otherwise `false`.


### `is.any.present(targets)`
**Returns**

`true` if at least one of targets are neither null nor undefined, otherwise `false`.


### `is.any.missing(targets)`
**Returns**

`true` if at least one of targets are null or undefined, otherwise `false`.


### `is.any.true(targets)`
**Returns**

`true` if at least one of targets are truthy, otherwise `false`.


### `is.any.false(targets)`
**Returns**

`true` if at least one of targets are falsey, otherwise `false`.


## Roadmap
- [x] `is` module for common comparisons and checks i/e undefined, null, object, etc
- [ ] `do` module for common functions i/e merge, get, etc
- [ ] Get feedback and iterate
