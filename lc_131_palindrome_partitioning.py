def palindrome_partitioning(s):
    res = []
    def subset(s):
        results = []
        cur = []
        def dfs(i):
            if i >= len(s):
                results.append(cur.copy())
                return
            cur.append(s[i])
            dfs(i+1)
            cur.pop()
            dfs(i+1)
        dfs(0)
        return results
    
    subs = subset(s)
    # print(subs)
    for sub in subs:
        reversed = sub[::-1]
        print(reversed)
        if sub == reversed:
            res.append(sub)
    
    return res

palindrome_partitioning('aab')