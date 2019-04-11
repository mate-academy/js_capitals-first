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
function isLowerCased(str) {
  return (str[0].toLowerCase() === str[0]) &&
  (str[0].toLowerCase() !== str[0].toUpperCase());
}
function isUpperCased(str) {
  return (str[0].toUpperCase() === str[0]) &&
  (str[0].toLowerCase() !== str[0].toUpperCase());
}
function capitalsFirst(str) {
  let arr = str.split(' ');
  let UpperStrArr = arr.filter(function(str) {
    return isUpperCased(str);
  });
  let LowerStrArr = arr.filter(function(str) {
    return isLowerCased(str);
  });
  let concatTwoArr = UpperStrArr.concat(LowerStrArr);
  str = concatTwoArr.join(' ');
  return str;
}
module.exports = capitalsFirst;
