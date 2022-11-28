const { transpose } = require("../../async/matrix_transposition");

const wordSearch = (array, word) => {
  const arr = searchForWord(array, word);
  let newArr = transpose(array);
  const transformedArr = searchForWord(newArr, word);

  if (arr === true) return true;
  if (transformedArr === true) return true;
  return false;
};

const searchForWord = (array, word) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      let pointer = j;
      let found = "";
      while (pointer < word.length + j) {
        if (pointer > array[i].length) {
          break;
        } else {
          found += array[i][pointer];
          pointer++;
        }
      }
      if (found === word) {
        return true;
      }
    }
  }
};

console.log(
  wordSearch(
    [
      ["a", "p", "z", "l", "n"],
      ["t", "r", "e", "e", "f"],
      ["m", "j", "k", "d", "p"],
    ],
    "tree"
  )
);

module.exports = wordSearch;
