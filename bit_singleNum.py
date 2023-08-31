def singleNumber(nums):
    res = 0
    for n in nums:
        res = n ^ res# 4 ^ 0==4, 4 ^ 1==5, 5 ^ 2==7
    
    return res



