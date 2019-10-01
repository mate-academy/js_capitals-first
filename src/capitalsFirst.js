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
  const arr = str.split(' ');
  const capitalizedArr = [];
  const lowerizedArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].charCodeAt() >= 65 && arr[i].charCodeAt() <= 90) {
      capitalizedArr.push(arr[i]);
    } else if (arr[i].charCodeAt() >= 97 && arr[i].charCodeAt() <= 122) {
      lowerizedArr.push(arr[i]);
    }
  }

  return [...capitalizedArr, ...lowerizedArr].join(' ');
}

module.exports = capitalsFirst;
