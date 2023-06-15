const invertTree = function(root) {
    const reverseNode = node => {
        if (node == null) {
            return null
        }
        reverseNode(node.left);
        reverseNode(node.right);
        let holdLeft = node.left;
        node.left = node.right;
        node.right = holdLeft;
        return node;
    }

    return reverseNode(root);
};