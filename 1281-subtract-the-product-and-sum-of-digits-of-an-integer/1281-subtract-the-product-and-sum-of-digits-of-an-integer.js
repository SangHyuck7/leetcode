/**
 * @param {number} n
 * @return {number}
 */

//시간 복잡도: O(정수 n의 자릿수)
const subtractProductAndSum = function(n) {
  let digits = n.toString().split('');

  let product = 1;
  let sum = 0;
    
  for (let digit of digits) {
    let num = parseInt(digit);
    product *= num;
    sum += num;
  }
    
  return product - sum;
};