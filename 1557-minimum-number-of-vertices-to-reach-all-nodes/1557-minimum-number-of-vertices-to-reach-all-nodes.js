/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
//유황 비순환 그래프 에서 모든 노드에 도달할 수 있는 최소한의 시작 노드 집합 찾는 문제 - 진입 차수 활용하는 문제
//시간초과로 인한 문제풀이 실패로 풀이 참고
const findSmallestSetOfVertices = function(n, edges) {
  const inDegree = new Array(n).fill(0);
  
  for (const [from, to] of edges) {
    inDegree[to]++;
  }
  
  const result = [];
  
  for (let i = 0; i < n; i++) {
    if (inDegree[i] === 0) {
      result.push(i);
    }
  }

  return result;
};