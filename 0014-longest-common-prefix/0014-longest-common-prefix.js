/**
 * @param {string[]} strs
 * @return {string}
 */
//시간복잡도 O(N*M) N은 strs 배열의 길이 M은 strs 배열에 있는 가장 긴 단어의 길이

const longestCommonPrefix = function(strs) {
  let result = "";
  
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j][i] !== strs[j+1][i]) return result;
    }
    result += strs[0][i];
  }
  return result;
};


