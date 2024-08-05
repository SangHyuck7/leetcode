/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
//시간복잡도: O(n)
const findPermutationDifference = function(s, t) {
  let differenceIndex = 0;
  
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let indexInT = t.indexOf(char);
    differenceIndex += Math.abs(i - indexInT);
  }
  
  return differenceIndex;
};