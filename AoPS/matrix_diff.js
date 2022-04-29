const solution1 = [
	[23, 28, 33],
	[19, 18, 17],
	[15, 8, 1]
];

//first iterate through sub arrs and check diff
//iterate through columns and check diff
//exit early if the diff isnt consistant

const confirm = (matrix) => {
  

    
  for(let i = 0; i < matrix.length; i++) {
    let stepCount = matrix[i][0] - matrix[i][1];
    
    for(let j = 0; j < matrix[0].length - 1; j++) {
      let current = matrix[i][j];
      let next = matrix[i][j + 1];
      let diff = current - next;
      if(stepCount !== diff) {
        return false;
      }
    }
  }

  for(let i = 0; i < matrix.length; i++) {
    let stepCount = matrix[0][i] - matrix[1][i];
    
    for(let j = 0; j < matrix[0].length - 1; j++) {
      let current = matrix[j][i];
      let next = matrix[j + 1][i];
      let diff = current - next;
      if(stepCount !== diff) {
        return false;
      }
    }
  }

  

  return true;
}

console.log(confirm(solution1));