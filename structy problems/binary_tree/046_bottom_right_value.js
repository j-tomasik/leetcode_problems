const bottomRightValue = (root) => {
  // todo
  const queue = [root];
  
  while(queue.length > 0) {
    const current = queue.shift();
    
    if(current.left) queue.push(current.left);
    if(current.right) queue.push(current.right);
    
    if(queue.length === 0 && current.left === null && current.right === null){
      return current.val;
    }
  }
};