/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
//백트래킹 사용 풀이법 참조
//시작복잡도: O(n)
const combinationSum = function(candidates, target) {
  const result = [];
  
  const backtrack = (remaining, combination, startIndex) => {
    if (remaining < 0)  return;
    
    if (remaining === 0) {
      result.push([...combination]);
      return;
    }
    
    for (let i = startIndex; i < candidates.length; i++) {
      combination.push(candidates[i]);
      backtrack(remaining - candidates[i], combination, i);
      combination.pop();
    }
  }
  
  backtrack(target, [], 0);
  return result;
};