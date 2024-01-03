def minSubArrayLen(target, nums):
    minLength = float('inf')
    currSum = 0
    
    l, r = 0,0
    
    for r in range(len(nums)):
        currSum += nums[r]
        
        while currSum >= target:
            
    
    
    if minLength == float('inf'):
        return 0
    else:
        return minLength