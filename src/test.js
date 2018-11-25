import Citys from './Citys';

(function () {
  const citys = new Citys();

  citys.add('Kyiv');
  citys.add('Minsk');
  citys.add('Kazan');
  citys.add('Istanbul');
  citys.add(222);

  console.log(citys.get());

})();
