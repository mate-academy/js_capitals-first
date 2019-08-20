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
  // const sortedArray = [];
  // const arrLower = [];

  const sortedArray = arr.filter(strs => {
    return strs.toLowerCase() !== strs;
  });
  const arrLower = arr.filter(strs => {
    return strs[0].match(/[a-zA-Z]/) && strs.toLowerCase() === strs;
  });
  // for (const word of arr) {
  //   if (word[0].match(/[a-zA-Z]/) && word[0] === word[0].toUpperCase()) {
  //     sortedArray.push(word);
  //   } else if (word[0].match(/[a-zA-Z]/)) {
  //     arrLower.push(word);
  //   }
  // }

  for (const word of arrLower) {
    sortedArray.push(word);
  }

  return sortedArray.join(' ');
}

module.exports = capitalsFirst;
