def mergeTwoLists(list1, list2):
    if not list1:
        return list2
    if not list2:
        return list1
    
    lil, big = (list1, list2) if list1.val < list2.val else (list2, list1)
    
    lil.next = mergeTwoLists(lil.next, big)
    return lil