/**
 * @param {number} n
 * @return {number[]}
 */
 //문제이해부족 사전적 정렬과 O(1) 공간부족도를 사용하는 부분에서 문제풀이 실패 풀이 참고
const lexicalOrder = function(n) {
  const result = [];

  function dfs(current) {
    if (current > n) return;

    result.push(current);
        
    for (let i = 0; i <= 9; i++) {
      if (current * 10 + i > n) break;
        dfs(current * 10 + i);
      }
    }
    
    for (let i = 1; i <= 9; i++) {
      if (i > n) break;
        
      dfs(i);
    }
    
  return result;
};