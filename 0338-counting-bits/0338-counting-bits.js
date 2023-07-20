/**
 * @param {number} n
 * @return {number[]}
 */
// 시간복잡도 O(n);
// 비트와이즈 AND 연산자 & 사용
const countBits = function(n) {
  const result = new Array(n+1).fill(0);
  
  for(let i=1; i<=n; i++) {
    result[i] = result[i & (i-1)] + 1;
  }
  
  return result;
};