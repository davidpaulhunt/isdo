const is = {
  typeId: type => `[object ${type}]`,
  base: (target, type) => Object.prototype.toString.call(target) === is.typeId(type),

  null: obj => is.base(obj, 'Null'),

  notNull: obj => !is.null(obj),

  defined: obj => !is.base(obj, 'Undefined'),

  undefined: obj => !is.defined(obj),

  missing: obj => is.null(obj) || is.undefined(obj),

  present: obj => is.defined(obj) && is.notNull(obj),

  array: obj => Array.isArray(obj),

  float: obj => is.number(obj) && !is.integer(obj),

  function: obj => is.base(obj, 'Function'),

  integer: obj => is.number(obj) && Number.isInteger(obj),

  number: obj => is.base(obj, 'Number'),

  iterable: obj => is.present(obj) && is.function(obj[Symbol.iterator]),

  map: obj => is.base(obj, 'Map'),

  object: obj => is.base(obj, 'Object'),

  set: obj => is.base(obj, 'Set'),

  string: obj => is.base(obj, 'String'),

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
};

module.exports = { is };
