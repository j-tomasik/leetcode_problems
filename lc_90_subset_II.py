def susetsWithDup(nums):
    res = []
    nums.sort()
    
    def backtrack(i, subset):
        if i == len(nums):
            res.append(subset[::])
            return
    
    return res