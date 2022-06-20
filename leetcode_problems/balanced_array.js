//if left sum < right sum
//

//incriment both pointers
// once they cross, you have found index of pivor
//while(leftIdx > rightIdx)
//smaller sum you incriment, larger sum you leave alone

let leftSum = 0;
let rightSum = 0;
let leftIdx = 0;
let rightIdx = arr.length - 1;

while (leftIdx < rightIdx) {
    if (leftSum < rightSum) {
        leftSum += arr[leftIdx];
        leftIdx += 1;
    } else {
        rightSum += arr[rightIdx];
        rightIdx += 1;
    }
}

return leftIdx;

