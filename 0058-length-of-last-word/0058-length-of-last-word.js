/**
 * @param {string} s
 * @return {number}
 */
//시간복잡도: O(n)
const lengthOfLastWord = function(s) {
  const words = s.trim().split(' ');
  const lastWord = words[words.length - 1];
  
  return lastWord.length;
};