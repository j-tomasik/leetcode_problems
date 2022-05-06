const dfs = (head) => {
    if(head === null) return [];

    let leftSearch = dfs(head.left);
    let rightSearch = dfs(head.right);

    return [head.val, ...leftSearch, ...rightSearch];
}