const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        let node = new SinglyLinkedNode(val);
        if( !this.head ) {
            this.tail = this.head = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length += 1;
        return this.length;
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        if( !this.head ) return null;
        const save = this.head;
        this.head = this.head.next;
        if( !this.head ) this.tail = null;
        this.length -= 1;
        return save.value;
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
