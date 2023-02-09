// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        if( !this.head ) this.head = new SinglyLinkedNode(val);
        else {
            const link = new SinglyLinkedNode(val);
            link.next = this.head;
            this.head = link;
        }
        this.length += 1;

        return this;
        // time complexity is O(1) given that the assignment operations
        // take constant time
    }

    addToTail(val) {

        // Time complexity is O(N) given that we have to traverse the linked list
        // to find the tail after each assignment.

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            return this.addToHead(val);
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        this.length += 1;

        return this;
    }

    removeFromHead() {
        // Remove node at head
        if( !this.head ) return undefined;
        else {
            var savedHead = this.head;
            this.head = this.head.next;
        }
        this.length -= 1;
        return savedHead;
    }

    removeFromTail() {
        // Remove node at tail
        if( !this.head ) return undefined;
        if( this.length === 1 ) {
            var save = this.head;
            this.head = null;
        }
        else {
            let curr = this.head;
            while(curr.next.next) {
                curr = curr.next;
            }
            save = curr.next;
            curr.next = null;
        }

        this.length -= 1;

        return save;
    }

    peekAtHead() {
        // Return value of head node
        if( !this.head ) return undefined;
        return this.head.value;
    }

    print() {
        // Print out the linked list
        if( !this.head ) return;
        let curr = this.head;
        while(curr) {
            console.log(curr.value);
            curr = curr.next;
        }
        console.log(null);
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
