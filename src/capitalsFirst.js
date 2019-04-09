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
  const words = str.split(' ');
  const upperCaseWords = [];
  const lowerCaseWords = [];
  const FIRST_LOWERCASE_LETTER = 'a';
  const LAST_LOWERCASE_LETTER = 'z';
  const filteredWords = words.filter((word) => {
    return isLowercaseLetter(word) <= LAST_LOWERCASE_LETTER &&
        isLowercaseLetter(word) >= FIRST_LOWERCASE_LETTER;
  });
  filteredWords.map((word) => {
    if (isUpperCase(word[0])) {
      upperCaseWords.push(word);
    } else {
      lowerCaseWords.push(word);
    }
  });
  return upperCaseWords.concat(lowerCaseWords).join(' ');
}

function isUpperCase(ch) {
  return ch.toUpperCase() === ch;
}
function isLowercaseLetter(wd) {
  return wd[0].toLowerCase();
}

module.exports = capitalsFirst;
