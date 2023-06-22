# Given the head of a linked list, remove the nth node from the end of the list and return its head.


def removeNthFromEnd(head, n):
    dummyHead = head
    left = dummyHead
    right = head

    while n > 0 and right:
        right = right.next
        n -= 1

    while right:
        left = left.next
        right = right.next

    left.next = left.next.next
    return dummyHead
