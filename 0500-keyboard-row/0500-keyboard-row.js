/**
 * @param {string[]} words
 * @return {string[]}
 */
//풀이참조
//시간본잡도: O(n)
const isInOneRow = function(word, row) {
  for (const char of word) {
    if (!row.has(char)) {
      return false;
    }
  }
  
  return true;
}

const findWords = function(words) {
  const row1 = new Set("qwertyuiop");
  const row2 = new Set("asdfghjkl");
  const row3 = new Set("zxcvbnm");
  
  const result = [];
  
  for (const word of words) {
    const lowerWord = word.toLowerCase();
    
    if (isInOneRow(lowerWord, row1) || isInOneRow(lowerWord, row2) || isInOneRow(lowerWord, row3)) {
      result.push(word);
    }
  }

  return result;
};