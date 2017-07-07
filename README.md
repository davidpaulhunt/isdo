# isdo
A simple, basic, and robust set of utilities for javascript - inspired by, but not copied from, lodash.

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

# Usage

## Table of Contents

### [is](#is)

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
