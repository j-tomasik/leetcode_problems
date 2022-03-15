// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const maxPathSum = (root) => {
  if(root === null) return -Infinity;
  if(root.left === null && root.right === null) return root.val;
  const maxPath = Math.max(maxPathSum(root.left), maxPathSum(root.right))
  return root.val + maxPath;
};
