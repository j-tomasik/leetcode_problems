function arrayOfArrayProducts(arr) {
  if(arr.length <= 1) return [];;
  
  let firstArr = [];
  let secondArr = [];
  
  let total = 1
  for(let i = 0; i < arr.length; i++) {
    firstArr.push(total);
    total *= arr[i];
  }
  
  let secondTotal = 1
  
  for(j = arr.length - 1; j >= 0; j--) {
    secondArr.push(secondTotal);
    secondTotal *= arr[j];
  }
  
  let returnArr = [];
  
  let arrSecond = secondArr.reverse();
  
  for(let k = 0; k < arr.length; k++) {
    let sum = firstArr[k] * arrSecond[k];
    returnArr.push(sum);
  }
  
  console.log(firstArr);
  console.log(secondArr);
  return returnArr
}