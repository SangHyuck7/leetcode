/**
 * @param {number} rowIndex
 * @return {number[]}
 */
//시간복잡도: O(n^2)
const getRow = function(rowIndex) {
  let row = [1];
  
  for (let i = 1; i <= rowIndex; i++) {
    const newRow = [1];
    
    for (let j = 1; j < i; j++) {
      newRow[j] = row[j - 1] + row[j];
    }
    
    newRow.push(1);
    row = newRow;
  }
  
  return row;
};