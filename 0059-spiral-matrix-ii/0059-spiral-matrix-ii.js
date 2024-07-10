/**
 * @param {number} n
 * @return {number[][]}
 */
 // 풀이참조
 // 시간복잡도: O(n)
const generateMatrix = function(n) {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));

  let num = 1; // 채울 숫자
  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;

  while (num <= n * n) {
    // 위쪽 행을 오른쪽으로 채운다
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }
    top++;

    // 오른쪽 열을 아래로 채운다
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    right--;

    // 아래쪽 행을 왼쪽으로 채운다
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num++;
    }
    bottom--;

    // 왼쪽 열을 위로 채운다
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num++;
    }
    left++;
  }

  return matrix;
};