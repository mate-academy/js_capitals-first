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
  const array = str.split(' ');
  const result = [];
  const letters = /^[A-Za-z]/;

  for (const i of array) {
    if ((i[0] === i[0].toUpperCase()) && (i[0].match(letters))) {
      result.push(i);
    }
  }

  for (const i of array) {
    if ((i[0] === i[0].toLowerCase()) && (i[0].match(letters))) {
      result.push(i);
    }
  }

  return result.join(' ');
};
module.exports = capitalsFirst;
