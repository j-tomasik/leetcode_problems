class Node {
    constructor() {
        this.data = true;
        this.next = null;
    }
}

const decimalValue = (head) => {
    let result = 0;

    while (head !== null) {
        result = (result << 1) + (head.data ? 1 : 0);
        head = head.next;
    }
    return result;
}