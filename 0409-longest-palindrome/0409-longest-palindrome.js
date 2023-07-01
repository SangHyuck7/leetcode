/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
  let answer = 0;
  const hashTable = {};
  
  for (const char of s) {
    hashTable[char] = (hashTable[char] || 0) + 1;
    
    if (hashTable[char] % 2 === 0) {
      answer += 2;
    }
  }
  const reslt = s.length > answer ? answer + 1 : answer
  
  return reslt;
};