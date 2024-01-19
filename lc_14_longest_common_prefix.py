def longestCommonPrefix(strs):
    res = ''
    for i in range(len(strs[0])):
        for s in strs:
            if s[i] != strs[0][i]:
                return res
    
    return res