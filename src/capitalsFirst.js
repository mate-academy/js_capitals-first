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
  const finishArr = [];
  const lettersArr = [];
  const notOurChars = '~!@#$%^&*()_+=-1234567890.+-*/`\\|.,<>?';

  arr.forEach((item) => {
    if (notOurChars.indexOf(item[0]) === -1) {
      lettersArr.push(item);
    }
  });

  lettersArr.forEach(item => {
    if (item[0] === item[0].toUpperCase()) {
      finishArr.push(item);
    }
  });

  lettersArr.forEach(item => {
    if (item[0] === item[0].toLowerCase()) {
      finishArr.push(item);
    }
  });

  const finishStr = finishArr.join(' ');
  return finishStr;
}

module.exports = capitalsFirst;
