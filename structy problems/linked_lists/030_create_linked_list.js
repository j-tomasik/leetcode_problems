class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (values) => {
  let dummyHead = new Node(null);
  let tail = dummyHead;

  
  for(let val of values){
    tail.next = new Node(val);
    tail = tail.next;
  }
  return dummyHead.next;
};