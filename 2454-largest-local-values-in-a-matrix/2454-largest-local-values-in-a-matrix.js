/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
 // 시간초과 로인한 문제 풀이 실패 문제 이해 부족 다시 풀어 봐야함
 // 해설참고하여 문제 풀이
 // 시간복잡도: O(n*2)
const largestLocal = function(grid) {
  const n = grid.length;
  const maxLocal = Array.from({ length: n - 2 }, () => Array(n - 2).fill(0));
    
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      let maxVal = -Infinity;
        
        for (let x = i; x < i + 3; x++) {
          for (let y = j; y < j + 3; y++) {
            maxVal = Math.max(maxVal, grid[x][y]);
          }
        }
        
        maxLocal[i][j] = maxVal;
    }
  }
    
  return maxLocal;
};