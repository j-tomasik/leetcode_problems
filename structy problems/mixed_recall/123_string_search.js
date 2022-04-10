const stringSearch = (grid, s) => {
    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; c < grid[0].length; c += 1) {
            if (dfs(grid, s, r, c)) return true;
        }
    }
    return false;
};

const dfs = (grid, s, row, col) => {
    const rowInbounds = 0 <= row && row < grid.length;
    const colInbounds = 0 <= col && col < grid[0].length;
    if (s === '') return true;
    
    if (!rowInbounds || !colInbounds) return false;
    
    const char = grid[row][col];
    if (char !== s[0]) return false;
    
    const suffix = s.slice(1);
    grid[row][col] = '*';
  
    const result = dfs(grid, suffix, row + 1, col) ||
        dfs(grid, suffix, row - 1, col) ||
        dfs(grid, suffix, row, col + 1) ||
        dfs(grid, suffix, row, col - 1);
  
    grid[row][col] = char;
    return result;
};