/**
 * @param {number[]} nums
 * @return {number[]}
 */
//시간복잡도: O(n)
const rearrangeArray = function(nums) {
  const positives = [];
  const negatives = [];
  const result = [];
  
  for (let num of nums) {
    if (num > 0) {
      positives.push(num);
    } else {
      negatives.push(num);
    }
  }
  
  const length = Math.max(positives.length, negatives.length);

  for (let i = 0; i < length; i++) {
    if (positives[i]) {
      result.push(positives[i]);
    }
    
    if (negatives[i]) {
      result.push(negatives[i]);
    }
  }
  
  return result;
};