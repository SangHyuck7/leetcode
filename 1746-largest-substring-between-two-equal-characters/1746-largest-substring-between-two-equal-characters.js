/**
 * @param {string} s
 * @return {number}
 */
 //시간복잡도: O(n)
const maxLengthBetweenEqualCharacters = function(s) {
  let maxLength = -1;
  const charIndexMap = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (charIndexMap[char] !== undefined) {
      const length = i - charIndexMap[char] - 1;
      maxLength = Math.max(maxLength, length);
    } else {
      charIndexMap[char] = i;
    }
  }

  return maxLength;
};