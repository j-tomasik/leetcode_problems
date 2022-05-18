const maxSumofLengthK = (arr, k) => {
    let windowSum = 0;
    let maxSum = 0;
    let start = 0;
    let end = 0;

    while(end < k) {
        windowSum += arr[end++]
    }

    while(end <arr.length) {
        windowSum += arr[end++] - arr[start++];

        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}