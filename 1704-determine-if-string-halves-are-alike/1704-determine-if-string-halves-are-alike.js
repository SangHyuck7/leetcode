/**
 * @param {string} s
 * @return {boolean}
 */
//문자열을 반으로 잘라 모음갯수 확인
//시간복잡도: O(n)
const halvesAreAlike = function(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const halfLength = s.length / 2;
  const a = s.slice(0, halfLength);
  const b = s.slice(halfLength);

  const countVowels = (str) => {
    let count = 0;
    
    for (let char of str) {
      if (vowels.has(char)) {
        count++;
      }
    }
  
    return count;
  };

  return countVowels(a) === countVowels(b);
};