// Create a linked list.

class LinkedListNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

let head = new LinkedListNode(1);
head.next = new LinkedListNode(2);
head.next.next = new LinkedListNode(3);