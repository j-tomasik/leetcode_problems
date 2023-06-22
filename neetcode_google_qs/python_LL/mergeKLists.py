#iterate through first of each ele to compare, hold pointer for each head's next node
#keep looping through until all three are null, compare and add to main list

#helper func to merge two sorted lists
#main func:
#edge case for not lists or len == 0
#while lists has a len
#for loop through lists arr incrementing by two
#index in at i, and have logic to replace second with None if out of bounds
#run merge lists on the two, append to a temp list that is empty and created in while loop(merged lists)
#re-assign lists to be the merged lists temp arr
#return lists an zero idx once while loop breaks

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeKlists(lists):
    if not lists or len(lists) == 0:
            return None

    while len(lists) > 1:
        mergedList = []

        for i in range(0, len(lists), 2):
            l1 = lists[i]
            l2 = lists[i+1] if i+1<len(lists)else None
            mergedList.append(mergeList(l1,l2))
        lists = mergedList
    return lists[0]

def mergeList(l1,l2):
    dummy = ListNode()
    tail = dummy
    
    while l1 and l2:
        if l1.val < l2.val:
            tail.next = l1
            l1 = l1.next
        else:
            tail.next = l2
            l2 = l2.next
        tail = tail.next
    
    if l1:
        tail.next = l1
    if l2:
        tail.next = l2
    return dummy.next
    
