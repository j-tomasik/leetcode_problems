const arrayStepper = (nums, i = 0, memo={}) => {
  if(i === nums.length -1) return true;
  if(i in memo) return memo[i];
  
  
  for(let j = 1; j <= nums[i]; j++) {
    let newSpot = i + j;
    if(arrayStepper(nums, newSpot, memo)) {
      return true;
    }
  }
  memo[i] = false;
  return false;
};