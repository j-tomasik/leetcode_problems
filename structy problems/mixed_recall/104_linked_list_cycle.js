const linkedListCycle = (head) => {
  const visited = new Set();
  
  let current = head;
  
  while (current !== null) {
    if(visited.has(current.val)) {
      return true;
    } else {
      visited.add(current.val);
      current = current.next;
    }
    
  }
  return false;
};