const isBalanced = function(root) {
  const dfs = function(node) {
    if (!node) {
      return 0;
    }
    const left = 1 + dfs(node.left);
    const right = 1 + dfs(node.right);
    if (Math.abs(left - right) > 1) {

      return Infinity;
    }

    return Math.max(left, right);
  }
    
    return dfs(root) === Infinity ? false : true;
};