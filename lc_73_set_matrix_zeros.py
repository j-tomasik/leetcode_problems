def setZeroes(matrix):
    rowSet = set()
    colSet = set()
    
    for r in range(len(matrix)):
        for c in range(len(matrix)):
            if matrix[r][c] == 0:
                rowSet.add(r)
                colSet.add(c)

    for r in range(len(matrix)):
        for c in range(len(matrix[0])):
            if r in rowSet or c in colSet:
                matrix[r][c] = 0
        
    return matrix