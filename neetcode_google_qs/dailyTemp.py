def dailyTemperatures(temperatures):
    res = [0] * len(temperatures)
    stack = [] # pair:[temp, index]
    
    for i, t in enumerate(temperatures):
        while stack and t > stack[-1][0]:
            stackTemp, stackIdx = stack.pop()
            res[stackIdx] = i - stackIdx
        stack.append((t, i))
    return res