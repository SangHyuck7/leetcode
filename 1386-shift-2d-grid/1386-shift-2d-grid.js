/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
 //시간초과로인해 풀이 참고
 //시간복잡도: O(m * n)
const shiftGrid = function(grid, k) {
  const m = grid.length;
  const n = grid[0].length;

  const flatGrid = [];
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      flatGrid.push(grid[i][j]);
    }
  }
    
  k = k % (m * n);

  const shiftedGrid = [];
  const totalLength = m * n;
  
  for (let i = 0; i < totalLength; i++) {
    shiftedGrid.push(flatGrid[(totalLength - k + i) % totalLength]);
  }

  const result = [];
  
  for (let i = 0; i < m; i++) {
    const row = [];
    
    for (let j = 0; j < n; j++) {
      row.push(shiftedGrid[i * n + j]);
    }
    
    result.push(row);
  }
    
  return result;
};