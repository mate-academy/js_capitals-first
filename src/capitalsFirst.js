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

function capitalFirst(str) {
  let firstIsUpper = [];
  let firstIsLower = [];
  let strToArr = str.split(' ');

  for (var i = 0; i < strToArr.length; i++) {
    if (strToArr[i][0] >= 'A' && strToArr[i][0] <= 'Z') {
      firstIsUpper.push(strToArr[i]);
    } else if (strToArr[i][0] >= 'a' && strToArr[i][0] <= 'z') {
      firstIsLower.push(strToArr[i]);
    }
  }
  return firstIsUpper.concat(firstIsLower).join(' ');
}

module.exports = capitalFirst;
