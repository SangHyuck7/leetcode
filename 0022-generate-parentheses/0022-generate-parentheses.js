/**
 * @param {number} n
 * @return {string[]}
 */
//재귀로 가능한 조합 생성 Catalan number 풀이법 참조 
//시간 복잡도:  O(4^n / sqrt(n)) sqrt(n) = n의 제곱근 의미
const generateParenthesis = function(n) {
  const result = [];
  
  const generate = (current, left, right) => {
    if (current.length === 2 * n) {
      result.push(current);
      
      return;
    }
    
    if (left < n) {
      generate(current + '(', left + 1, right);
    }
    
    if (right < left) {
      generate(current + ')', left, right + 1);
    }
  }
  
  generate('', 0, 0);
  return result;
};