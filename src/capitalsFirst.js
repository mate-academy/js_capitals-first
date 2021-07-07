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
  /* Вариант 1.
  const upperCaseArr = str.split(' ').filter(el => el[0].match(/\b[A-Z]/g));
  const lowCaseArr = str.split(' ').filter(el => el[0].match(/\b[a-z]/g));
  return ([...upperCaseArr, ...lowerCaseArr].join(' ')); */

  // Вариант 2. Свести все в один цикл.
  const upperCaseArr = [];
  const lowerCaseArr = [];
  const arr = str.split(' ');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(/\b^[A-Z]/g)) {
      upperCaseArr.push(arr[i]);
    } else if (arr[i].match(/\b^[a-z]/g)) {
      lowerCaseArr.push(arr[i]);
    }
  }
  return ([...upperCaseArr, ...lowerCaseArr].join(' '));
}

module.exports = capitalsFirst;
