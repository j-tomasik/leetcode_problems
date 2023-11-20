def partitionLabels(s):
    lastIndex = {}
    returnList = []
    for i, c in enumerate(s):
        lastIndex[c] = i
        
    size, end = 0, 0
    
    for idx, char in enumerate(s):
        size += 1
        end = max(end, lastIndex[char])
        
        if idx == end:
            returnList.append(size)
            size = 0
    
    return returnList