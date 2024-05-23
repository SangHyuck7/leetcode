/**
 * @param {string} n
 * @return {number}
 */
//시간복잡도: O(n)
const minPartitions = function(n) {
  let maxDigit = 0;
  
  for (let i = 0; i < n.length; i++) {
    const digit = parseInt(n[i], 10);
    
    if (digit > maxDigit) {
      maxDigit = digit;
    }
    
    if (maxDigit === 9) {
      break;
    }
  }
  
  return maxDigit;
};