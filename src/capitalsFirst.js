'use strict';

function capitalsFirst(str) {
  const capitalLetters = [];
  const lowLetters = [];
  const newArray = [];

  const findWord = function(word) {
    if (word[0].toLowerCase() === word[0].toUpperCase()) {
      return false;
    }
    if (word[0] === word[0].toUpperCase()) {
      capitalLetters.push(word);
    } else if (word[0] === word[0].toLowerCase()) {
      lowLetters.push(word);
    };
  };

  str.split(' ').forEach(findWord);
  const newString = newArray.concat(capitalLetters, lowLetters).join(' ');

  return newString;
}

module.exports = capitalsFirst;
