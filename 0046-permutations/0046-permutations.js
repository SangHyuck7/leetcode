/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//백트래킹 사용
//시간복잡도: O(n)
const permute = function(nums) {
  const result = [];
  
  const backTrack = function(path, option) {
    if (option.length === 0) {
      result.push([...path]);
      
      return;
    }
    
    for (let i = 0; i < option.length; i++) {
      const newOption = option.slice(0, i).concat(option.slice(i + 1));
      path.push(option[i]);
      backTrack(path, newOption);
      path.pop();
    }
  }
  
  backTrack([], nums);
  
  return result;
};