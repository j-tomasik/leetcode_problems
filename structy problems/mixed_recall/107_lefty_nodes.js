const leftyNodes = (root, lvl,) => {
  const values = [];
 
  traverse(root, 0, values);
  
  return values;
};

const traverse = (root, level, values) => {
  if(root === null) return;
  
  if (values.length === level) {
    values.push(root.val)
  }
  
  traverse(root.left, level + 1, values);
  traverse(root.right, level + 1, values);
  
}