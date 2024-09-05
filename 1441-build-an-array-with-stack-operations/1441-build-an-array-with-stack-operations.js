/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
//문제이해 부족과 시간복잡도가 매우높아 풀이 실패로 해설참고
//시간복잡도: O(n)
const buildArray = function(target, n) {
  const result = [];
  let current = 1;
  let i = 0;

  while (current <= n && i < target.length) {
    result.push("Push");

    if (target[i] === current) {
      i++;
    } else {
      result.push("Pop");
    }

    current++;
  }

  return result;
};