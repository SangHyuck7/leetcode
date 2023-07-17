/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
//스택 자료구조 사용
//시간복잡도 O(n);
const dailyTemperatures = function(temperatures) {
  const stack = [];
  const result = new Array(temperatures.length).fill(0);
  
  for(let i = 0; i < temperatures.length; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      let index = stack.pop();
      result[index] = i - index;
  }
    stack.push(i);
  }

  return result;
};