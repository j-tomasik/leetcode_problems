const binarySearchTreeIncludes = (root, target) => {
  if(root === null) return false;
  if(root.val === target) return true;
  
  
  if(target < root.val) {
    return binarySearchTreeIncludes(root.left, target)
  } else if (target > root.val) {
    return binarySearchTreeIncludes(root.right, target)
  }
  
  
};