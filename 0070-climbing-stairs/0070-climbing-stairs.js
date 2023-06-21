/**
 * @param {number} n
 * @return {number}
 */
//피노나치 수열
const climbStairs = function(n) {
  if (n <= 2) return n;
  const steps = [0, 1, 2];
  
  for (let i = 3; i <= n; i++) {
    steps[i] = steps[i - 1] + steps[i - 2];
  }

  return steps[n];
};