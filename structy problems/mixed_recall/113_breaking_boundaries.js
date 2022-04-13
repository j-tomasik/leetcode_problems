const breakingBoundaries = (m, n, k, r, c, memo={}) => {
  const key = k + ',' + r + c;
  if(key in memo) return memo[key];
  
  const rowInbounds = r >= 0 && r < m;
  const colInbounds = c >= 0 && c < n;
  
  if(!rowInbounds || !colInbounds) return 1;
  
  if(k=== 0) return 0;
  
  const deltas = [ [1, 0], [-1, 0], [0,-1], [0,1] ];
  
  
  let totalCount = 0;
  for(let delta of deltas) {
    const [dRow, dCol] = delta;
    
    totalCount += breakingBoundaries(m,n, k - 1, r + dRow, c + dCol, memo);
    
  }
  memo[key] = totalCount
   return totalCount;
};
