/**
 * @param {string} s
 * @return {number}
 */
 //ASCII값 문제
 //시간 복잡도: O(n)
const scoreOfString = function(s) {
      let score = 0;

  for (let i = 0; i < s.length - 1; i++) {
    let diff = Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    score += diff;
  }

  return score;  
};