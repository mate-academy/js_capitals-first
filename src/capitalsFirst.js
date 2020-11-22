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
  const capitalizeWords = [];
  const nonCapitalizeWords = [];
  const toArray = str.split(' ');

  for (const el of toArray) {
    if (el.match(/\b^[A-Z]/g)) {
      capitalizeWords.push(el);
    }
    if (el.match(/\b^[a-z]/g)) {
      nonCapitalizeWords.push(el);
    }
  }

  return ([...capitalizeWords, ...nonCapitalizeWords].join(' '));
}

module.exports = capitalsFirst;
