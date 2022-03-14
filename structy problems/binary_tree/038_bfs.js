// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const breadthFirstValues = (root) => {
    if(!root) return [];
    const queue = [root];
    const vals = [];

while(queue.length > 0) {
    const current = queue.shift();
    vals.push(current.val);
    if(current.left) queue.push(current.left);
    if(current.right) queue.push(current.right);
    
}

return vals

};