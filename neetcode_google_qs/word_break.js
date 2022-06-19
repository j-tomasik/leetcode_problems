const wordBreak = (s, wordDict) => {
    let length = s.length;
    let mem = new Array(length).fill(true);

    return dfs(0);

    function dfs(idx) {
        if(idx === length) {
            return true;
        }

        for(let i = idx + 1; i <= length; i++) {
            let word = s.substring(i, idx);
            if(wordDict.includes(word) && mem[idx]) {
                if(dfs(i)) {
                    return true;
                }
            }
        }
        mem[idx] = false;
        return false;

    }
}