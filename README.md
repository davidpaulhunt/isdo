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
*type comparisons*
1. [.array](#isarraytarget)
1. [.float](#isfloattarget)
1. [.function](#isfunctiontarget)
1. [.integer](#isintegertarget)
1. [.iterable](#isiterabletarget)
1. [.map](#ismaptarget)
1. [.number](#isnumbertarget)
1. [.object](#isobjecttarget)
1. [.set](#issettarget)
1. [.string](#isstringtarget)

---

## is

### `is.array(target)`
**Returns**

`true` if target is an array, otherwise `false`.


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
