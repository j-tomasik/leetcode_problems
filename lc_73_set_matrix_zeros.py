def setZeroes(matrix):
    rowSet = set()
    colSet = set()
    
    for r in range(len(matrix)):
        for c in range(len(matrix)):
            if matrix[r][c] == 0:
                rowSet.add(r)
    
    return matrix