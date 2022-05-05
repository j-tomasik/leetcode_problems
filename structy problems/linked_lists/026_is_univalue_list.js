const isUnivalueList = (head) => {
    let curr = head;

    while(curr !== null) {
        if(head.val !== curr.val) return false;

        current = curr.next;
    }

    return true;

}