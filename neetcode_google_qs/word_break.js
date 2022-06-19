const wordBreak = (s, wordDict) => {
    let length = s.length;
    let mem = new Array(length).fill(true);

    return dfs(0);

    function dfs(idx) {
        if(idx === length) {
            return true;
        }
    }
}