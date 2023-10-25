from collections import defaultdict
def betterCompress(s):
    hash = defaultdict(int)
    numbers = '123456789'
    i = 0
    j=0
    while j < len(s):
        if s[j] in numbers and j <len(s) - 1:
            j += 1
        else:
            char = s[i]
            
            if j == len(s) - 1:
                num = int(s[j])
            else:
                num = int(s[i+1:j])
        hash[char] += num
        