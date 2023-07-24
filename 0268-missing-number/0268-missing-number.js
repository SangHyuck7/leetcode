/**
 * @param {number[]} nums
 * @return {number}
 */

//시간복잡도 O(n)
//가우스공식 사용
const missingNumber = function(nums) {
    const expectedSum = nums.length*(nums.length + 1)/2;
    let actualSum = 0;
  
    for (let num of nums) {
        actualSum += num;
    }
    return expectedSum - actualSum;
};