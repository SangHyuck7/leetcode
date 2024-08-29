/**
 * @param {number[][]} grid
 * @return {number}
 */
//풀이실패로 해설 참조 다시 풀어볼예정
//시간복잡도:  O(n^2) 
const maxIncreaseKeepingSkyline = function(grid) {
  const n = grid.length;
  let rowMax = Array(n).fill(0);
  let colMax = Array(n).fill(0);

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      rowMax[r] = Math.max(rowMax[r], grid[r][c]);
      colMax[c] = Math.max(colMax[c], grid[r][c]);
    }
  }

  let totalIncrease = 0;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const maxHeight = Math.min(rowMax[r], colMax[c]);
      totalIncrease += maxHeight - grid[r][c];
    }
  }

  return totalIncrease;
};