const linkedPalindrome = (head) => {
  let values = [];
  let current = head;
  
  while(current !== null) {
    values.push(current.val);
    current = current.next;
  }
  
  return values.join(',') === values.reverse().join(',');
};