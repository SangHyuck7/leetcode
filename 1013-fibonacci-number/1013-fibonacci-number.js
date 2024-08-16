/**
 * @param {number} n
 * @return {number}
 */
 //재귀적으로 접근
 //시간복잡도: O(2^n)
const fib = function(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  
  return fib(n - 1) + fib(n - 2);
};