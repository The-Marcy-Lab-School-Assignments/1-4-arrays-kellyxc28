/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  arr.length = 0;
};

const getFirstItem = (array) => {
  return array.shift();
};

module.exports = {
  clearArr,
  getFirstItem,
};
