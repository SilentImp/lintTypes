/**
 * Citys - Class which contains uniq citys
 * @class
 */
class Citys {

  /**
   * @type {array}
   */
  static collector = [];


  /**
   * add - add new city
   * @method
   *
   * @param {string} word - new city
   */
  add(word) {
    Citys.collector = [...new Set(Citys.collector.concat(word))].sort();
  }


  /**
   * get - Get city by index
   * @method
   *
   * @throws {Error} if index not found
   *
   * @param {number} index city index
   *
   * @returns {string} — city name
   */
  getCity(index) {
    if (Citys.collector[index] === undefined) throw new Error('index not found');
    return Citys.collector[index];
  }


  /**
   * get - get citys
   *
   * @returns {array} - citys list
   */
  get() {
    return Citys.collector;
  }

}

export default Citys;
