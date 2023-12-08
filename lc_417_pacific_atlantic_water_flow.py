def pacificAtlantic(heights):
    ROWS, COLS = len(heights), len(heights[0])
    pac, atl = set(), set()
    
    def dfs(r, c, visit, prevHeight):
        if(
            (r, c) in visit
            or r < 0
            or c < 0
            or r == ROWS
            or r == COLS
            or heights[r][c] < prevHeight
        ):
            return
        visit.add((r,c))
        dfs(r+1, c, visit, heights[r][c])
        dfs(r-1, c, visit, heights[r][c])
        dfs(r, c + 1, visit, heights[r][c])
        dfs(r, c - 1, visit, heights[r][c])
    res = []
    
    return res