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
  const wordsArray = str.split(' ');
  let capitalWords = [];
  let lowerWords = [];
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].charCodeAt(0) > 64
    && wordsArray[i].charCodeAt(0) < 91) {
      capitalWords.push(wordsArray[i]);
    } else if (wordsArray[i].charCodeAt(0) > 96
    && wordsArray[i].charCodeAt(0) < 123) {
      lowerWords.push(wordsArray[i]);
    }
  }
  capitalWords = capitalWords.join(' ');
  lowerWords = lowerWords.join(' ');
  return (capitalWords + ' ' + lowerWords).trim();
}

module.exports = capitalsFirst;
