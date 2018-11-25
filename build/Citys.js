"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Citys - Class which contains uniq citys
 * @class
 */
var Citys =
/*#__PURE__*/
function () {
  function Citys() {
    _classCallCheck(this, Citys);
  }

  _createClass(Citys, [{
    key: "add",

    /**
     * @type {array}
     */

    /**
     * add - add new city
     *
     * @param {string} word city name
     *
     * @return {array} array of citys
     */
    value: function add(word) {
      Citys.collector = _toConsumableArray(new Set(Citys.collector.concat(word))).sort();
    }
    /**
     * get - Get city by index
     * @method
     *
     * @throws {Error} if index not found
     *
     * @param {number} index city index
     *
     * @return {string} city name
     */

  }, {
    key: "getCity",
    value: function getCity(index) {
      if (Citys.collector[index] === undefined) throw new Error('index not found');
      return Citys.collector[index];
    }
    /**
     * get - get citys
     *
     * @returns {array} - citys list
     */

  }, {
    key: "get",
    value: function get() {
      return Citys.collector;
    }
  }]);

  return Citys;
}();

_defineProperty(Citys, "collector", []);

var _default = Citys;
exports.default = _default;