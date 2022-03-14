const treeMinValue = (root) => {
    if(root === null) return Infinity;

    const leftMin = treeMinValue(root.left);
    const rightMin = treeMinValue(root.right);

    return Math.min(root.val, leftMin, rightMin)
}