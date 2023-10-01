// check if the queue is empty

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

    isEmpty(){
        if (this.items) return false;
        return true;
    }
}

let queue = new Queue();

if (queue.isEmpty()){
    console.log('The queue is empty');
}

/*
Output

The queue is empty
*/