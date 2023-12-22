def copyRandomList(head):
    oldToCopy = {None: None}
    
    cur = head
    while cur:
        copy = Node(cur.val)
        oldToCopy[cur] = copy
    
    return oldToCopy[head]