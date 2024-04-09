const uppercaseAll = (...words) => {
  let upperCasedWords = [];
  for (const word of words) {
    upperCasedWords.push(word.toUpperCase());
  }
  return upperCasedWords;
};

const destructureCoordinates = (coordinates) => {
  const x = coordinates[0];
  const y = coordinates[1];
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
