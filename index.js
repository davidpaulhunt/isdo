const typeId = type => `[object ${type}]`;

const base = (target, type) => Object.prototype.toString.call(target) === typeId(type);

const is = {
  null: obj => base(obj, 'Null'),

  notNull: obj => !is.null(obj),

  defined: obj => !base(obj, 'Undefined'),

  undefined: obj => !is.defined(obj),

  missing: obj => is.null(obj) || is.undefined(obj),

  present: obj => is.defined(obj) && is.notNull(obj),

  array: obj => Array.isArray(obj),

  boolean: obj => base(obj, 'Boolean'),

  float: obj => is.number(obj) && !is.integer(obj),

  function: obj => base(obj, 'Function'),

  integer: obj => is.number(obj) && Number.isInteger(obj),

  number: obj => base(obj, 'Number'),

  iterable: obj => is.present(obj) && is.function(obj[Symbol.iterator]),

  map: obj => base(obj, 'Map'),

  object: obj => base(obj, 'Object'),

  set: obj => base(obj, 'Set'),

  string: obj => base(obj, 'String'),

  blank: obj => !is.string(obj) || is.empty(obj),

  empty: (obj) => {
    const getLength = () => {
      if (is.array(obj) || is.string(obj)) return obj.length;
      if (is.map(obj) || is.set(obj)) return obj.size;
      if (is.object(obj)) return Object.keys(obj).length;
      if (is.number(obj)) return obj;
      return 0;
    };

    return getLength() < 1;
  },

  true: (obj) => {
    if (is.boolean(obj)) return obj === true;
    if (is.string(obj)) {
      return ['t', 'true', '1'].includes(obj.toLowerCase());
    }
    if (is.number(obj)) return obj > 0;
    return false;
  },

  false: obj => !is.true(obj),
};

// function extend(original, source = {}) {
//   const target = original;

//   Object.keys(source).forEach((key) => {
//     if (Object.prototype.hasOwnProperty.call(source, key)) {
//       if (is.function(source[key])) {
//         target[key] = source[key];
//       } else if (is.object(source[key]) && is.object(target[key])) {
//         target[key] = extend(target[key], source[key]);
//       }
//     }
//   });

//   return target;
// }

is.extend = function extend(source = {}) {
  Object.keys(source).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (is.function(source[key])) {
        this[key] = source[key];
      } else if (is.object(source[key]) && is.object(this[key])) {
        this[key] = extend(this[key], source[key]);
      }
    }
  });
};

module.exports = { is };
