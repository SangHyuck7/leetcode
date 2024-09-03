/**
 * @param {number} n
 * @return {string[]}
 */
 // 문제이해 부족 + 시간 초과로 인한 해설참고
const validStrings = function(n) {
  const results = [];

  function backtrack(current) {
    if (current.length === n) {
      results.push(current);
  
      return;
    }

    backtrack(current + '1');

    if (current.length === 0 || current[current.length - 1] === '1') {
      backtrack(current + '0');
    }
  }

  backtrack('');
  
  return results;
};