##given an array of numbers, return the count of strictly increasing subarrays
## example [1, 2, 3] -> [1,2] [2,3], [1,2,3] count = 3

def count_increasing_subarrays(arr):
    count = 0
    for i in range(len(arr) - 1):
        if arr[i] < arr[i + 1]:
            count += 1
    return count


array = [1, 2, 3, 2, 4, 5, 1]
print(count_increasing_subarrays(array))