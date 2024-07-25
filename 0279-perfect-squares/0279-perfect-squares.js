/**
 * @param {number} n
 * @return {number}
 */
 //문제풀이 실패 + 해설을 참고 했지만 이해 부족
 //시간복잡도: O(log(n))
const numSquares = function(n) {
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  
  return dp[n];
};