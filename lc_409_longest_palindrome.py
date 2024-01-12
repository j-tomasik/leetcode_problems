def longestPalindrome(s):
    set = set()
    count = 0
    
    for char in s:
        if set.has(char):
            count += 2
            set.remove(char)
            
    
    return count