/**
 * @param {number[]} colors
 * @return {number}
 */
//시간복잡도: O(n)
const numberOfAlternatingGroups = function(colors) {
  let n = colors.length;
  let count = 0;
  
  for (let i = 0; i < n; i++) {
    let current = colors[i];
    let next = colors[(i + 1) % n]; // % n : 인덱스를 순환시키는 역할 인덱스가 배열의 길이 n을 초과할 경우, 다시 0부터 시작
    let nextNext = colors[(i + 2) % n];

    if (current === nextNext && current !== next) {
      count++;
    }
  }
  
  return count;
};