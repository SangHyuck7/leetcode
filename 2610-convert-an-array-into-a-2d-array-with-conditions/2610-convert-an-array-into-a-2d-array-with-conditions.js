/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//시간복잡도 - 배열 생성:O(n^2), 빈도 계산: O(n)
const findMatrix = function(nums) {
  const frequency = {};
  const result = [];
  
  // 숫자의 빈도 계산
  for (let num of nums) {
    if (frequency[num] === undefined) {
      frequency[num] = 0;
    }
        
      frequency[num]++;
  }
  // 배열 생성
  for (let num of nums) {
    let placed = false;
    
    for (let row of result) {
      if (!row.includes(num)) {
        row.push(num);
        placed = true;
        
        break;
      }
    }
        
    if (!placed) {
      result.push([num]);
    }
  }
  
  return result;
};