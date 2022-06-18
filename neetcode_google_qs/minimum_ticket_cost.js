const minimumCost = (days, costs) => {
    //recursive dfs branching
    //memoize/cache to reduce duplicate logic
    const [one, seven, thirty] = costs;
    const memo = new Map();

    function recursive (curr, idx) {
        if(memo.has(curr)) return memo.get(curr);
        if(idx >= days.length) return 0;
        if(curr >= days[idx]) return recursive(curr, idx + 1);
        
        const buy1 = recursive(days[idx], idx) + one;
        const buy7 = recursive(day[idx]+6, idx) + seven;
        const buy30 = recursive(days[idx]+29, idx) + thirty;

        const min = Math.min(buy1, buy7, buy30);
        memo.set(curr, min);
        return min;
    }
    return recursive(0, 0);
};