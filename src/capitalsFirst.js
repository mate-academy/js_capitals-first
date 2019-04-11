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
  let arr = [];
  let upperCase = [];
  let lowerCase = [];
  arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    var symbol = '';
    symbol = arr[i].charAt(0);
    if (symbol >= 'A' && symbol <= 'Z') {
      upperCase.push(arr[i]);
    } else if (symbol >= 'a' && symbol <= 'z') {
      lowerCase.push(arr[i]);
    }
  }
  if (lowerCase.length !== 0) {
    symbol = ' ';
  } else symbol = '';
  let result = upperCase.join(' ') + symbol + lowerCase.join(' ');
  return result;
}

module.exports = capitalsFirst;
