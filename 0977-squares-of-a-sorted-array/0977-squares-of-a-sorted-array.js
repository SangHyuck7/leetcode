/**
 * @param {number[]} nums
 * @return {number[]}
 */
//시간복잡도 O(nlogn) 배열정렬 시간 복잡도 = O(nlogn) 제곱 연산부분 = O(n) 즉 O(nlogn) + O(n) = O(nlogn)
const sortedSquares = function(nums) {
  const arr =  nums.map(value => Math.pow(value,2));
  
  return arr.sort((a,b)=> a-b);
};