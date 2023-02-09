class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        let length = 0;
        let curr = this.head;
        while( curr ) {
            length += 1;
            curr = curr.next;
        }
        return length;
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let sum = 0;
        let curr = this.head;

        while( curr ) {
            sum += curr.value;
            curr = curr.next;
        }
        return sum;
    }

    averageValue() {
        // Returns the average value of all the nodes
        if ( !this.listLength() ) return 0;

        return this.sumOfNodes() / this.listLength();

    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        if( n >= this.listLength() ) return undefined;

        let curr = this.head;

        for(let i = 0; i < n; i++) {
            curr = curr.next;
        }
        return curr;
    }

    findMid() {
        // Returns the middle node
        const length = this.listLength() ;
        if( !this.head ) return undefined;
        if( length % 2 !== 0) {
            return this.findNthNode( Math.floor( length / 2 ))
        }else {
            return this.findNthNode( length / 2 - 1 )
        }
    }

    reverse() {
        // Returns a new reversed version of the linked list
        const newSinglyLink = new SinglyLinkedList();
        newSinglyLink.head = this.head;
        newSinglyLink.reverseInPlace();
        return newSinglyLink;
        // time complexity is O(n) given the function call
        }
        reverseInPlace() {
            // Reverses the linked list in-place
            let curr = this.head;
            let prev = null;
            while( curr ) {
                if(!curr.next) this.head = curr;
                let saveNext = curr.next;
                curr.next = prev;
                prev = curr;
                curr = saveNext;
        }
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
}

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        if( this.head ) {
            let curr = this.head;
            let length = 0;
            while(curr) {
                length++;
                curr = curr.next;
            }
            curr = this.head;
            if(length % 2 !== 0 ) {
                for(let i = 0; i< Math.floor(length /2) ; i++) {
                    curr = curr.next;
                }
                return curr;
            }
            else {
                for(let i = 0; i< length /2 -1; i++) {
                    curr = curr.next;
                }
                return curr;
            }
        }
    }

    reverse() {
        // Returns a new reversed version of the linked list
        const newDoublyLinkList = new DoublyLinkedList();
        newDoublyLinkList.head = this.head;
        newDoublyLinkList.tail = this.tail;
        newDoublyLinkList.reverseInPlace();
        return newDoublyLinkList;
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        if( this.head ) {
            const saveTail = this.tail
            let curr = this.tail;
            while(curr) {
                let saveNext = curr.next;
                curr.next = curr.prev;
                curr.prev = saveNext;
                curr = curr.next;
            }
            this.tail = this.head;
            this.head = saveTail;

        }
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
