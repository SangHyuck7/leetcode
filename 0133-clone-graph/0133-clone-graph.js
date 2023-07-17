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

// 알고리즘 이해부족 다시 풀어보기
function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
};


const cloneGraph = function(node) {
  if (node == null) {
  return null;
    }

  let visited = new Map();

  let stack = [node];

  visited.set(node, new Node(node.val, []));

  while (stack.length > 0) {
  let n = stack.pop();

  for (let neighbor of n.neighbors) {
    if (!visited.has(neighbor)) {
      visited.set(neighbor, new Node(neighbor.val, []));
                stack.push(neighbor)    }
            visited.get(n).neighbors.push(visited.get(neighbor));
  }
}

    return visited.get(node);
};