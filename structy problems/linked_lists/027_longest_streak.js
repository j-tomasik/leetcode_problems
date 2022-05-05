const longestStreak = (head) => {
    let current = head;
    let maxCounter = 1;
    let counter = 1;

    if (current === null) {
        return 0;
    }

    while(current !== null) {
        if(current.val === current.next.val) {
            counter += 1;

            if(counter > maxCounter) {
                maxCounter = counter
            }
        } else {
            counter = 1;
        }
        current = current.next;
    }

    return maxCounter;
}