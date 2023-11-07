#time complexity O(m*n) row x col
def spiralOrder(matrix):
    res = []
    left, right = 0, len(matrix[0])
    top, bottom = 0, len(matrix)
    
    while left < right and top < bottom:
        #get every val in top row
        for i in range(left, right):
            res.append(matrix[top][i])
        top += 1
        
        
        #get every i in the right col
        for i in range(top, bottom):
            res.append(matrix[i][right - 1])
            
        right -= 1
        
        