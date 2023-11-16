def BracketMatcher(strParam):
    stack = []
    
    for char in strParam:
        if char == '(':
            stack.append('(')
        elif char == ')':
            if len(stack) < 1:
                return 0
            else:
                stack.pop()
    
    if len(stack) > 0:
        return 0
    else:
        return 1