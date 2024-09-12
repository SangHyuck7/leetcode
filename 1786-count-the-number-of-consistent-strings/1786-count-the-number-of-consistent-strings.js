/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 //시간복잡도: O(n) n = words 수
const countConsistentStrings = function(allowed, words) {
  const allowedSet = new Set(allowed);
  let count = 0;
    
  for (let word of words) {
    let isConsistent = true;
  
    for (let char of word) {
      if (!allowedSet.has(char)) {
        isConsistent = false;
        break;
      }
    }
        
    if (isConsistent) {
      count++;
    }
  }
    
  return count;
};