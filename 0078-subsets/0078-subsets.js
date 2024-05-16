/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//백트래킹 사용
//시간복잡도: O(n^2)
const subsets = function(nums) {
  const result = [];
  
  const backtrack = function (start, path) {
    result.push([...path]);
    
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  };
  
  backtrack(0, []);
  
  return result;
};