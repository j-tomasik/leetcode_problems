
def reorderList(head):
        slow = head
        fast = head.next
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        # holds start of second next
        secondHead = slow.next
        # severse the halfs
        prev = slow.next = None

        # reverse second half
        while secondHead:
            tmp = secondHead.next
            secondHead.next = prev
            prev = secondHead
            secondHead = tmp
    # merge two halfs of list
        first, second = head, prev
        while second:
            tmp1, tmp2 = first.next, second.next
            first.next = second
            second.next = tmp1
            first = tmp1
            second = tmp2
