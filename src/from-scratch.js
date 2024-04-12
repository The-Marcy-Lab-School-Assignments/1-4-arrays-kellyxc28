  /** FEEDBACK: Because conditional statement naturally will evaluate truthy or falsy, you do not need to set it equal to true! */
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

const deleteFromMiddle = (arr) => {
  const middleIndex = Math.floor(arr.length/2);
  arr.splice(middleIndex, 1);
};
/** FEEDBACK: Great job with this! */
const isRightIndex = (arr, value, index) => {
    return arr[index] === value;
};

const roundAllNumsDown = (arr) => {
  const arrCopy = [...arr];
  for (let i = 0; i < arrCopy.length; i++) {
    arrCopy[i] = Math.floor(arrCopy[i]);
  }
  return arrCopy;
};

const getAllYCoordinates = (arrOfCoords) => {
    let yCoords = [];
    for (let i = 0; i < arrOfCoords.length; i++) {
      yCoords.push(arrOfCoords[i][1]);
    }
    return yCoords;
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
