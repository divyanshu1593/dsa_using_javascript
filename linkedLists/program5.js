// Insert a node after a given node.

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

let head = LinkedListNode.createLinkedListFromIterable([1, 2, 4, 5]);

let insertAfter = 2;

let nodePointer = head;
while (nodePointer.value != insertAfter) nodePointer = nodePointer.next;

let node = new LinkedListNode(3);

node.next = nodePointer.next;
nodePointer.next = node;

LinkedListNode.printLinkedList(head);