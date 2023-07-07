/**
 * @param {number[]} nums
 * @return {number}
 */
//카데인 알고리즘
//시간복잡도: O(n) 
const maxSubArray = function(nums) {
  let max = -Infinity;
  let meh = 0;

    for (let i = 0; i < nums.length; i++) {
        meh += nums[i];
        if (meh > max) {
            max = meh;
        }
        if (meh < 0) {
            meh = 0;
        }
    }

    return max;
};