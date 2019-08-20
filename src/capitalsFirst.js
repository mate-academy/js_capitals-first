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
  return str.split(' ')
    .filter(item => item[0].toLowerCase() !== item[0].toUpperCase())
    .sort((word1, word2) => {
      const isNeedingSort = (
        word1[0] === word1[0].toUpperCase()
        && word2[0] === word2[0].toLowerCase()
      );

      return (isNeedingSort) ? -1 : 0;
    })
    .join(' ');
}

module.exports = capitalsFirst;
