//basically two sum
//use hash map to store the current num at end
//look through hash for dif needed
//key is curr num, val is idx

function getIndicesOfItemWeights(arr, limit) {
  let obj = {};
  
  for(let i = 0; i < arr.length; i++) {
    let dif = limit - arr[i];
    
    if(dif in obj) {
      return[i, obj[dif]]
    }
    obj[arr[i]] = i;
  }
  return [];
}