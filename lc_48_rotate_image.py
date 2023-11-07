def rotate(matrix):
    l, r = 0, len(matrix) - 1
    
    while l < r:
        for i in range(r - l):
            top, bottom = l, r
            
            topLeft = matrix[top][l]
            
            matrix[top][l] = matrix[bottom][l]
            
            matrix[bottom][l] = matrix[bottom][r]