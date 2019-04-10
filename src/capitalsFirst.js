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
 * capitalsFirst(1, 2) === 3
 * capitalsFirst(1, 11) === 12
 *
 * @param {string} str
 *
 * @returns {string} - string with uppercase words in front
 */
function capitalsFirst(str) {
  // write code here
  let transformedString = str.split(' ');
  let upperArray = [];
  let lowerArray = [];

  transformedString.forEach(element => {
    if (isUpper(element[0])) {
      upperArray.push(element);
    } else if (isLower(element[0])) {
      lowerArray.push(element);
    }
  });
  // Early i used concat-method in return
  return [...upperArray, ...lowerArray].join(' ');
}

const isLetter = s => s.toUpperCase() !== s.toLowerCase();
const isUpper = symbol => symbol.toUpperCase() === symbol && isLetter(symbol);
const isLower = symbol => symbol.toLowerCase() === symbol && isLetter(symbol);

module.exports = capitalsFirst;
