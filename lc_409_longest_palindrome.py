def longestPalindrome(s):
    my_set = set()
    count = 0
    
    for char in s:
        if char in my_set:
            count += 2
            my_set.remove(char)
        else:
            my_set.add(char)
    
    return count + (1 if len(set) > 0 else 0)