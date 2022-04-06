const lowestCommonAncestor = (root, val1, val2) => {
  const path1 = findAncestors(root, val1);
  const path2 = findAncestors(root, val2);
  const set2 = new Set(path2);
  
  for(let val of path1) {
    if(set2.has(val)) {
      return val;
    }
  }
};

const findAncestors = (root, target) => {
  if (root === null) return null;
  
  if(root.val === target) return [root.val];
  
  
  
  const leftPath = findAncestors(root.left, target);
  if (leftPath !== null) {
    leftPath.push(root.val);
    return leftPath;
  }
  
  const rightPath = findAncestors(root.right, target);
  if (rightPath !== null) {
    rightPath.push(root.val);
    return rightPath;
  }
  
  return null;
}