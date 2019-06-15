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
const capitalsFirst = somestring => {
  const str = somestring.split(' ');
  const capitalFirtArray = [];
  const simpleWordsArray = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i][0].match(/[^\d\sA-Z]/gi)) {
      continue;
    }

    if (str[i][0].match(/^[0-9]+([,.][0-9]+)?$/g)) {
      continue;
    }

    if (str[i][0] === str[i][0].toUpperCase()) {
      capitalFirtArray.push(str[i]);
    } else {
      simpleWordsArray.push(str[i]);
    }
  }

  return [...capitalFirtArray, ...simpleWordsArray].join(' ');
};

module.exports = capitalsFirst;
