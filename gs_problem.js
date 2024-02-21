//I forget the prompt, but I think it is:
//given an arr, sum up the vals that are adjacent to make a smaller arrr, then keep summing until one number

function solution(A, R) {
    let res = 0;
    const map = {};
        
    for (let num of A) {
        if (!map[num]) map[num] = 0;
        map[num]++
    }

    for (let i = 0; i < A.length - R + 1 ; i++) {
        const copy = map
        
        for (let num of A) {
            if (!copy[num]) map[num] = 0;
            copy[num]++
        }

        for (let j = 0 ; j < R; j++) {
            copy[A[i+j]]--
        }

        let attempt = Object.entries(copy).filter(x => x[1] > 0).length
        res = Math.max(attempt,res)
    }
    
    return res;
}