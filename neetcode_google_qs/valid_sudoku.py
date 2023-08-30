from collections import collections
def isValidSudoku(board):
    cols = collections.defaultdict(set)
    rows = collections.defaultdict(set)
    squares = collections.defaultdict(set)  # key will be (r//3, c//3)
    
    for r in range(9):
        for c in range(9):
            if board[r][c] == '.':
                continue
