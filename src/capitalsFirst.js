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
function isUppercaseLetter(str) {
  return (str >= 'A' && str <= 'Z');
}

function isLowercaseLetter(str) {
  return (str >= 'a' && str <= 'z');
}

function capitalsFirst(str) {
  const initialArray = str.split(' ');
  const uppercaseLetters = [];
  const lowercaseLetters = [];

  initialArray.forEach(function(i) {
    if (isLowercaseLetter(i[0])) {
      lowercaseLetters.push(i);
    }
    if (isUppercaseLetter(i[0])) {
      uppercaseLetters.push(i);
    }
  });
  return [...uppercaseLetters, ...lowercaseLetters].join(' ');
}

module.exports = capitalsFirst;
