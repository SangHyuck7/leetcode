/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// 시간복잡도: O(n^2)
const rotate = function(matrix) {
  const n = matrix.length;
  
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
};