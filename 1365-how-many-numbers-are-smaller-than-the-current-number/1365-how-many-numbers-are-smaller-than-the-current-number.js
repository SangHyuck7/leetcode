/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 브루트 포스 방법 (각요소를 다른 모든 요소와 비교하여 작슨 숫자의 개수 카운트)
// 시간복잡도: O(n log n)
const smallerNumbersThanCurrent = function(nums) {

  const sorted = [...nums].sort((a, b) => a - b);

  const rankMap = new Map();
  
  for (let i = 0; i < sorted.length; i++) {
    if (!rankMap.has(sorted[i])) {
      rankMap.set(sorted[i], i);
    }
  }
  
  const result = nums.map(num => rankMap.get(num));
  
  return result;
};