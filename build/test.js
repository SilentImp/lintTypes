"use strict";

var _Citys = _interopRequireDefault(require("./Citys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var citys = new _Citys.default();
  citys.add('Kyiv');
  citys.add('Minsk');
  citys.add('Kazan');
  citys.add('Istanbul');
  citys.add(111);
  console.log(citys.get());
})();