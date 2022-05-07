function sudokuSolve(board) {
  
  
  for(let i = 0; i < board.length; i++) {
   let row = new Set();
   let subBox = {};
     

    for(let j = 0; j < board[0].length; j++) {
      let col = new Set();
      
      if(row.has(board[i][j])) return false;
      let coord = i + "," + j;
      subBox[coord] = board[i][j];
      
      
      
      let val = board[i][j];
      
      if(col.has(board[i][j])) return false;
      row.add(val);
      col.add(val);
    }
    
  }
}