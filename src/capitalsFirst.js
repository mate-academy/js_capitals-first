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
  const arr = str.split(' ').filter(item => /^[a-z]/gi.test(item));
  const upperArr = arr.filter(item => /^[A-Z]/.test(item));
  const lowerArr = arr.filter(item => /^[a-z]/.test(item));

  return [...upperArr, ...lowerArr].join(' ');
}

module.exports = capitalsFirst;
