def checkValidString(s):
    leftMin, leftMax = 0, 0
    
    for char in s:
        if char == '(':
            lefMin, leftMx = lefMin + 1, leftMax + 1
        elif char == ')':
            leftMin, leftMax = leftMin -1, leftMax - 1
        else:
            lefMin, leftMax = leftMin - 1, leftMax + 1
    
    return leftMin == 0