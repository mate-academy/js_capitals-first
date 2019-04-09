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
  let arr = str.split(' ');
  let arrUpper = [];
  let arrLower = [];

  for (let word of arr) {
    if (word[0] === word[0].toLowerCase() &&
        word.charCodeAt(0) <= 122 &&
        word.charCodeAt(0) >= 97) {
      arrLower.push(word);
    }
    if (word[0] !== word[0].toLowerCase() &&
        word.charCodeAt(0) <= 90 &&
        word.charCodeAt(0) >= 65) {
      arrUpper.push(word);
    }
  }
  return arrUpper.concat(arrLower).join(' ');
};

module.exports = capitalsFirst;
