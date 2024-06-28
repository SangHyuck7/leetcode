/**
 * @param {string} s
 * @return {number}
 */
//시간복잡도: O(n)
const maxDepth = function(s) {
  let maxDepth = 0;
  let currentDepth = 0;
    
  for (let char of s) {
    if (char === '(') {
      currentDepth += 1;
      
      if (currentDepth > maxDepth) {
        maxDepth = currentDepth;
      }
    } else if (char === ')') {
      currentDepth -= 1;
    }
  }
    
  return maxDepth;
};