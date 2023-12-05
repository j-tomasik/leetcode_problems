def combinationSum(candidates, target):
    res = []
    candidates.sort()
    
    def backtracking(cur, pos, target):
        if target == 0:
            res.append(cur.copy())
            return
        if target < 0:
            return
        
        prev = -1
        for i in range(pos, len(candidates)):
            if candidates[i] == prev:
                continue
            cur.append(candidates[i])
            backtracking(cur, pos + 1, target - candidates[i])
            cur.pop()
            prev = candidates[i]
    
    backtracking([], 0, target)
    
    return res