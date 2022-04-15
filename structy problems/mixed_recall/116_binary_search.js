const binarySearch = (numbers, target) => {
  if(numbers.length <= 1 && numbers[0] !== target) return -1;
  
  let low = 0;
  let high = numbers.length - 1;
  
  while(low <= high) {
    const middle = Math.floor((low + high) / 2);
    
    if(target < numbers[middle]) {
      high = middle - 1;
    } else if (target > numbers[middle]) {
      low = middle + 1;
    } else {
    return middle;
  }
    
  } 
  
  return -1;
};