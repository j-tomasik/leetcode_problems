def palindrome_partitioning(s):
    res = []
    part = []
    
    def dfs(i):
        if i >= len(s):
            res.append(part.copy())
            return
        for j in range(i, len(s)):
            if isPali(s, i, j):
                part.append(s[i:j+1])
    
    return res

