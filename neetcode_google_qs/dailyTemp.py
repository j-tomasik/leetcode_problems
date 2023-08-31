def dailyTemperatures(temperatures):
    res = [0] * len(temperatures)
    stack = [] # pair:[temp, index]
    
    for i, t in enumerate(temperatures):
        