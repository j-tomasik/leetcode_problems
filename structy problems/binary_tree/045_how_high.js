const howHigh = (node) => {
 if(node === null) return -1;
  
  const leftHeight = howHigh(node.left);
  const rightHeight = howHigh(node.right);
  
  return 1 + Math.max(leftHeight, rightHeight);  
  
};