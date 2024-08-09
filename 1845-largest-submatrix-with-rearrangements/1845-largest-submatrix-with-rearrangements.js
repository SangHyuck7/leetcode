/**
 * @param {number[][]} matrix
 * @return {number}
 */
 //풀이 실패로 풀이 참고
 //시간복잡도: 누적된 1의 높이 계산 O(m * n) 각 행을 내림차순으로 정렬 O(m * n * log n) 최대 면적 계산 O(m * n)
const largestSubmatrix = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  let maxArea = 0;

  // 1의 누적된 높이 계산
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 1) {
        matrix[i][j] += matrix[i - 1][j];
      }
    }
  }

  // 각 행을 내림차순으로 정렬하고 최대 면적 계산
  for (let i = 0; i < m; i++) {
    matrix[i].sort((a, b) => b - a);
  
    for (let j = 0; j < n; j++) {
      // j + 1 은 너비이고, matrix[i][j]는 높이
      maxArea = Math.max(maxArea, matrix[i][j] * (j + 1));
    }
  }

  return maxArea;
};