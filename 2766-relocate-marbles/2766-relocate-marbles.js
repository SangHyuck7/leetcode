/**
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */

 // 다시 풀어보기 
const relocateMarbles = function(nums, moveFrom, moveTo) {
 let obj = {}
  for(let i = 0 ; i < nums.length ; i++){obj[nums[i]] = true}
  for(let i = 0 ; i < moveFrom.length ; i++){
    obj[moveFrom[i]] = false
      obj[moveTo[i]] = true
    }
    let ans = []
    for(x in obj){
        if(obj[x]){ans.push(x)}
    }
    return ans
};