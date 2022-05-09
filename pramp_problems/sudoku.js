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

//the sudoku isnt solvable only if the exising numbers break one of the rules
//so all I have to do is make a set for each row, each col and each sub box,
//check if it's unique, then add it in