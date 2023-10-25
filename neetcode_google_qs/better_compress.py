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
                num = int(s[i+1:j+1])
            else:
                num = int(s[i+1:j])
        hash[char] += num
        
    finalStr = ''
    myKeys = list(hash.keys())
    myKeys.sort()
    sortedDict = {i: hash[i] for i in myKeys}
    for key in sortedDict:
        char = key 
        strNum = str(sortedDict[key])
        finalStr += char + strNum
    return finalStr