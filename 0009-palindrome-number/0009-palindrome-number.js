/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  return x.toString() === x.toString().split("").reverse().join("");
};