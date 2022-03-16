const allTreePaths = (root) => {
  if(root === null) return [];
  if (root.left === null & root.right === null) return [[root.val]];
  
  let paths = [];
  
  let leftPath = allTreePaths(root.left);
    for(let subpath of leftPath){
      paths.push([root.val, ...subpath])
    }
  
  
  let rightPath = allTreePaths(root.right);
  for(let subpath of rightPath){
    paths.push([root.val, ...subpath])
  }
  

  
  return paths;
  
  
};