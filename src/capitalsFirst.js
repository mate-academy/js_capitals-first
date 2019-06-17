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
 * @param {string} str
 *
 * @returns {string} - string with uppercase words in front
 */
function capitalsFirst(str) {
  // write code here
  const arr = str.split(' ');

  const wordUpperCase = [];
  const wordLowerCase = [];

  for (const word of arr) {
    if (word.match(/^[A-Z]/)) {
      wordUpperCase.push(word);
    }
    if (word.match(/^[a-z]/)) {
      wordLowerCase.push(word);
    }
  }
  return wordUpperCase.concat(wordLowerCase).join(' ');
}

module.exports = capitalsFirst;
