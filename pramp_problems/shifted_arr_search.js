//input:  shiftArr = [9, 12, 17, 2, 4, 5]
//should return 3
function shiftedArrSearch(shiftArr, num) {
  
  if(shiftArr.length <= 1 && shiftArr[0] !== num) return -1;
  
  let smallestIdx = 0; //3
  for(i = 0; i < shiftArr.length; i++) {
    if(shiftArr[i] < shiftArr[smallestIdx]) {
      smallestIdx = i;
    }
  }
  
  let ends = shiftArr.slice(smallestIdx); //2, 4, 5
  let starts = shiftArr.slice(0, smallestIdx);//9, 12, 17
  
 
  let startResult = binarySearch(starts, num); //-1
  let endResult = binarySearch(ends, num);//2
  
  if(startResult !== -1) {
    return startResult;
  }
  
  if(endResult !== -1) {
    return endResult + smallestIdx; //2 
  }
  
  return -1

}


const binarySearch = (numbers, target) => {
  let lo = 0;
  let hi = numbers.length - 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (target < numbers[mid]) {
      hi = mid - 1;
    } else if (target > numbers[mid]) {
      lo = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};
//S
//1 find out how many idx arr is shifted over//
//2 make unshifted copy and run binary search on that
//3 add shifted count to sorted idx of target

//
//yea sure that will work, im reading over the problem now

//OTHER VERSION OF SOULTION IN JS, COMPARE 

// function shiftedArrSearch(shiftArr, num):
//     pivot = findPivotPoint(shiftArr)

//     if(pivot == 0 OR num < shiftArr[0]):
//         return binarySearch(shiftArr, pivot, shiftArr.length - 1, num)
    
//     return binarySearch(shiftArr, 0, pivot - 1, num)


// function findPivotPoint(arr):
//     begin = 0
//     end = arr.length - 1

//     while (begin <= end):
//         mid = begin + floor((end - begin)/2)
//         if (mid == 0 OR arr[mid] < arr[mid-1]):
//             return mid
//         if (arr[mid] > arr[0]):
//             begin = mid + 1
//         else:
//             end = mid - 1

//     return 0


// function binarySearch(arr, begin, end, num):
//     while (begin <= end):
//         mid = begin + floor((end - begin)/2)
//         if (arr[mid] < num):
//             begin = mid + 1
//         else if (arr[mid] == num):
//             return mid
//         else:
//             end = mid - 1

//     return -1