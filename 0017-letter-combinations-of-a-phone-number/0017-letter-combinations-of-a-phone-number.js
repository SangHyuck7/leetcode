/**
 * @param {string} digits
 * @return {string[]}
 */

// 자료구조: 백트레킹 사용 풀이에 있는 자료구조 참조
// 시간복잡도: O(3^N × 4^M) N: 입력 문자열에 포함된 숫자 2,3의 개수 M: 입력 문자열에 포함된 7~9 개수 - 시간복잡도 참고 
const letterCombinations = function(digits) {
  if (!digits || digits.lenght === 0 ) return [];
  
  const PhonePad = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  
  const result = [];
  
  const backtrack = (index, currentCombination) => {
    if (index === digits.length) {
      result.push(currentCombination);
      
      return;
    }
    
    const letters = PhonePad[digits[index]];
      for (let i = 0; i < letters.length; i++) {
      backtrack(index + 1, currentCombination + letters[i]);
    }
  }
  backtrack(0, '');
    
  return result;
};