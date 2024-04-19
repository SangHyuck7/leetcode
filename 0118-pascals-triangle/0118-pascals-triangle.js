/**
 * @param {number} numRows
 * @return {number[][]}
 */
//시간복잡도: O(n^2)
const generate = function(numRows) {
  let triangle = [];

  for (let i = 0; i < numRows; i++) {
    let row = new Array(i + 1).fill(1);

    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    triangle.push(row);
  }

  return triangle;
};