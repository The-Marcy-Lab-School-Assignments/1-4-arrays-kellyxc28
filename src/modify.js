/** FEEDBACK: Great job! */
const uppercaseAll = (...words) => {
  let upperCasedWords = [];
  for (const word of words) {   // goes through the values of objects 
    upperCasedWords.push(word.toUpperCase());
  }
  return upperCasedWords;
};

const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates;   // destructuring 
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};
console.log(destructureCoordinates([1, 2]));

// named exports 
module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
