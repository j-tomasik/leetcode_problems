def subsets(nums):
    res = []
    
    cur = []
    def dfs(i):
        if i >= len(nums):
            return
        