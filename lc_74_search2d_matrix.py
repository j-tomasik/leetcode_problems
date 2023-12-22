def searchMatrix(matrix, target):
    ROWS, COLS = len(matrix), len(matrix[0])
    
    top, bot = 0, ROWS - 1
    while top <= bot:
        row = (top + bot) // 2
        if target > matrix[row][-1]:
            top = row + 1
        elif target < matrix[row][0]:
            bot = row - 1
        else: break
    
    return False