/**
 * @param {number[]} score
 * @return {string[]}
 */
 //시간복잡도: O(n)
const findRelativeRanks = function(score) {
  const scoreIndex = score.map((s, i) => [s, i]);
  scoreIndex.sort((a, b) => b[0] - a[0]);

  const result = new Array(score.length);
  
  for (let i = 0; i < scoreIndex.length; i++) {
    if (i === 0) {
      result[scoreIndex[i][1]] = "Gold Medal";
    } else if (i === 1) {
      result[scoreIndex[i][1]] = "Silver Medal";
    } else if (i === 2) {
      result[scoreIndex[i][1]] = "Bronze Medal";
    } else {
      result[scoreIndex[i][1]] = (i + 1).toString();
    }
  }

  return result;
};