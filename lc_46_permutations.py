def permutations(nums):
    res = []
    
    #base case
    if(len(nums) == 1):
        return [nums[:]]
    
    for i in range(len(nums)):
        n = nums.pop(0)
        
        perms = permutations(nums)
        
        for perm in perms:
            perm.append(n)
        res.extend(perms)
        nums.apppend(n)
        
    return res