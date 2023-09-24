// Delete a node by key.

class LinkedListNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }

    static printLinkedList(head){
        let nodePointer = head;

        while (nodePointer?.next != null){
            process.stdout.write(`${nodePointer.value} -> `);  // process.stdout.write will print in the same line
            nodePointer = nodePointer.next;
        }

        console.log(nodePointer?.value || '');
    }

    static createLinkedListFromIterable(iterable){
        let head = null;
        let nodePointer;
        let firstIteration = true;

        for (let value of iterable){
            if (firstIteration){
                firstIteration = false;
                head = new LinkedListNode(value);
                nodePointer = head;
            } else {
                nodePointer.next = new LinkedListNode(value);
                nodePointer = nodePointer.next;
            }
        }

        return head;
    }
}

let head = LinkedListNode.createLinkedListFromIterable([1, 2, 3, 10, 4, 5]);

let key = 10;

if (!head || (!head.next && head.value == key)){
    head = null;
} else {
    let nodePointer = head;
    while (nodePointer.next.value != key) nodePointer = nodePointer.next;

    nodePointer.next = nodePointer.next.next;
}

LinkedListNode.printLinkedList(head);  // 1 -> 2 -> 3 -> 4 -> 5