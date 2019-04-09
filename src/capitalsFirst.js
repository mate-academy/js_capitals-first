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
  var upperWords = [];
  var lowerWords = [];
  var otherWords = [];
  var buf = str.split(' ');
  for (var i = 0; i < buf.length; i++) {
    if (buf[i][0] >= 'A' && buf[i][0] <= 'Z') {
      upperWords.push(buf[i]);
    } else if (buf[i][0] >= 'a' && buf[i][0] <= 'z') {
      lowerWords.push(buf[i]);
    } else {
      otherWords.pop(buf[i]);
    }
  }
  return upperWords.concat(lowerWords).concat(otherWords).join(' ');
};

module.exports = capitalsFirst;
