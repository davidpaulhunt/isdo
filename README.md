# isdo
A simple, basic, and robust set of utilities for javascript - inspired by, but not copied from, lodash.

## Installation
`$ npm i -S isdo`

## Usage
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
