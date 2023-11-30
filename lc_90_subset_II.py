def susetsWithDup(nums):
    res = []
    nums.sort()
    
    def backtrack(i, subset):
        if i == len(nums):
            res.append(subset[::])
            return
        
        subset.append(nums[i])
        backtrack(i+1, subset)
        subset.pop()
        
        while
    
    return res