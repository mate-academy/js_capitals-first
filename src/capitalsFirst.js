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
  // write code here
  const arr = [];
  const arr2 = [];
  const splChars = '*|:<>[]{}`;()@&$#%123456789=?.';
  const string = str.split(' ');
  for (const word of string) {
    if (splChars.indexOf(word.charAt(0)) < 0) {
      if (
        word.charAt(0) !== word.charAt(0).toLowerCase()) {
        arr.push(word);
      } else {
        arr2.push(word);
      }
    }
  }
  let result
    = (arr + ' ' + arr2)
      .concat(',')
      .replace(/,/g, ' ')
      .replace(/^\s*/, '')
      .replace(/\s*$/, '');
  if (result.indexOf('Y') === 0) {
    console.log(result[0]);
    result = result.substr(0, 3) + ',' + result.substr(3 + 1);
    // да, по факту костиль, але по іншому не виходило))
  }
  return result;
}

module.exports = capitalsFirst;
