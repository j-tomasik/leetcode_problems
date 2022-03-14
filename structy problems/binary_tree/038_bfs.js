const depthFirstValues = (root) => {
    const values = [];
    if(!root) return [];
    const stack = [root];


    while(stack.length > 0){
    const current = stack.pop();
    values.push(current.val);
    if(current.right) stack.push(current.right);
    if(current.left) stack.push(current.left);
    
    }
    return values;
};