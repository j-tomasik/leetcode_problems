from collections import collections
def isValidSudoku(board):
    cols = collections.defaultdict(set)
    rows = collections.defaultdict(set)
    squares = collections.defaultdict(set)  # key will be (r//3, c//3)
    
    for r in range(9):
        for c in range(9):
            if board[r][c] == '.':
                continue
            squareKey = (r//3, c//3)
            curr = board[r][c]
            if(curr in rows[r] or curr in cols[c] or curr in squares[squareKey]):
                return False
            else:
                rows[r].add(curr)
                cols[c].add(curr)
                squares[squareKey].add(curr)
        return True