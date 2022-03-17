const leafList = (root) => {
  if (root === null) return [];
  let stack = [root];
  let leaves = [];
  
  while(stack.length > 0) {
    let current = stack.pop();
    
    if(current.left === null && current.right === null) {
      leaves.push(current.val);
    }
    
    if(current.right) stack.push(current.right);
    if(current.left) stack.push(current.left);
  }
  return leaves;
};