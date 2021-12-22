class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null; 
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        // Define a function that accepts a value. 
        // Create a new node using that value passed to the function. 
        // If there are no nodes in the queue, set this node to be the first and last peoperty of the queue. 
        // Otherwise, make the new node to be the tail / last node in the queue.
        // Increment the size. 
        // Return the new size.

        var newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        // Define a function that accepts no value. 
        // Store the first property in a variable. 
        // See if the first node is the same as the last node (check if theere is only 1 node). 
        // If so, set the first and last property to be null. 
        // If there is more than 1 node, set the first property to be the next property of first. 
        // Decrement the size. 
        // Return the value of the node dequeued.

        if (!this.first) return null; 

        var temp = this.first;
        if (this.first == this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }

}

var q = new Queue();
q.enqueue("FIRST");
q.enqueue("SECOND");
q.enqueue("THIRD");

// q.dequeue()


