def longestPalindrome(s):
    set = set()
    count = 0
    
    for char in s:
        if set.has(char):
            count += 2
            set.remove(char)
        else:
            set.add(char)
    
    return count + 1 if set.size > 0 else 0