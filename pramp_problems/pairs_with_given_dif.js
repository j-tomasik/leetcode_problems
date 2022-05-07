const findPairsWithGivenDif = (arr, k) => {
    if(k === 0) return [];

    let map = {};
    let answer = [];

    for(val of arr) {
        map[val - k] = val;
    }

    for(num of arr) {
        if(num in map) {
            answer.push([map[num], num])
        }
    }


    return answer;
}