const treeValueCount = (root, target) => {
  if(!root) return 0;
  
  let counter = 0;
  const queue = [root];
  
  while(queue.length > 0){
    const current = queue.shift();
    if(current.val === target) counter += 1;
    
    if(current.left) queue.push(current.left);
    if(current.right) queue.push(current.right);
  }
  
  return counter;
};
