// Delete a node at a given position.

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

let head = LinkedListNode.createLinkedListFromIterable("Attacks On Titan");
let position = 6;

let nodePointer = head;

for (let i=0; i<position-1; i++){
    nodePointer = nodePointer.next;
}

nodePointer.next = nodePointer.next.next;

LinkedListNode.printLinkedList(head);  // A -> t -> t -> a -> c -> k ->   -> O -> n ->   -> T -> i -> t -> a -> n