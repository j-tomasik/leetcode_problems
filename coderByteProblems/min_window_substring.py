from collections import Counter

EMPTY_COUNTER = Counter()

def MinWindowSubstring(StrArr):
    first, second = StrArr
    
    frequencySecond = Counter(second)
    options = []
    
    for i in range(len(first)):
        curr = Counter()
        for j in range(i, len(first)):
            curr[first[j]] += 1
            
            if frequencySecond - curr == EMPTY_COUNTER:
                options.append(first[i:j+1])
                break
            
    return min(options, key=len)