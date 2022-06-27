
function sortKMessedArray(arr, k) {
    n = arr.length;

    h = new MinHeap();

    h.buildHeap(arr[0, ..., k]);

    for (let i from k + 1 to n - 1) {
        arr[i - (k + 1)] = h.extractMin()

        h.insert(arr[i]);
    }

    for(let i from 0 to k) {
        arr[n - k - 1 + i] = h.extractMin()
    }

    return arr;
}