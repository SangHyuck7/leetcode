/**
 * @param {number[]} height
 * @return {number}
 */
 //자료구조: 투포인터 사용
 //시간복잡도: O(n)
const maxArea = function(height) {
  let maxWater = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const waterHeigth = Math.min(height[left], height[right]); //물이 넘칠 수 있기 떄문에 작은 수 비교
    const waterWidth = right - left;
    const area = waterHeigth *  waterWidth;

    maxWater = Math.max(maxWater, area);

    if (height[left] < height[right]) {
        left++;
    } else {
        right--;
    }
  }

  return maxWater;
};