import { useState } from 'react';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

var useFormValidation = function useFormValidation(initialState, validationRules) {
  var _useState = useState({}),
    errors = _useState[0],
    setErrors = _useState[1];
  var _useState2 = useState(initialState),
    state = _useState2[0];
  var handler = {
    set: function set(target, property, value) {
      if (typeof property === 'string' && validationRules[property]) {
        var validationError = validationRules[property](value);
        setErrors(function (prev) {
          var _extends2;
          return _extends({}, prev, (_extends2 = {}, _extends2[property] = validationError, _extends2));
        });
      }
      target[property] = value;
      return true;
    }
  };
  var proxyState = new Proxy(state, handler);
  return [proxyState, errors];
};

export { useFormValidation };
//# sourceMappingURL=index.modern.js.map
