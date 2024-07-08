/**
 * @param {string} boxes
 * @return {number[]}
 */
 // 브루트포스 접근 방식
// 시간초과로 인해 풀이 참고 두번의 패스로 풀이 (왼쪽 -> 오른쪽, 오른쪽 -> 왼쪽)
// 시간복잡도: O(n)
const minOperations = function(boxes) {
  const n = boxes.length;
  const answer = new Array(n).fill(0);
  
  let count = 0;
  let operations = 0;
  
  for (let i = 0; i < n; i++) {
    answer[i] += operations;
    count += boxes[i] === '1' ? 1 : 0;
    operations += count;
  }
  
  count = 0;
  operations = 0;
    
  for (let i = n - 1; i >= 0; i--) {
    answer[i] += operations;
    count += boxes[i] === '1' ? 1 : 0;
    operations += count;
  }
    
  return answer;
};