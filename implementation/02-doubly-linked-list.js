class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        let newNode = new DoublyLinkedNode(val);

        if( this.length > 0 ) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            this.length += 1;
        }
        else {
            this.addToHead(val);
        }
    }

    removeFromHead() {
        // Remove node at head
        let save = undefined;
        if( this.length === 1 ) {
            save = this.head.value;
            this.head = null;
            this.length -= 1;
        }
        else if ( this.head ) {
            save = this.head.value;
            this.head = this.head.next;
            this.head.prev = null;
            this.length -= 1;
        }
        return save;
    }

    removeFromTail() {
        // Remove node at tail
        let save = undefined;
        if( this.length === 1 ) {
            save = this.head.value;
            this.head = this.tail = null;
            this.length -= 1;
        }

        else if( this.length ) {
            save = this.tail.value;
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length -= 1;
        }
        return save;
    }

    peekAtHead() {
        // Return value of head node
        if( !this.head ) return undefined;
        return this.head.value;
    }

    peekAtTail() {
        if( !this.head ) return undefined;
        let curr = this.head;
        while( curr.next ) {
            curr = curr.next;
        }
        return curr.value;
    }
    print() {
        // Print out the linked list
        if( !this.head ) return;
        let curr = this.head;
        while(curr) {
            process.stdout.write(curr.value + " -> ");

            curr = curr.next;
        }
        console.log(null);
    }

    reverse() {
        if( this.length > 1) {
            let curr = this.tail;
            while( curr !== null ) {
                let saveNext = curr;

                curr.next = curr.prev;
                curr.prev = saveNext.next;
                curr = curr.next;
            }
            const saveHead = this.head;
            this.head = this.tail;
            this.tail = saveHead;
        }
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
