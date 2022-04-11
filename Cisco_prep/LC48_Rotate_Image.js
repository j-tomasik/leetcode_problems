//time complexity o(N^2) becuase n is the dimension and we have to check each spot once

const rotate = (matrix) => {
    

    for(let i = 0; i < matrix.length; i++) {
        for(let j = i; j < matrix.length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }

    for(let row of matrix) {
        row.reverse();
    }
};
