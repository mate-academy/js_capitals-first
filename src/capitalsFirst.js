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
  const strToArr = str.split(' ');
  const strLower = [];
  const strUpper = [];

  for (let i = 0; i < strToArr.length; i++) {
    const ifStartNotLetter = /[a-zA-Z]/.test(strToArr[i][0]);

    if (!ifStartNotLetter) {
      continue;
    }

    if (strToArr[i].length === 0) {
      continue;
    }

    if (strToArr[i].toLowerCase() === strToArr[i]) {
      strLower.push(strToArr[i]);
    } else {
      strUpper.push(strToArr[i]);
    }
  }

  return strUpper.concat(strLower).join(' ');
}

module.exports = capitalsFirst;
