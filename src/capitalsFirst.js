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
  const splitedStrArr = str.split(' ');
  const resultArr = [];

  for (let i = 0; i < splitedStrArr.length; i++) {
    if (splitedStrArr[i][0] >= 'A' && splitedStrArr[i][0] <= 'Z') {
      resultArr.push(splitedStrArr[i]);
    }
  }

  for (let i = 0; i < splitedStrArr.length; i++) {
    if (splitedStrArr[i][0] >= 'a'
    && splitedStrArr[i][0] <= 'z') {
      resultArr.push(splitedStrArr[i]);
    }
  }

  return resultArr.join(' ');
}

module.exports = capitalsFirst;
