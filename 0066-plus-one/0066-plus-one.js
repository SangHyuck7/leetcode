/**
 * @param {number[]} digits
 * @return {number[]}
 */
 //시간복잡도: O(n)
const plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  
  digits.unshift(1);
  return digits;
};