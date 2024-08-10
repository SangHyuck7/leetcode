/**
 * @param {string} s
 * @return {number}
 */
 //시간복잡도: O(n)
const countAsterisks = function(s) {
  let inPair = false;
  let count = 0;

  for (let char of s) {
    if (char === '|') {
      inPair = !inPair;  // 파이프가 나타나면 쌍의 상태를 반전시킴
    } else if (char === '*' && !inPair) {
      count++;  // 쌍 밖에서 '*'를 찾으면 카운트 증가
    }
  }

  return count;
};