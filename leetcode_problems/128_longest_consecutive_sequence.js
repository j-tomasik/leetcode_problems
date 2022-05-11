var longestConsecutive = function(nums) {
    let set = new Set();

    for(let num of nums) {
        set.add(n);
    }

    let max = 0;

    for(let n of set) {
        if(!set.has(n - 1)) {
            let count = 0;
            while(set.has(n + 1)) {
                count += 1;
            }
            max = Math.max(count, max)
        }
    }
    return max;
};