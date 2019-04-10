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

function isUpperCase(firstLetter) {
  return (firstLetter >= 'A' && firstLetter <= 'Z');
}

function isLowerCase(firstLetter) {
  return (firstLetter >= 'a' && firstLetter <= 'z');
}

function capitalsFirst(str) {
  let lowerCaseWords = [];
  let upperCaseWords = [];
  let inputWords = str.split(' ');
  let firstLetter = '';

  inputWords.forEach(function(item, i, arr) {
    firstLetter = item[0];
    if (isUpperCase(firstLetter)) {
      upperCaseWords.push(item);
    } else if (isLowerCase(firstLetter)) {
      lowerCaseWords.push(item);
    }
  });
  return [...upperCaseWords, ...lowerCaseWords].join(' ');
}

module.exports = capitalsFirst;
