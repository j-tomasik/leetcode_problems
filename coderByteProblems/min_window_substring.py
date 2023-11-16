from collections import Counter

EMPTY_COUNTER = Counter()

def MinWindowSubstring(StrArr):
    first, second = StrArr
    
    frequencySecond = Counter(second)
    options = []
    
    for i in range(len(first)):
        curr = Counter()