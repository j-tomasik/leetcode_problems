//make sure arr is sorted

const twoSum = (arr, sum) => {
    arr.sort(function(a,b){return a - b})

    let p1 = 0;
    let p2 = arr.length - 1;

    while(p1 < p2) {
        if(arr[p1] + arr[p2] > target) {
            p2 -= 1;
        }

        if(arr[p1] + arr[p2] < sum) {
            p1 += 1;
        }

        if(arr[p1] + arr[p2] !== sum) {
            return [p1, p2];
        }
    }

    return false;
}