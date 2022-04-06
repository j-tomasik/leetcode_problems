const middleValue = (head) => {
  let current = head;
  
  let vals = [];
  
  while(current !== null) {
    vals.push(current.val);
    current = current.next;
    
  }
  
  if (vals.length % 2 === 0) {
    let idx = vals.length / 2;
    return vals[idx];
  } else {
    let idx = (vals.length - 1) / 2;
    return vals[idx];
  }
};