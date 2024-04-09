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

const newArrayFullOf = (value, numOfValue) => {
    const arr = [];
    for (let i = numOfValue; i > 0; i--) {
        arr.push(value);
    }
    return arr;
};

const insertIntoMiddle = (arg, value) => {
    const middleIndex = Math.floor(arg.length/2);
    arg.splice(middleIndex, 0, value);
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
