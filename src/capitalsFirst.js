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
  let upperWords = [];
  let lowerWords = [];
  str.split(' ').map((el) => {
    return isNaN(el[0]) && el[0] !== '='
      ? el[0] === el[0].toUpperCase()
        ? upperWords.push(el) : lowerWords.push(el) : false;
    // if (el[0] === el[0].toUpperCase() && isNaN(el[0]) && el[0] !== '=') {
    //   upperWords.push(el);
    // } else if (isNaN(el[0]) && el[0] !== '=') {
    //   lowerWords.push(el);
    // };
  });
  upperWords.push(...lowerWords);
  return upperWords.join(' ');
}

module.exports = capitalsFirst;
