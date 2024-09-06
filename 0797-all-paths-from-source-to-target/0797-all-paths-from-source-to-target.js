/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
//유향 비순환 그래프 문제 DFS, 백트레킹을 사용하여 문제 풀이 [풀이 참고]
//시간복잡도: O(노드수 + 간선수)
const allPathsSourceTarget = function(graph) {
  const result = [];
  const path = [];
  
  function dfs(node) {
    path.push(node);

    if (node === graph.length - 1) {
      result.push([...path]);
    } else {
      for (const nextNode of graph[node]) {
        dfs(nextNode);
      }
    }

    path.pop();
  }

  dfs(0);
  return result;
};