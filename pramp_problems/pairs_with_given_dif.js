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