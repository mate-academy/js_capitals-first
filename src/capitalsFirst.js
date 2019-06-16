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
const capitalsFirst = (str) => {
  const arr = str.split(' ');
  const upperArr = [];
  const lowerArr = [];
  for (const w of arr) {
    if (!w.charAt(0).match(/[a-zA-Z]/)) {
      continue;
    }
    if (w.charAt(0) === w.charAt(0).toUpperCase()) {
      upperArr.push(w);
    } else {
      lowerArr.push(w);
    }
  }
  return upperArr.concat(lowerArr).join(' ');
};
module.exports = capitalsFirst;
