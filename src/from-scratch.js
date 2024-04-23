  /** FEEDBACK: Because conditional statement naturally will evaluate truthy or falsy, you do not need to set it equal to true! */
const addToFrontOrBack = (arr, value, isFront) => {
    if (isFront) {  // if isFront is true, as in we want to add at the front 
      arr.unshift(value);
    }
    else {    // otherwise, false, so add to the back 
      arr.push(value);
    }
};

const reverseString = (str) => {
    const strCopy = [...str];   // make a copy with a spread operator `...` 
    // strCopy is initially split by chars with spread operator before 
    // we want to reverse the order, join the chars back into one, and then return that 
    return strCopy.reverse().join('');  
};

const newArrayFullOf = (value, numOfValue) => {
    const arr = [];
    for (let i = numOfValue; i > 0; i--) {  // decrementing, going backwards 
        arr.push(value);
    }
    return arr;
};

const insertIntoMiddle = (arg, value) => {
    // calculating middle -> arg.length/2 
    // Math.floor -> if given an odd number of arguments, go closer to the front 
    // Ex: positions: 1, 2, 3, 4, 5 -> we want to be between 2 and 3, rather than 3 and 4 
    const middleIndex = Math.floor(arg.length/2);
    arg.splice(middleIndex, 0, value);  // mutates, removes/replaces existing elements with new ones 
};

const deleteFromMiddle = (arr) => {
  // calculating middle -> arg.length/2 
  // Math.floor -> if given an odd number of arguments, go closer to the front 
  // Ex: positions: 1, 2, 3, 4, 5 -> we want to be between 2 and 3, rather than 3 and 4 
  const middleIndex = Math.floor(arr.length/2);
  arr.splice(middleIndex, 1);   // mutates, removes/replaces existing elements with new ones  
};
/** FEEDBACK: Great job with this! */
const isRightIndex = (arr, value, index) => {
    return arr[index] === value;
};

const roundAllNumsDown = (arr) => {
  const arrCopy = [...arr];   // copy with spread operator 
  for (let i = 0; i < arrCopy.length; i++) {
    arrCopy[i] = Math.floor(arrCopy[i]);  // .floor to round down 
  }
  return arrCopy;
};

const getAllYCoordinates = (arrOfCoords) => {
    let yCoords = [];
    for (let i = 0; i < arrOfCoords.length; i++) {
      yCoords.push(arrOfCoords[i][1]);    // i is the x coordinates 
    }
    return yCoords;
};

// named exports 
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
