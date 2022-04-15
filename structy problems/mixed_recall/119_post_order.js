const postOrder = (root) => {
  const values = [];
  traverse(root, values);
  return values;
};

const traverse = (root, values) => {
  if(root === null) return;
  
  traverse(root.left, values);
  traverse(root.right, values);
  values.push(root.val);
}