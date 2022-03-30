const maxPathSum = (grid, r=0, c=0, memo={}) => {
  const pos = r + ',' + c;
  if(pos in memo) return memo[pos];
  
  if(r === grid.length || c === grid[0].length) return 0;
  if(r === grid.length - 1 && c === grid[0].length - 1) {
    memo[pos] = grid[r][c];
    return memo[pos];
  }
  
  const downCount = maxPathSum(grid, r + 1, c, memo);
  const rightCount = maxPathSum(grid, r, c + 1, memo);
  
  memo[pos] = grid[r][c] + Math.max(downCount, rightCount);
  return memo[pos];

};