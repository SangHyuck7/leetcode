/**
 * @param {number} num
 * @return {number}
 */
 //시간복잡도: O(log n) n = num
const addDigits = function(num) {
  while (num >= 10) {
    let sum = 0;
  
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
  
    num = sum;
  }
  
  return num;
};