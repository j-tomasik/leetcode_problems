const isBinarySearchTree = (root) => {
  const values = [];
  
  inOrderTraversal(root, values);
  
  return isSorted(values);
  
  
};

const inOrderTraversal = (root, values) => {
  if(root === null) return;
  inOrderTraversal(root.left, values);
  values.push(root.val);
  inOrderTraversal(root.right, values);
}

const isSorted = (numbers) => {
  for(let i = 0; i < numbers.length - 1; i ++) {
    const next = numbers[i + 1]
    const current = numbers[i]
    if(current > next) return false;
  }
  return true;
}
