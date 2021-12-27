class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
  

    insert(value) {
        // Define a function that accepts a value as parameter. 
        // Push the value into the `values` property of the heap.
        // Bubble up.

        this.values.push(value);
        this.bubbleUp();
        return this.values;
    }

    bubbleUp() {
        // - Create a variable called `index` which is the length of `values` - 1.
        // - Create a variable called `parentIndex` which is the floor of (index - 1) / 2.
        // - Keep looping as long as the `values` element at `parentIndex` is less than the `values` element at the child `index`.
        //   - Swap the value of the `values` element at the `parentIndex` with the value of the elemtn at the child `index`.
        //   - Set the child `index` to be equal to the `parentIndex` and repeat.
        
        // MEE
//         var index = this.values.length - 1;
//         var parentIndex = Math.floor((index - 1) / 2);
//         var temp = 0;

//         while (this.values[parentIndex] < this.values[index]) {
//             temp = this.values[index];
//             this.values[index] = this.values[parentIndex];
//             this.values[parentIndex] = temp;
//             // ES2015 swap
// //                 [this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]];

//             index = parentIndex;
//             parentIndex = Math.floor((index - 1) / 2);
//         }

        // CS
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while (idx > 0) {
//             console.log(this.values);
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element <= parent) {
                break; 
            }
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }


    extractMax() {
        // Swap the first value in the `values` property with the last one. 
        // Pop from the `values` property, so you can return the value at the end. 
        // Have the new root 'sink down' to the correct spot.
        // Return the old root.

        // MEE
//         let length = this.values.length;
//         if (length == 0) return undefined;

//         let temp = this.values[0];
//         this.values[0] = this.values[length - 1];
//         this.values[length - 1] = temp;

//         let max = this.values.pop();
//         this.sinkDown();
//         return max;

        // CS
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return max;
    }

    sinkDown() {
        // The parent index starts at 0 (root).
        // Find the index of the left child: 2 * index + 1. Make sure it is not out of bound. 
        // Find the index of the right child: 2 * index + 2. Make sure it is not out of bound. 
        // If the left or right child is greater then the element, swap. 
        // - If both left and right children are greater, swap with the largest child. 
        // The child index you swapped to now becomes the new parent index. 
        // Keep looping and swapping until neither child is larger than the element. 

        // MEE
//         let parentIdx = 0;

//         while (parentIdx < this.values.length) {
//             let leftIdx = (parentIdx * 2) + 1;
//             let rightIdx = (parentIdx * 2) + 2;
//             let parent = this.values[parentIdx];

//             if (leftIdx == this.values.length) {
//                 break;
//             }
//             else if (rightIdx == this.values.length) {
//                 this.values[leftIdx] = parent;
//                 break;
//             }
//             else {
//                 let leftChild = this.values[leftIdx];
//                 let rightChild = this.values[rightIdx];

//                 if (leftChild <= parent && rightChild <= parent) {
//                     break;
//                 }
//                 if (leftChild > rightChild) {
//                     this.values[parentIdx] = leftChild;
//                     this.values[leftIdx] = parent;
//                     parentIdx = leftIdx;
//                 }
//                 else if (rightChild > leftChild) {
//                     this.values[parentIdx] = rightChild;
//                     this.values[rightIdx] = parent;
//                     parentIdx = rightIdx;
//                 }
//             }
//         }

        // CS
        let idx = 0;
        const length = this.values.length; 
        const element = this.values[0]; 

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null; // hold the index of the child node to swap

            // Left child
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            // Right child
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
//                 if (rightChild > element && rightChild > leftChild) {
                if (
                    (swap == null && rightChild > element) || 
                    (swap != null && rightChild > leftChild)
                ) {
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

let heap = new MaxBinaryHeap();
// heap.values = [41,39,33,18,27,12];

// heap.insert(55);
// heap.insert(1);
// heap.insert(45);
// heap.insert(199);

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.values);

heap.extractMax();
