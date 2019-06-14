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
  const arr = [];
  const arr2 = [];
  const letters = /^[A-Za-z]+$/;
  const string = str.split(' ');
  for (const word of string) {
    if (word.charAt(0).match(letters)) {
      if (
        word.charAt(0) !== word.charAt(0).toLowerCase()) {
        arr.push(word);
      } else {
        arr2.push(word);
      }
    }
  }
  return arr.concat(arr2).join(' ');
}

module.exports = capitalsFirst;
