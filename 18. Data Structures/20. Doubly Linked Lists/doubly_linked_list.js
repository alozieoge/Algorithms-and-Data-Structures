class Node {
    constructor(value) {
        this.value = value;
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

    // MEE
//     push(value) {
//         var node = new Node(value);
//         if (this.length == 0) {
//             this.head = node;
//             this.tail = this.head;
//         }
//         else {
//             var prev = this.tail;
//             this.tail.next = node;
//             this.tail = node;
//             this.tail.prev = prev;
//         }
//         this.length++;
//         return this;
//     }

    // CS
    push(value) {
        // Define a function that acceots a value. 
        // Create a new node using the value passed to the function. 
        // If there is no `head` property on the list, set the `head` and `tail` of the list to be the newly created node.
        // Otherwise: 
        // - Set the `next` property on the `tail` to the new node
        // - Set the `prev` property on the new node to be equal to the tail. 
        // - Update the `tail` property on the list to be the newly created node.
        // Increment the `length` by 1.
        // Return the doubly linked list

        var newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }


    pop() {
        // Define the function to take no value. 
        // If there are no nodes in the list, return undefined. 
        // Store the current tail in a variable (oldTail) to return later.
        // If the length is 1, set the head and tail to be null. 
        // Update the DLL tail to be the previous node of oldTail. 
        // Set the new tail's next property to null. 
        // Also set the previous property of oldTail to be null to prevent 'ghost' references.
        // Decrement the length of the list by 1.
        // Return the removed node (oldTail). 
        
        // MEE
//         if (!this.head) return undefined;

//         var oldTail = this.tail;
//         if (this.length == 1) {
//             this.head = null;
//             this.tail = null;
//         }
//         else {
//             this.tail = oldTail.prev;
//             this.tail.next = null;
//             oldTail.prev = null;
//         }
//         this.length--;
//         return oldTail;

        // CS
        if (!this.head) return undefined;

        var poppedNode = this.tail;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null; // Prevent ghost pointer.
        }
        this.length--;
        return poppedNode;
    }


    shift() {
        // Define a function that accepts no value. 
        // Store the current head property in a variable. 
        // If the length is 1:
        // - Set the head to null. 
        // - Set the tail to null. 
        // Otherwise
        // Update the head to be equal to the next of the old head. 
        // Set the head's prev property to null. 
        // Set the old head's next property to null. 
        // Decerement the length by 1. 
        // Return the old (shifted) head.

        // MEE
//         if (!this.head) return undefined;

//         var oldHead = this.head;
//         this.head = oldHead.next;
//         oldHead.next = null;

//         if (this.head) this.head.prev = null;

//         this.length--;
        
//         if (this.length == 0) {
//             this.tail = null;
//         }
//         return oldHead;

        // CS
        if (this.length == 0) return undefined; 
        var oldHead = this.head;

        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = oldHead.next;
            this.head.prev = null; 
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(value) {
        // Define a function that takes a value. 
        // Create a new node with the value passed to the function. 
        // If the length is 0:
        // - Set the head to be the new node. 
        // - Set the tail to tbe the new node. 
        // Otherwise:
        // - Set the prev properrty on the head of the list to be the new node.
        // - Set the next property on the current head to be null. 
        // Increment the length of the list. 
        // Return the updated list.

        // MEE
//         var newNode = new Node(value);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = this.head;
//         }
//         else {
//             newNode.next = this.head;
//             this.head.prev = newNode;
//             this.head = newNode;
//         }
//         this.length++;
//         return this;

        // CS
        var newNode = new Node(value);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {   
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        // Define a method that takes the index as an argument.
        // If the index is less than 0 or greater than / equal to the length of the list, return undefined.
        // If the index is less than or equal to half of the list length:
        // - Loop through the list starting from the head and towards the middle.
        //   - Increment the counter as you progress.
        // - Return the node once it is found. 
        // If the index is greater than half of the list length:
        // - Loop through the list starting from the tail and towards the middle.
        //   - Decrement the counter as you progress.
        // - Return the node once it is found. 

        // MEE
//         if (index < 0 || index >= this.length) return null;
//         var middle = Math.floor(this.length / 2);
//         if (index <= middle) {
//             var counter = 0;
//             var current = this.head;
//             while (counter != index) {
//                 counter++;
//                 current = current.next;
//             }
//             return current;
//         }
//         else {
//             var counter = this.length - 1;
//             var current = this.tail;
//             while (counter != index) {
//                 counter--;
//                 current = current.prev;
//             }
//             return current;
//         }

        // CS
        if (index < 0 || index >= this.length) return null;
        var count, current;

        if (index <= this.length / 2) {
//             console.log("WORKING FROM START!");
            count = 0;
            current = this.head;
            while (count != index) {
                current = current.next;
                count++;
            }
        }
        else {
//             console.log("WORKING FROM END!");
            count = this.length - 1;
            current = this.tail;
            while (count != index) {
                current = current.prev;
                count--;
            }
        }

        return current;
    }

    set(index, value) {
        // Define a function that accepts an index and a value. 
        // Create a variable that stores the result of the get() method at the index passed to the function. 
        // If the get() method returns a valid node, set the value of that node to be equal to the value passed to the function. 
        // - Return true.
        // Othersied, return false.

        var foundNode = this.get(index);
        if (foundNode != null) {
            foundNode.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        // Define a function that takes an index and a value.
        // If the index is less than 0 or greater than the length of the list, return false. 
        // If the index is 0, use unshift().
        // If the index is the length of the list, use push().
        // Otherwise, use the get() method to access the node just before the position of interest i.e. at index - 1.
        // - Set the next and prev properties on the currect nodes to link everyhting together.
        // - Increment the length of the list. 
        // - Return true.

        if (index < 0 || index > this.length) return false;
        if (index == 0) return !!this.unshift(value);
        if (index == this.length) return !!this.push(value);

        var newNode = new Node(value);
        var beforeNode = this.get(index - 1);
        var afterNode = beforeNode.next;
        
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
 
        this.length++;
        return true;
    }

    remove(index) {
        // Define a function that takes an index.
        // If the index is less than 0 or greater than / equal to the length of the list, return udnefined. 
        // If the index is 0, use shift().
        // If the index is the list length - 1, use pop().
        // Otherwise, use the get() method to retrieve the node to be removed.
        // - Update the next and prev properties to remove the found node from the list.
        // - Decrement the length of the list. 
        // - Return true.

        if (index < 0 || index >= this.length) return undefined;
        if (index == 0) return this.shift();
        if (index == this.length - 1) return this.pop();

        var removedNode = this.get(index);
        var beforeNode = removedNode.prev;
        var afterNode = removedNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
//         removedNode.prev.next = removedNode.next;
//         removedNode.next.prev = removedNode.prev;

        removedNode.prev = null;
        removedNode.next = null;
        this.length--;
        return removedNode;
    }

    print() {
        // Stores all the node values in the list to an array and prints it.
        var arr = [];
        var current = this.head;
        for (var i = 0; i < this.length; i++) {
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr);
    }

}

// var first = new Node(12);
// first.next = new Node(13);
// first.next.prev = first;

var list = new DoublyLinkedList();
// list.push(99);
// list.push(100);
// list.push("LAST ITEM");

// list.push(1);
// list.push(2);
// list.push(50);
// list.push(100);
// list.pop();

list.push("Harry");
list.push("Ron");
list.push("Hermoine");
// list.unshift("Neville");

// list.set(2, "Voldemort");
// list.insert(4, "Hagrid");
//list.remove(0);

