def rotate(matrix):
    l, r = 0, len(matrix) - 1
    
    while l < r:
        for i in range(r - l):
            top, bottom = l, r