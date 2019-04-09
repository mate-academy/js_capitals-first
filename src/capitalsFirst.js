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
function capitalsFirst(str) {
  let words = str.split(' ');
  let upperCaseWords = [];
  let lowerCaseWords = [];
  let filteredWords = words.filter((word) => {
    if (word[0].toLowerCase() <= 'z' && word[0].toLowerCase() >= 'a') {
      return word;
    }
  });
  filteredWords.map((word) => {
    if (isUpperCase(word[0])) {
      upperCaseWords.push(word);
    } else {
      lowerCaseWords.push(word);
    }
  });
  return upperCaseWords.concat(lowerCaseWords).join(' ');
}

function isUpperCase(ch) {
  return ch.toUpperCase() === ch;
}

module.exports = capitalsFirst;
