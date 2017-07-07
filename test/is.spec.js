/* eslint-env node, mocha */

const { is } = require('../index');
const { expect } = require('chai');

describe('{ is }', () => {
  [
    'null',
    'notNull',
    'defined',
    'undefined',
    'missing',
    'present',

    'array',
    'boolean',
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
    'true',
    'false',

    'extend',

    'ownProperty',
  ].forEach((key) => {
    it(`should respond to the method ${key}`, () => {
      expect(is).to.respondTo(key, `is DOES NOT have the method ${key}`);
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

  describe('boolean()', () => {
    it('should return false when target is undefined', () => {
      let target;
      expect(is.boolean(target)).to.equal(false);
    });
    it('should return false when target is "hello"', () => {
      expect(is.boolean('hello')).to.equal(false);
    });
    it('should return true when target is false', () => {
      expect(is.boolean(false)).to.equal(true);
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

  describe('true()', () => {
    it('should handle strings', () => {
      expect(is.true('t')).to.equal(true);
      expect(is.true('true')).to.equal(true);
      expect(is.true('1')).to.equal(true);
      expect(is.true('f')).to.equal(false);
      expect(is.true('false')).to.equal(false);
      expect(is.true('0')).to.equal(false);
    });
    it('should handle booleans', () => {
      expect(is.true(true)).to.equal(true);
      expect(is.true(false)).to.equal(false);
    });
    it('should handle numbers', () => {
      expect(is.true(1)).to.equal(true);
      expect(is.true(0)).to.equal(false);
    });
  });

  describe('false()', () => {
    it('should handle strings', () => {
      expect(is.false('f')).to.equal(true);
      expect(is.false('false')).to.equal(true);
      expect(is.false('0')).to.equal(true);
      expect(is.false('t')).to.equal(false);
      expect(is.false('true')).to.equal(false);
      expect(is.false('1')).to.equal(false);
    });
    it('should handle booleans', () => {
      expect(is.false(true)).to.equal(false);
      expect(is.false(false)).to.equal(true);
    });
    it('should handle numbers', () => {
      expect(is.false(1)).to.equal(false);
      expect(is.false(0)).to.equal(true);
    });
  });

  describe('extend()', () => {
    it('should not have the foo() method', () => {
      expect(is).not.to.respondTo('foo');
    });

    it('should have the foo() method', () => {
      is.extend({
        foo: obj => obj === 'foo',
      });
      expect(is).to.respondTo('foo');
      expect(is.foo('foo')).to.equal(true);
      expect(is.foo('bar')).to.equal(false);
    });
  });

  describe('ownProperty()', () => {
    it('should return false when passed {}, "foo"', () => {
      expect(is.ownProperty({}, 'foo')).to.equal(false);
    });
    it('should return false when passed {a: "b"}, "foo"', () => {
      expect(is.ownProperty({ a: 'b' }, 'foo')).to.equal(false);
    });
    it('should return true when passed {a: "b"}, "a"', () => {
      expect(is.ownProperty({ a: 'b' }, 'a')).to.equal(true);
    });
  });

  describe('all', () => {
    it('should exist', () => {
      expect(is).to.have.ownProperty('all');
    });

    [
      'defined',
      'undefined',
      'present',
      'missing',
      'true',
      'false',
    ].forEach((key) => {
      it(`should respond to the method ${key}`, () => {
        expect(is.all).to.respondTo(key, `is DOES NOT have the method ${key}`);
      });
    });

    describe('defined()', () => {
      it('should return true when passed 1 and "hello"', () => {
        expect(is.all.defined(1, 'hello')).to.equal(true);
      });
      it('should return false when passed 1 and undefined', () => {
        let target;
        expect(is.all.defined(1, target)).to.equal(false);
      });
    });

    describe('undefined()', () => {
      it('should return false when passed 1 and undefined', () => {
        let target;
        expect(is.all.undefined(1, target)).to.equal(false);
      });
      it('should return true when passed undefined and undefined', () => {
        let target;
        let foo;
        expect(is.all.undefined(foo, target)).to.equal(true);
      });
    });

    describe('true()', () => {
      it('should handle strings', () => {
        expect(is.all.true('t', 'true')).to.equal(true);
        expect(is.all.true('true', 'f')).to.equal(false);
        expect(is.all.true('1')).to.equal(true);
        expect(is.all.true('f', '0', 'false')).to.equal(false);
        expect(is.all.true('false', 'F')).to.equal(false);
        expect(is.all.true('0')).to.equal(false);
      });
      it('should handle booleans', () => {
        expect(is.all.true(true, true)).to.equal(true);
        expect(is.all.true(false, true, true)).to.equal(false);
      });
      it('should handle numbers', () => {
        expect(is.all.true(1, 1, 1)).to.equal(true);
        expect(is.all.true(1, 1, 0)).to.equal(false);
      });
    });

    describe('false()', () => {
      it('should handle strings', () => {
        expect(is.all.false('f', 'false', '0')).to.equal(true);
        expect(is.all.false('false', 't')).to.equal(false);
        expect(is.all.false('0', 'FALSE')).to.equal(true);
        expect(is.all.false('t', 'false')).to.equal(false);
        expect(is.all.false('true', 'f')).to.equal(false);
        expect(is.all.false('1', '0')).to.equal(false);
      });
      it('should handle booleans', () => {
        expect(is.all.false(false, false, true)).to.equal(false);
        expect(is.all.false(false, false)).to.equal(true);
      });
      it('should handle numbers', () => {
        expect(is.all.false(0, 0, 1)).to.equal(false);
        expect(is.all.false(0, 0, 0)).to.equal(true);
      });
    });

    describe('missing()', () => {
      it('should return true when target is undefined', () => {
        let target;
        expect(is.all.missing(target, null)).to.equal(true);
      });
      it('should return true when target is null', () => {
        expect(is.all.missing(null, null)).to.equal(true);
      });
      it('should return false when target is 1', () => {
        expect(is.all.missing(null, 1)).to.equal(false);
      });
    });

    describe('present()', () => {
      it('should return false when target is undefined', () => {
        let target;
        expect(is.all.present('foo', target)).to.equal(false);
      });
      it('should return false when target is null', () => {
        expect(is.all.present('foo', null)).to.equal(false);
      });
      it('should return true when target is 1', () => {
        expect(is.all.present('foo', 1)).to.equal(true);
      });
    });
  });

  describe('any', () => {
    it('should exist', () => {
      expect(is).to.have.ownProperty('any');
    });

    [
      'defined',
      'undefined',
      'present',
      'missing',
      'true',
      'false',
    ].forEach((key) => {
      it(`should respond to the method ${key}`, () => {
        expect(is.any).to.respondTo(key, `is DOES NOT have the method ${key}`);
      });
    });

    describe('defined()', () => {
      it('should return true when passed 1 and "hello"', () => {
        expect(is.any.defined(1, 'hello')).to.equal(true);
      });
      it('should return true when passed 1 and undefined', () => {
        let target;
        expect(is.any.defined(1, target)).to.equal(true);
      });
      it('should return false when passed undefined and undefined', () => {
        let target;
        let foo;
        expect(is.any.defined(foo, target)).to.equal(false);
      });
    });

    describe('undefined()', () => {
      it('should return true when passed 1 and undefined', () => {
        let target;
        expect(is.any.undefined(1, target)).to.equal(true);
      });
      it('should return true when passed undefined and undefined', () => {
        let target;
        let foo;
        expect(is.any.undefined(foo, target)).to.equal(true);
      });
      it('should return false when passed 1 and "hello"', () => {
        expect(is.any.undefined(1, 'hello')).to.equal(false);
      });
    });

    describe('true()', () => {
      it('should handle strings', () => {
        expect(is.any.true('t', 'true')).to.equal(true);
        expect(is.any.true('false', 'f')).to.equal(false);
        expect(is.any.true('1')).to.equal(true);
        expect(is.any.true('f', '0', 'false')).to.equal(false);
        expect(is.any.true('false', 'F')).to.equal(false);
        expect(is.any.true('0')).to.equal(false);
      });
      it('should handle booleans', () => {
        expect(is.any.true(false, true)).to.equal(true);
        expect(is.any.true(false, false, false)).to.equal(false);
      });
      it('should handle numbers', () => {
        expect(is.any.true(0, 0, 1)).to.equal(true);
        expect(is.any.true(0, 0, 0)).to.equal(false);
      });
    });

    describe('false()', () => {
      it('should handle strings', () => {
        expect(is.any.false('f', 'false', '0')).to.equal(true);
        expect(is.any.false('TRUE', 't')).to.equal(false);
        expect(is.any.false('0', 'FALSE')).to.equal(true);
        expect(is.any.false('t', 'false')).to.equal(true);
        expect(is.any.false('true', 'f')).to.equal(true);
        expect(is.any.false('1', 't')).to.equal(false);
      });
      it('should handle booleans', () => {
        expect(is.any.false(true, true, true)).to.equal(false);
        expect(is.any.false(true, false)).to.equal(true);
      });
      it('should handle numbers', () => {
        expect(is.any.false(1, 1, 1)).to.equal(false);
        expect(is.any.false(1, 1, 0)).to.equal(true);
      });
    });

    describe('missing()', () => {
      it('should return false when target is "hello"', () => {
        expect(is.any.missing('hello', 100)).to.equal(false);
      });
      it('should return true when target is null', () => {
        expect(is.any.missing(null, null)).to.equal(true);
      });
      it('should return true when target is 1', () => {
        expect(is.any.missing(null, 1)).to.equal(true);
      });
    });

    describe('present()', () => {
      it('should return true when target is undefined', () => {
        let target;
        expect(is.any.present('foo', target)).to.equal(true);
      });
      it('should return false when target is null', () => {
        expect(is.any.present(null, null)).to.equal(false);
      });
      it('should return true when target is 1', () => {
        expect(is.any.present('foo', 1)).to.equal(true);
      });
    });
  });
});
