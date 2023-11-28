def subsets(nums):
    res = []
    
    cur = []
    def dfs(i):
        if i >= len(nums):
            res.append(cur.copy())
            return
        
        #decision to include nums[i]
        cur.append(nums[i])
        dfs(i + 1)
        
        #decision to NOT include nums[i]
        cur.pop()