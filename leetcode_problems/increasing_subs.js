//iterate through
//for each num, iterate up to k spots ahead,
//if they nums dont' keep increasing, break out and move to next start i point
//if it does get to the end, iterate count
const countIncreasingSubs = (arr, k) => {
    let count = 0;

    for(let i = 0; i < arr.length; i++) {
        for(let j = 1; j < k; j++) {
            if(!(arr[i] < arr[i + j])) {
                break;
            } 

            if(arr[i] < arr[i + j] && (j + 1) === k) {
                count += 1;
            }
        
        }
    }
    console.log(count);
}

let test = [9,4,5,6,7,8,1];

countIncreasingSubs(test, 3);

//this did not work in the hackerRank
//need to look into two pointer method for sloving ranges while iteratin an arr