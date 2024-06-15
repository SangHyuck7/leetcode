/**
 * @param {number[]} nums
 * @return {number[]}
 */
//문제 이해 부족
//시간복잡도: O(n) 
const leftRightDifference = function(nums) {
  const n = nums.length;
  const leftSum = new Array(n).fill(0);
  const rightSum = new Array(n).fill(0);
  const answer = new Array(n).fill(0);

  // 왼쪽 합 배열 계산
  for (let i = 1; i < n; i++) {
    leftSum[i] = leftSum[i - 1] + nums[i - 1];
  }

  // 오른쪽 합 배열 계산
  for (let i = n - 2; i >= 0; i--) {
    rightSum[i] = rightSum[i + 1] + nums[i + 1];
  }

  // 결과 배열
  for (let i = 0; i < n; i++) {
    answer[i] = Math.abs(leftSum[i] - rightSum[i]);
  }

  return answer;
};