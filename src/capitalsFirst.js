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
  let upperStrArr = [];
  let lowerStrArr = [];
  let arrWords = str.split(' ');
  for (let i = 0; i < arrWords.length; i++) {
  /*
 Перевірка того, чи належить символ до діапазону спецсимволів.
 Не переробляю логіку і обмежуюсь коментарем. Не використовую перевірку
 належності до діапазону А..Z, оскільки ТА раніше радив інший алгоритм.
*/
    if (arrWords[i][0].toLowerCase() === arrWords[i][0].toUpperCase()) {
      continue;
      /*
  Перевірка того, чи належить символ до строчних за регістром.
*/
    } else if (arrWords[i][0].toLowerCase() === arrWords[i][0]) {
      lowerStrArr.push(arrWords[i]);
    } else {
      upperStrArr.push(arrWords[i]);
    }
  }
  return upperStrArr.concat(lowerStrArr).join(' ');
}
module.exports = capitalsFirst;
