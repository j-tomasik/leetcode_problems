def combinationSum(candidates, target):
    res = []
    
    def dfs(i, cur, sum):
        if sum == target:
            res.append(cur.copy())
            return
        if i >= len(candidates) or total > target:
            return