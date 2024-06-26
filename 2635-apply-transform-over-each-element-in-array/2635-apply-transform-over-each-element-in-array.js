/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
//시간복잡도: O(n)
const map = function(arr, fn) {
  let result = [];
    
  for (let i = 0; i < arr.length; i++) {
    let transformedValue = fn(arr[i], i);
        
    result.push(transformedValue);
  }
  
  return result;
};