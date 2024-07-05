/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
// 풀이 방법 참조 이해 완료
// 시간복잡도: O(m*n) 그리드의 크기
const onesMinusZeros = function(grid) {
  const m = grid.length; //세로길이
  const n = grid[0].length; //가로길이
  
  //각 행과 열의 1의 개수와 0의 개수를 저장하는 배열
  const onesRow = new Array(m).fill(0);
  const onesCol = new Array(n).fill(0);
  const zerosRow = new Array(m).fill(0);
  const zerosCol = new Array(n).fill(0);
  
  //계산할 그리드 생성
  const diff = Array.from({ length: m }, () => new Array(n).fill(0));
  
  // 각 행과 열의 1의 개수와 0의 개수 계산
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        onesRow[i]++;
        onesCol[j]++;
      } else {
        zerosRow[i]++;
        zerosCol[j]++;
      }
    }
  }
  
  //저장한 값으로 값계산후 그리드 변경
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      diff[i][j] = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j];
    }
  }
  
  return diff;
};