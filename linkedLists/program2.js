// Print a linked list.

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
}

let head = new LinkedListNode(1);
head.next = new LinkedListNode(2);
head.next.next = new LinkedListNode(3);

LinkedListNode.printLinkedList(head);