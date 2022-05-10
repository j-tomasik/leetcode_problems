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