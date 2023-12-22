def copyRandomList(head):
    oldToCopy = {None: None}
    
    cur = head
    while cur:
        copy = Node(cur.val)
        oldToCopy[cur] = copy
        cur = cur.next
    cur = head
    
    return oldToCopy[head]