'use strict';

/**
 * Implement capitalsFirst function:
 *
 * Create a function that takes an input String and returns a String, where all
 * the uppercase words of the input String are in front and all the lowercase
 * words at the end. The order of the uppercase and lowercase words should be
 * the order in which they occur.
 *
 * If a word starts with a number or special character, skip the word and leave
 * it out of the result. Input String will not be empty.
 *
 * capitalFirst("hey You, Sort me Already!") === "You, Sort Already! hey me"
 *
 * capitalsFirst(1, 2) === 3
 * capitalsFirst(1, 11) === 12
 *
 * @param {string} str
 *
 * @returns {string} - string with uppercase words in front
 */
function isUpperCased(word) {
  return word && word[0] === word[0].toUpperCase() && /[A-ZА-Я]/.test(word[0]);
}

function isLowerCased(word) {
  return word && word[0] === word[0].toLowerCase() && /[a-zа-я]/.test(word[0]);
}

function capitalsFirst(str) {
  let wordsLowerCase = [];
  let wordsUpperCase = [];
  let allWords = str.split(' ');
  for (let word of allWords) {
    if (isUpperCased(word)) {
      wordsUpperCase.push(word);
    } else if (isLowerCased(word)) {
      wordsLowerCase.push(word);
    }
  }
  let sortedWords = wordsUpperCase.concat(wordsLowerCase);
  let result = sortedWords.join(' ');
  return result;
}

module.exports = capitalsFirst;
