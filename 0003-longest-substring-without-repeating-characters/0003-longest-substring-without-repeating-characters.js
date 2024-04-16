/**
 * @param {string} s
 * @return {number}
 */

//해설 참고 풀이 실패 정확한 이해 필요
//슬라이딩 윈도우 방법론
//시간 복잡도: O(n)

const lengthOfLongestSubstring = function(s) {
  const map = new Map();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];

    if (map.has(currentChar)) {
      left = Math.max(left, map.get(currentChar) + 1);
    }

    map.set(currentChar, right);

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};