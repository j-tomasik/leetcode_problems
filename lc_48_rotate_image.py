def rotate(matrix):
    l, r = 0, len(matrix) - 1
    
    while l < r:
        for i in range(r - l):
            top, bottom = l, r
            
            #save the topleft
            topLeft = matrix[top][l]
            
            #move bottom left into top left
            matrix[top][l] = matrix[bottom][l]
            
            #move bottom right into bottom left
            matrix[bottom][l] = matrix[bottom][r]
            
            #move top right into bottom right
            matrix[bottom][r] = matrix[top][r]
            
            