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
  const arr = str.split(/\s+/).filter(elem => /^[a-zA-z]/.test(elem));
  const upperCaseArray = [];
  const lowerCaseArray = [];
  for (const elem of arr) {
    if (elem[0] === elem[0].toUpperCase()) {
      upperCaseArray.push(elem);
    } else if (elem[0] === elem[0].toLowerCase()) {
      lowerCaseArray.push(elem);
    }
  }
  return [...upperCaseArray, ...lowerCaseArray].join(' ');
}

module.exports = capitalsFirst;
