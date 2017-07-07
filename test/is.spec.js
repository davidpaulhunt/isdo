/* eslint-env node, mocha */

const { is } = require('../index');
const { expect } = require('chai');

describe('{ is }', () => {
  [
    'typeId',
    'base',
    'null',
    'notNull',
    'defined',
    'undefined',
    'missing',
    'present',

    'array',
    'float',
    'function',
    'integer',
    'iterable',
    'map',
    'number',
    'object',
    'set',
    'string',

    'blank',
    'empty',
  ].forEach((key) => {
    it(`should respond to the method ${key}`, () => {
      expect(is).to.respondTo(key, `is DOES NOT have the method ${key}`);
    });
  });

  describe('typeId()', () => {
    it('should return "[object Undefined]" when passed "Undefined"', () => {
      expect(is.typeId('Undefined')).to.equal('[object Undefined]');
    });
    it('should return "[object Null]" when passed "Null', () => {
      expect(is.typeId('Null')).to.equal('[object Null]');
    });
    it('should return "[object Object]" when passed Object', () => {
      expect(is.typeId('Object')).to.equal('[object Object]');
    });
  });

  describe('base()', () => {
    it('should return true when target is undefined', () => {
      let target;
      expect(is.base(target, 'Undefined')).to.equal(true);
    });
    it('should return true when target is null', () => {
      expect(is.base(null, 'Null')).to.equal(true);
    });
    it('should return false when target is {}', () => {
      expect(is.base({}, 'Null')).to.equal(false);
    });
  });

  describe('null()', () => {
    it('should return false when target is undefined', () => {
      let target;
      expect(is.null(target)).to.equal(false);
    });
    it('should return false when target is 1', () => {
      expect(is.null(1)).to.equal(false);
    });
    it('should return true when target is null', () => {
      expect(is.null(null)).to.equal(true);
    });
  });

  describe('notNull()', () => {
    it('should return true when target is undefined', () => {
      let target;
      expect(is.notNull(target)).to.equal(true);
    });
    it('should return true when target is 1', () => {
      expect(is.notNull(1)).to.equal(true);
    });
    it('should return false when target is null', () => {
      expect(is.notNull(null)).to.equal(false);
    });
  });

  describe('undefined()', () => {
    it('should return true when target is undefined', () => {
      let target;
      expect(is.undefined(target)).to.equal(true);
    });
    it('should return false when target is null', () => {
      expect(is.undefined(null)).to.equal(false);
    });
    it('should return false when target is 1', () => {
      expect(is.undefined(1)).to.equal(false);
    });
  });

  describe('defined()', () => {
    it('should return false when target is undefined', () => {
      let target;
      expect(is.defined(target)).to.equal(false);
    });
    it('should return true when target is null', () => {
      expect(is.defined(null)).to.equal(true);
    });
    it('should return true when target is 1', () => {
      expect(is.defined(1)).to.equal(true);
    });
  });

  describe('missing()', () => {
    it('should return true when target is undefined', () => {
      let target;
      expect(is.missing(target)).to.equal(true);
    });
    it('should return true when target is null', () => {
      expect(is.missing(null)).to.equal(true);
    });
    it('should return false when target is 1', () => {
      expect(is.missing(1)).to.equal(false);
    });
  });

  describe('present()', () => {
    it('should return false when target is undefined', () => {
      let target;
      expect(is.present(target)).to.equal(false);
    });
    it('should return false when target is null', () => {
      expect(is.present(null)).to.equal(false);
    });
    it('should return true when target is 1', () => {
      expect(is.present(1)).to.equal(true);
    });
  });

  describe('array()', () => {
    it('should return false when target is undefined', () => {
      let target;
      expect(is.array(target)).to.equal(false);
    });
    it('should return false when target is "hello"', () => {
      expect(is.array('hello')).to.equal(false);
    });
    it('should return true when target is [1,2,3]', () => {
      expect(is.array([1, 2, 3])).to.equal(true);
    });
  });

  describe('float()', () => {
    it('should return false when target is undefined', () => {
      let target;
      expect(is.float(target)).to.equal(false);
    });
    it('should return false when target is "hello"', () => {
      expect(is.float('hello')).to.equal(false);
    });
    it('should return false when target is [1,2,3]', () => {
      expect(is.float([1, 2, 3])).to.equal(false);
    });
    it('should return false when target is 100', () => {
      expect(is.float(100)).to.equal(false);
    });
    it('should return true when target is 1.23', () => {
      expect(is.float(1.23)).to.equal(true);
    });
  });

  describe('integer()', () => {
    it('should return false when target is undefined', () => {
      let target;
      expect(is.integer(target)).to.equal(false);
    });
    it('should return false when target is "hello"', () => {
      expect(is.integer('hello')).to.equal(false);
    });
    it('should return false when target is [1,2,3]', () => {
      expect(is.integer([1, 2, 3])).to.equal(false);
    });
    it('should return false when target is 1.23', () => {
      expect(is.integer(1.23)).to.equal(false);
    });
    it('should return true when target is 100', () => {
      expect(is.integer(100)).to.equal(true);
    });
  });

  describe('number()', () => {
    it('should return false when target is undefined', () => {
      let target;
      expect(is.number(target)).to.equal(false);
    });
    it('should return false when target is "hello"', () => {
      expect(is.number('hello')).to.equal(false);
    });
    it('should return false when target is [1,2,3]', () => {
      expect(is.number([1, 2, 3])).to.equal(false);
    });
    it('should return true when target is 1.23', () => {
      expect(is.number(1.23)).to.equal(true);
    });
    it('should return true when target is 100', () => {
      expect(is.number(100)).to.equal(true);
    });
  });

  describe('function()', () => {
    it('should return false when target is undefined', () => {
      let target;
      expect(is.function(target)).to.equal(false);
    });
    it('should return false when target is "hello"', () => {
      expect(is.function('hello')).to.equal(false);
    });
    it('should return false when target is [1,2,3]', () => {
      expect(is.function([1, 2, 3])).to.equal(false);
    });
    it('should return true when target is "hello".split', () => {
      expect(is.function('hello'.split)).to.equal(true);
    });
    it('should return true when target is () => {}', () => {
      expect(is.function(() => {})).to.equal(true);
    });
  });

  describe('iterable()', () => {
    it('should return false when target is undefined', () => {
      let target;
      expect(is.iterable(target)).to.equal(false);
    });
    it('should return true when target is "hello"', () => {
      expect(is.iterable('hello')).to.equal(true);
    });
    it('should return true when target is [1,2,3]', () => {
      expect(is.iterable([1, 2, 3])).to.equal(true);
    });
    it('should return false when target is "hello".split', () => {
      expect(is.iterable('hello'.split)).to.equal(false);
    });
    it('should return false when target is null', () => {
      expect(is.iterable(null)).to.equal(false);
    });
  });

  describe('map()', () => {
    it('should return false when target is undefined', () => {
      let target;
      expect(is.map(target)).to.equal(false);
    });
    it('should return false when target is "hello"', () => {
      expect(is.map('hello')).to.equal(false);
    });
    it('should return true when target is new Map()', () => {
      expect(is.map(new Map())).to.equal(true);
    });
  });

  describe('object()', () => {
    it('should return false when target is undefined', () => {
      let target;
      expect(is.object(target)).to.equal(false);
    });
    it('should return false when target is "hello"', () => {
      expect(is.object('hello')).to.equal(false);
    });
    it('should return false when target is [1,2,3]', () => {
      expect(is.object([1, 2, 3])).to.equal(false);
    });
    it('should return true when target is {}', () => {
      expect(is.object({})).to.equal(true);
    });
  });

  describe('set()', () => {
    it('should return false when target is undefined', () => {
      let target;
      expect(is.set(target)).to.equal(false);
    });
    it('should return false when target is "hello"', () => {
      expect(is.set('hello')).to.equal(false);
    });
    it('should return true when target is new Set()', () => {
      expect(is.set(new Set())).to.equal(true);
    });
  });

  describe('string()', () => {
    it('should return false when target is undefined', () => {
      let target;
      expect(is.string(target)).to.equal(false);
    });
    it('should return true when target is "hello"', () => {
      expect(is.string('hello')).to.equal(true);
    });
    it('should return false when target is new Set()', () => {
      expect(is.string(new Set())).to.equal(false);
    });
  });

  describe('blank()', () => {
    it('should return true when target is undefined', () => {
      let target;
      expect(is.blank(target)).to.equal(true);
    });
    it('should return false when target is "hello"', () => {
      expect(is.blank('hello')).to.equal(false);
    });
    it('should return true when target is ""', () => {
      expect(is.blank('')).to.equal(true);
    });
  });

  describe('empty()', () => {
    it('should return true when target is undefined', () => {
      let target;
      expect(is.empty(target)).to.equal(true);
    });
    it('should return false when target is "hello"', () => {
      expect(is.empty('hello')).to.equal(false);
    });
    it('should return true when target is ""', () => {
      expect(is.empty('')).to.equal(true);
    });
    it('should return true when target is new Set()', () => {
      expect(is.empty(new Set())).to.equal(true);
    });
    it('should return false when target is [1,2,3]', () => {
      expect(is.empty([1, 2, 3])).to.equal(false);
    });
  });
});
