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
  const words = str.split(' ');
  const wordsUpp = [];
  const wordsLow = [];
  let resultStr = '';
  const re = new RegExp(`[0-9$=?&.#!]`);

  for (let i = 0; i < words.length; i++) {
    if (!re.test(words[i][0])) {
      (words[i][0] === words[i][0].toUpperCase()) ? wordsUpp.push(words[i]) : wordsLow.push(words[i]);
    }
  }

  for (let i = 0; i < wordsUpp.length; i++) {
    resultStr += wordsUpp[i] + ' ';
  }

  for (let i = 0; i < wordsLow.length; i++) {
    resultStr += wordsLow[i] + ' ';
  }

  return resultStr.trim();
}

module.exports = capitalsFirst;
