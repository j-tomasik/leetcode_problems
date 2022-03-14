// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeSum = (root) => {
  if(!root) return 0;
  
  
  let sum = 0;
  
  const stack = [root];
  
  while(stack.length > 0) {
    const current = stack.pop();
    sum += current.val;
    
    if(current.right) stack.push(current.right);
    if(current.left) stack.push(current.left);
    
  }
  
  return sum;
};