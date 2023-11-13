def FirstFactorial(num):
    tracker = 1
    for i in range(num, 0, -1):
        tracker = i * tracker
    
    return tracker