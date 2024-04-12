/** FEEDBACK: Great job! */
const uppercaseAll = (...words) => {
  let upperCasedWords = [];
  for (const word of words) {
    upperCasedWords.push(word.toUpperCase());
  }
  return upperCasedWords;
};

const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates;
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};
console.log(destructureCoordinates([1, 2]));

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
