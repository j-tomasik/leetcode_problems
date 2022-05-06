const dephFirstValues = (head) => {
    if(head === null) return [];

    let vals = [];
    let stack = [head];

    while(stack.length > 0) {
        let current = stack.pop();
        vals.push(current.val);

        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right);
    }
    return vals;
}