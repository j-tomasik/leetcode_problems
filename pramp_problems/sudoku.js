const validSudoku = (board) => {
  const set = new Set();

  //i row, j columns
  //check valid columns and rows O(9*9)
  for(let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[0].length; j++) {
      const value = board[i][j];

      if(value !== ".") {
        const rowString = `${value} at row ${i}`;
        const colString = `${value} at col ${j}`;
        const boxString = `${value} at box ${Math.floor(i /3)}, ${Math.floor(j / 3)}`;

        if(set.has(rowString) || set.has(colString) || set.has(boxString)) {
          return false
        } else {
          set.add(rowString);
          set.add(colString);
          set.add(boxString);
        }
      }
    }

  }
  return true;
}

//the sudoku isnt solvable only if the exising numbers break one of the rules
//so all I have to do is make a set for each row, each col and each sub box,
//check if it's unique, then add it in