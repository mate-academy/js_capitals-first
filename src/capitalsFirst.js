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
  const arrUpper = [];
  const arrLower = [];
  const letters = /^[A-Za-z]+$/;
  const arrStr = str.split(' ');
  for (const word of arrStr) {
    if (word.charAt(0).match(letters)) {
      if (
        word.charAt(0) !== word.charAt(0).toLowerCase()) {
        arrUpper.push(word);
      } else {
        arrLower.push(word);
      }
    }
  }
  return arrUpper.concat(arrLower).join(' ');
}

module.exports = capitalsFirst;
