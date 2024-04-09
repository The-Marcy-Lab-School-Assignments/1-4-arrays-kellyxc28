const addToFrontOrBack = (arr, value, isFront) => {
    if (isFront === true) {
      arr.unshift(value);
    }
    else {
      arr.push(value);
    }
};

const reverseString = (str) => {
    const strCopy = [...str];
    return strCopy.reverse().join('');
};

const newArrayFullOf = () => {
};

const insertIntoMiddle = () => {
};

const deleteFromMiddle = () => {
};

const isRightIndex = () => {
};

const roundAllNumsDown = () => {
};

const getAllYCoordinates = () => {
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
