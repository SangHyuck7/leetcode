/**
 * @param {number[][]} grid
 * @return {number}
 */
//시간복잡도: O(rows * cols)
const islandPerimeter = function(grid) {
  let perimeter = 0;

  const rows = grid.length;
  const cols = grid[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        if (i === 0 || grid[i - 1][j] === 0) perimeter++;
        if (i === rows - 1 || grid[i + 1][j] === 0) perimeter++;
        if (j === 0 || grid[i][j - 1] === 0) perimeter++;
        if (j === cols - 1 || grid[i][j + 1] === 0) perimeter++;
      }
    }
  }

  return perimeter;
};