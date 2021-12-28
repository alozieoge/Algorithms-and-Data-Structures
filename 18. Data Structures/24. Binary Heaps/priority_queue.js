class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
        this.insertTime = Date.now(); // Additional property to distingush between multiple nodes with the same priority.
    }
}

class PriorityQueue { // Based on Minimum Binary Heap
    constructor() {
        this.values = [];
    }


    enqueue(value, priority) {
        // Define a function that accepts a value as parameter. 
        // Push the value into the `values` property of the heap.
        // Bubble up.

        let newNode = new Node(value, priority);

        this.values.push(newNode);
        this.bubbleUp();
        return this.values;
    }

    bubbleUp() {
        // - Create a variable called `index` which is the length of `values` - 1.
        // - Create a variable called `parentIndex` which is the floor of (index - 1) / 2.
        // - Keep looping as long as the `values` element at `parentIndex` is greater than the `values` element at the child `index`.
        //   - Swap the value of the `values` element at the `parentIndex` with the value of the elemtn at the child `index`.
        //   - Set the child `index` to be equal to the `parentIndex` and repeat.

        let idx = this.values.length - 1;
        const element = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element.priority >= parent.priority) {
                break; 
            }
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }


    dequeue() {
        // Swap the first value in the `values` property with the last one. 
        // Pop from the `values` property, so you can return the value at the end. 
        // Have the new root 'sink down' to the correct spot.
        // Return the old root.

        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return min;
    }

    sinkDown() {
        // The parent index starts at 0 (root).
        // Find the index of the left child: 2 * index + 1. Make sure it is not out of bound. 
        // Find the index of the right child: 2 * index + 2. Make sure it is not out of bound. 
        // If the left or right child is less then the element, swap. 
        // - If both left and right children are lesser, swap with the smallest child. 
        // The child index you swapped to now becomes the new parent index. 
        // Keep looping and swapping until neither child is smaller than the element. 

        let idx = 0;
        const length = this.values.length; 
        const element = this.values[0]; 

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            // Left child
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            // Right child
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (rightChild.priority < element.priority && rightChild.priority < leftChild.priority) {
//                 if (
//                     (swap == null && rightChild.priority < element.priority) || 
//                     (swap != null && rightChild.priority < leftChild.priority)
//                 ) {
                    swap = rightChildIdx;
                }
            }            
            if (swap == null) break;
            // Swap
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

}


let ER = new PriorityQueue();

ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);

ER.dequeue();
