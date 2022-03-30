const summingSquares = (n, memo={}) => {
  if(n in memo) return memo[n];
  if(n === 0) return 0;
  
  
  
  let minSquare = Infinity;
  for(let i = 1; i <= Math.sqrt(n); i++) {
  const square = i * i;
    
  const numSquares = 1 + summingSquares(n - square, memo)
  minSquare = Math.min(numSquares, minSquare)
  }
  
  memo[n] = minSquare;
  return minSquare
};