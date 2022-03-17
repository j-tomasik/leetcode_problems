const treeLevels = (root) => {
  if(root === null) return [];
  
  let levels = [];
  
  let stack = [ {node: root, level: 0} ]
  
  while(stack.length > 0){
    const { node, level } = stack.pop();
    
    if(levels.length === level) {
      levels.push([ node.val ])
    } else {
      levels[level].push(node.val)
    }
    
    if(node.right) stack.push({ node:node.right, level: level + 1})
    if(node.left) stack.push({ node:node.left, level: level + 1})
    
  }
  
  
  
  return levels;
};