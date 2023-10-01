// Dequeue operations in queue

class LinkedListNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    items = null;
    head = null;
    tail = null;

    enqueue(item){
        let node = new LinkedListNode(item);

        if (!this.tail){
            this.items = node;
            this.head = this.items;
            this.tail = this.items;
        } else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }
    }

    dequeue(){
        if (!this.items) throw new Error('QueueError: queue is empty');

        let firstElement = this.head.value;

        this.items = this.head.next;
        this.head = this.head.next;

        return firstElement;
    }

    peek(){
        if (!this.items) throw new Error('QueueError: queue is empty');

        return this.head.value;
    }

    show(){
        let currentPointer = this.head;
        
        while (currentPointer != null){
            process.stdout.write(String(currentPointer.value));
            if (currentPointer.next) process.stdout.write(' <- ');
            currentPointer = currentPointer.next;
        }
        
        console.log();
    }
}

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.show();

console.log(queue.peek());

queue.show();

/*
Output

1 <- 2 <- 3
1
1 <- 2 <- 3
*/