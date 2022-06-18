const minimumCost = (days, costs, memo={}, i=0) => {
    //recursive dfs branching
    //memoize/cache to reduce duplicate logic
    if(i in memo) return memo[i];
    if (i === days.length) return 0;

    memo[i] = Infinity;
    let passes = [1, 7, 30];

    for(let day of days) {
        for(cost of costs) {

        }
    }
}