/**
 * @param {number[]} nums
 * @return {number}
 */
 //등차수열 확인
 //currentStreak 변수는 연속된 등차 수열의 길이를 추적하 수열이 얼마나 길게 이어지는지 확인
 //시간복잡도:O(n)
const numberOfArithmeticSlices = function(nums) {
  if (nums.length < 3) return 0;

  const n = nums.length;
  let count = 0;
  let currentStreak = 0;

  for (let i = 2; i < n; i++) {
    if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
      currentStreak += 1;
      count += currentStreak;
    } else {
    currentStreak = 0;
    }
  }
  
  return count;
};