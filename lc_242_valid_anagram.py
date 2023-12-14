from collections import Counter
def isAnagram(s, t):
    if len(s) != len(t):
        return False
    
    countS = Counter()
    countT = Counter()
    
    for i in range(len(s)):
        countS[s[i]] += 1
        countT[t[i]] += 1
        
    return countS == countT