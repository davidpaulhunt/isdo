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
1. [.array](#is-array)
1. [.float](#is-float)
1. [.function](#is-function)
1. [.integer](#is-integer)
1. [.iterable](#is-iterable)
1. [.map](#is-map)
1. [.number](#is-number)
1. [.object](#is-object)
1. [.set](#is-set)
1. [.string](#is-string)

## is
### `is.array(target)`
**Returns**
`true` if target is an array, otherwise `false`.
### is.float

### is.function

### is.integer

### is.iterable

### is.map

### is.number

### is.object

### is.set

### is.string
