/** FEEDBACK: Great job! */
/* from eslint: eslint-disable no-param-reassign */
const clearArr = (arr) => {
  arr.length = 0;
};

const getFirstItem = (array) => {
  return array[0];
};

// named export 
module.exports = {
  clearArr,
  getFirstItem,
};
