const findPairsWithGivenDif = (arr, k) => {
    if(k === 0) return [];

    let map = {};
    let answer = [];

    for(let val of arr) {
        map[val - k] = val;
    }

    for(let num of arr) {
        if(num in map) {
            answer.push([map[num], num])
        }
    }


    return answer;
}

//in hashmap, keys are the compliment num needed to reach k, and vals are the number in the arr
//second for loop will check to see if num in arr is a key, and then that num and the val to the key are pushed