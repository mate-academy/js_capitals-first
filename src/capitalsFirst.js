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
  const arr = str.split(' ');
  const arrTwo = [];
  const arrThree = [];
  arr.forEach(function(i) {
    if (i[0].toUpperCase() === i[0] &&
       i[0] !== '=' && isNaN(parseInt(i[0]))) {
      arrTwo.push(i);
    } else if (i[0].toUpperCase() !== i[0] &&
      i[0] !== '=' && isNaN(parseInt(i[0]))) {
      arrThree.push(i);
    }
  });
  return arrTwo.concat(arrThree).join(' ');
}

module.exports = capitalsFirst;
