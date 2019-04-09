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
  const filtred = function(elem) {
    return (
      (elem.charAt(0) >= 'a' && elem.charAt(0) <= 'z') ||
      (elem.charAt(0) >= 'A' && elem.charAt(0) <= 'Z')
    );
  };
  let arr = str.split(' ').filter(filtred);
  let newArr = str.toLowerCase().split(' ');
  let lowerCase = '';
  let upperCase = '';

  for (let i = 0; i < arr.length; i++) {
    if (newArr.includes(arr[i]) === false) {
      upperCase += arr[i] + ' ';
    } else {
      lowerCase += arr[i] + ' ';
    }
  }

  let result = (upperCase + lowerCase).trim();
  return result;
}

module.exports = capitalsFirst;
