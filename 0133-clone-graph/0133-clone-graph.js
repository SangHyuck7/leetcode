/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
//해쉬와 dfs 를 사용하여 문제 풀이
//시간 복잡도: O(n + m) n: 노드, m은 노드의 간선
const cloneGraph = function(node) {
  if (!node) {
    return null;
  }

  const map = new Map();

  function dfs(node) {
    if (map.has(node)) {
      return map.get(node);
    }

    const newNode = new Node(node.val);
    map.set(node, newNode);

    for (const neighbor of node.neighbors) {
      newNode.neighbors.push(dfs(neighbor));
    }

    return newNode;
  }
  
  return dfs(node);
};