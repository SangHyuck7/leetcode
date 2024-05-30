/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
//p에서 발견되는 첫요소를 제일 앞으로 옮기는 알고리즘
//시간복잡도: O(n)
const processQueries = function(queries, m) {
  const P = Array.from({ length: m }, (_, i) => i + 1);
  const result = [];

  for (let i = 0; i < queries.length; i++) {
    const value = queries[i];
    const position = P.indexOf(value);
    
    result.push(position);
    P.splice(position, 1);
    P.unshift(value);
  }
  
  return result;
};