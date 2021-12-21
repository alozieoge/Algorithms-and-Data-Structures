class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null; 
        this.last = null;
        this.size = 0;
    }

    push(value) {
        // Define a function tht accepts a value. 
        // Create a new node with that value. 
        // If there are no nodes in the stack, set the first and last node property to be equal to the newly created node.
        // If there is at least one node, create a variable that stores the current first property on the stack. 
        // Reset the first property to be equal to the newly created node. 
        // Set the next property on the first node to be the previous stored first variable. 
        // Increment the size of the stack by 1. 
        // Return the new size of the stack. 
        
        // MEE
//         var newNode = new Node(value);
//         if (this.size == 0) {
//             this.first = newNode;
//             this.last = newNode;
//         }
//         else {
//             newNode.next = this.first;
//             this.first = newNode;

// //             this.last.next = newNode;
// //             this.last = newNode;
//         }
//         this.size++;
//         return this.size;

        // CS
        var newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }


    pop() {
        // Define  function thaattakes no arguments. 
        // If there are no nodes in the stack, return null. 
        // Create a temporary variable to store the first property on the stack. 
        // If tyhere is only 1 node, set the first and last property to null. 
        // If there is more than 1 node, set the first property to be the next property o the current first node.
        // Decrement the size of the stack by 1.
        // Return the value of the removed node.

        // MEE
//         if (this.size == 0) return null;
//         var poppedNode = this.first;
//         if (this.size == 1) {
//             this.first = null;
//             this.last = null;
//         }
//         else {
//             this.first = this.first.next;
//         }
//         poppedNode.next = null;
//         this.size--;
//         return poppedNode.value;

        // CS
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

stack = new Stack();

stack.push("FIRST");
stack.push("SECOND");
stack.push("THIRD");

// stack.pop()
