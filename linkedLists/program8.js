// Get the length of a linked list.

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

let length = 0;
let head = LinkedListNode.createLinkedListFromIterable([1, 2, 3, 4, 5]);

if (head != null){
    let nodePointer = head;
    while (nodePointer != null){
        length++;
        nodePointer = nodePointer.next;
    }
}

console.log(`length of linked list is ${length}`);  // length of linked list is 5