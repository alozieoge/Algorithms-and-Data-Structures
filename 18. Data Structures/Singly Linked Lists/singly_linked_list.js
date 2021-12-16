// A node stores:
// - a piece of data = value
// - reference / pointer to the next node = next
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

// first

// A singly-linked list is a collection of nodes linked to one another in one direction only.
class SinglyLinkedList {
    constructor() {
        this.head = null; 
        this.tail = null;
        this.length = 0;
    }

    push(value) { // Define a function that takes a value.
        // Create a new node using the value passed to the function. 
        // If there is no `head` property on the list, set the `head` and `tail` of the list to be the newly created node.
        // Otherwise, set the `next` property on the `tail` to the new node and update the `tail` property on the list to be the newly created node.
        // Increment the `length` by 1.
        // Return the linked list

        let node = new Node(value);
        
       // MEE
//         if (this.head == null) {
//             this.head = node;
//             this.tail = node;
//         }
//         else {
//             this.tail.next = node;
//             this.tail = node;
//         }
//         this.length += 1;

        // CS
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

//     traverse() {
//         var current = this.head;
//         while (current) {
//             console.log(current.value);
//             current = current.next;
//         }
//     }

    pop() {
        // If there are no nodes in the list, return undefined. 
        // Loop through the list until you reach the tail. 
        // Set the `next` property of the 2nd to last node to be null. 
        // Update the linked list tail to the 2nd to last node. 
        // Decrement the length of the list by 1.
        // Return the removed node. 
      
        // MEE
//         if (!this.head) return null;
// //         if (this.length == 0) return null;
//         var pre = this.head;
//         var temp = pre.next;
//         while (temp.next != null) {
// //             console.log(temp.value);
//             pre = pre.next;
//             temp = temp.next;
//         }
//         var popped = pre.next.value;
//         pre.next = null;
//         this.tail = pre;
//         this.length--;
//         return popped;

        // CS
        if (!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        // To ensure that there are no nodes in the list when the length = 0
        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        // If there are no nodes, return undefined. 
        // Store the current head property in a variable. 
        // Update the list's head property to be the current head's `next` property.
        // Decrement the length by 1. 
        // Return the shifted (old) head node.

        if (!this.head) return undefined;
        var oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        if (this.length == 0) {
//          this.head = null; // No need for this line since for a linked list of length = 1, head node = tail node, and the `next` property is null.
            this.tail = null;
        }
        return oldHead;
    }

    unshift(value) {
        // Define a function that takes a value. 
        // Create a new node using the value passed to the function. 
        // If there is no head property on the list, set the head and tail to be the newly created node. 
        // Otherwise: 
        // - Set the next property of the newly created node to be current head node in the list. 
        // - Update the head property on the list to be equal to the newly created node.
        // Increment the length of the list by 1. 
        // Return the linked list. 

        var newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        // Define a function that accepts an index. 
        // If the index is less than zero (negative) or greater than / equal to the length of the list, return null / undefined. 
        // Loop through the list until you reach the index and return the node at that specific index.

        if (index < 0 || index >= this.length) return null;
        
        // MEE
//         var current = this.head;
//         for (var i = 0; i < index; i++) {
//             current = current.next;
//         }

        // CS
        var counter = 0;
        var current = this.head;
        while (counter != index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, value) {
        // Define a function that accepts an index and a value. 
        // Use the `get(index)` function to find the specific node at that index. 
        // If the node is not found, return false.
        // If the node is found, set the value of that node to be the value passed to the function and return true.

        // MEE
//         var current = this.get(index);
//         if (!current) return false;
//         current.value = value;
//         return true;

        // CS
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        // Define a function that accepts an index and a value. 
        // If the index is less than zero or greater than the length of the list, return false.
        // If the index is equal to the length of the list, push a new node to the end of the list.
        // If the index = 0, unshift a new node to the start of the list. 
        // Else:
        // - Create a new node with the value. 
        // - Using the get method, access the node at index - 1.
        // - Store the next property on that node.
        // - Set / update the next property on that node to be the new node.
        // - Set the next oroperty on the new node to be the saved node from the previous step.
        // - Increment the length by 1. 
        // - Return true.

        // MEE
//         if (index < 0 || index > this.length) return false;
//         if (index == this.length) {
//             return this.push(value) ? true : false;
//         }
//         else if (index == 0) {
//             return this.unshift(value) ? true : false;
//         }
//         else {
//             var newNode = new Node(value);
//             var preNode = this.get(index - 1);
//             var aftNode = preNode.next;
//             preNode.next = newNode;
//             newNode.next = aftNode;
//         }
//         this.length++;
//         return true;

        // CS
        if (index < 0 || index > this.length) return false;
        if (index == this.length) {
            this.push(value)
            return true;
        }
        else if (index == 0) {
            return !!this.unshift(value);
        }
        var newNode = new Node(value);
        var preNode = this.get(index - 1);
        var aftNode = preNode.next;
        preNode.next = newNode;
        newNode.next = aftNode;
        // push() and unshift() will increment the length of the list when called.
        this.length++;
        return true;
    }

    remove(index) {
        // Define a function that accpets an index. 
        // If the index is negative or greater than / equal to the length of the list, return false. 
        // If the index is equal to the list length - 1, pop.
        // If the index = 0, shift. 
        // Using the get method, access the node at index - 1.
        // Set / update the next property on that node to be the next of the next node.
        // Decrement the length by 1. 
        // Return the removed node.

        if (index < 0 || index >= this.length) return undefined;
        if (index == this.length - 1) return this.pop();
        if (index == 0) return this.shift();
        var preNode = this.get(index - 1);
        var removed = preNode.next;
        preNode.next = removed.next;
        this.length--;
        return removed;
    }
    
    print() {
        // Stores all the node values in the link sequence to an array and prints it.
        var arr = [];
        var current = this.head;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr);
    }
}


var list = new SinglyLinkedList();

// list.push("HELLO");
// list.push("THERE");
// list.push("!");
// list.push("<3")
// list.push(":")

// list.pop();
// list.shift()
// list.unshift("SUP");
// list.get(1);
// list.set(2, "GOODBYE");
// list.insert(2, "GOODBYE");
// list.remove(3);

list.push(100);
list.push(201);
list.push(250);
list.push(345);
list.push(500);
