def maxSubArray(nums):
    res = nums[0]
    
    total = 0
    for num in nums:
        total += num
        res = max(res, num)
        if total < 0:
            total = 0
            
    
    return res