//iterate through
//for each num, iterate up to k spots ahead,
//if they nums keep increasing, at end incriment counter
//if it doesnt get to k, move on to next
const countIncreasingSubs = (arr, k) => {
    let count = 0;

    for(let i = 0; i < arr.length; i++) {
        for(let j = 1; j < k; j++) {
            if(arr[i] < arr[i + j]) {
                continue;
            } else if(arr[i] < arr[i + j] && (j + 1) === k) {
                    count += 1;
            } else{
                break;
            }
        }
    }
    console.log(count);
}

let test = [9,4,5,6,7,8,1];

countIncreasingSubs(test);