/**
 * @param {string[]} bank
 * @return {number}
 */
// 시간초과로 인한 풀이 참고
// 시간복잡도: O(n)
const numberOfBeams = function(bank) {
  const deviceCounts = [];
  
  for (let row of bank) {
    let count = (row.match(/1/g) || []).length;
    
    if (count > 0) {
      deviceCounts.push(count);
    }
  }
  
  let totalBeams = 0;
  
  for (let i = 1; i < deviceCounts.length; i++) {
    totalBeams += deviceCounts[i - 1] * deviceCounts[i];
  }

 return totalBeams;
};