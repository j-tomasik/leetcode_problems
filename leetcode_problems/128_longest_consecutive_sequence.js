var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;
    
    nums.sort(function(a, b) {return a - b});
    
    let maxCount = 1;
    let count = 1;
    let last = nums[0];
    for(let num of nums) {
        if(num === last + 1) {
            count += 1;
            last = num;
            if(count > maxCount) {
                maxCount = count;
            }
        } else if (num === last) {
                   continue;
                   } else{
            count = 1;
        }
    }
    return maxCount
};