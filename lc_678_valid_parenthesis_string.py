def checkValidString(s):
    leftMin, leftMax = 0, 0
    
    for char in s:
        if char == '(':
            lefMin, leftMx = lefMin + 1, leftMax + 1
        elif char == ')':
    
    return leftMin == 0