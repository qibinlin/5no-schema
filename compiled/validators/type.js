'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var name = _ref.name,
      type = _ref.type,
      value = _ref.value,
      defaultValue = _ref.defaultValue;

  var typeName = (0, _helper.getTypeName)(type);
  var typeOfValue = (0, _helper.getTypeOfValue)(value);

  if (typeName === 'date' && typeOfValue === 'string') {
    return true;
  } else if (typeName === 'number' && typeOfValue === 'number') {
    return true;
  }

  if (typeof value !== 'undefined' && !(0, _helper.isEqual)(value, defaultValue) && typeOfValue !== typeName) {
    return name + ' has incorrect type';
  }

  return true;
};

var _helper = require('../helper');