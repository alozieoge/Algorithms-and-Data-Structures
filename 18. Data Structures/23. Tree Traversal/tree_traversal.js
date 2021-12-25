class Node {
    constructor(value) {
        this.value = value; 
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        var newNode = new Node(value);

        if (this.root == null) {
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while (true) {
            if (value == current.value) return undefined;
            if (value < current.value) {
                if (current.left == null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
            else {
                if (current.right == null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(value) {
        if (this.root == null) return undefined;

        var current = this.root;
        var found = false;

        while(current && !found) {
            if (value < current.value) {
                current = current.left;
            }
            else if (value > current.value) {
                current = current.right;
            }
            else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;           
    }

    contains(value) {
        if (this.root == null) return false;

        var current = this.root;
        var found = false;

        while(current && !found) {
            if (value < current.value) {
                current = current.left;
            }
            else if (value > current.value) {
                current = current.right;
            }
            else {
                return true;
            }
        }
        return false;         
    }

    BFS() {
        // Iteratively
        // Create a queue (or an array having push() and shift() only) and a variable (also an an array) to store the values of the nodes visited.
        // Place the root node in the queue. 
        // Loop as long as there is anything in the queue. 
        // - Dequeue a node from the queue and push the node value into the variable that stores the node values. 
        // - If there is a left property on the node dequeued, add it to the queue. 
        // - If there is a right property on the node dequeued, add it to the queue.
        // Return the variable that stores the values.

        // MEE
//         var queue = [];
//         var visited = [];
//         queue.push(this.root);
//         var node;

//         while (queue.length != 0) {
//             node = queue.shift();
// //          console.log(node.value);
//             visited.push(node.value);
//             if (node.left != null) {
//                 queue.push(node.left);
//             }
//             if (node.right != null) {
//                 queue.push(node.right);
//             }
//         }

//         return visited;

        // CS
        var node = this.root, 
            data = [],
            queue = []; 
        
        queue.push(node);

        while (queue.length) { // In JS, !0 = true, hence 0 = false.
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
    
    DFSPreOrder() {
        // Create a variable to store the values of the nodes visited. 
        // Store the root of the tree / BST in a variable - current.
        // Write a helper function which accepts a node:
        // - Push the value of the node to the variable that stores the values. 
        // - If the node has a left property, call the helper function (recursively) with the left property of the node. 
        // - If the node has a right property, call the helper function (recursively) with the right property of the node. 
        // Invoke the helper function with the current variable. 
        // Return the array of values. 

        var data = [],
            current = this.root;

        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }

    DFSPostOrder() {
        // Create a variable to store the values of the nodes visited. 
        // Store the root of the tree / BST in a variable - current.
        // Write a helper function which accepts a node:
        // - If the node has a left property, call the helper function (recursively) with the left property of the node. 
        // - If the node has a right property, call the helper function (recursively) with the right property of the node. 
        // - Push the value of the node to the variable that stores the values. 
        // Invoke the helper function with the current variable. 
        // Return the array of values. 

        var data = [],
            current = this.root;

        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(current);
        return data;
    }

    DFSInOrder() {
        // Create a variable to store the values of the nodes visited. 
        // Store the root of the tree / BST in a variable - current.
        // Write a helper function which accepts a node:
        // - If the node has a left property, call the helper function (recursively) with the left property of the node. 
        // - Push the value of the node to the variable that stores the values.
        // - If the node has a right property, call the helper function (recursively) with the right property of the node. 
        // Invoke the helper function with the current variable. 
        // Return the array of values. 

        var data = [],
            current = this.root;

        function traverse(node) {
//             if (node.left) traverse(node.left); 
            node.left && traverse(node.left); 
            data.push(node.value);            
//             if (node.right) traverse(node.right);
            node.right && traverse(node.right);
        }
        traverse(current);
        return data;
    }
}


var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);

//      10
//     /  \
//    6    15
//  /   \    \
// 3     8    20

// tree.BFS(); //           [10,6,15,3,8,20]
// tree.DFSPreOrder(); //   [10,6,3,8,15,20]
// tree.DFSPostOrder(); //  [3,8,6,20,15,10]
// tree.DFSInOrder(); //    [3,6,8,10,15,20]
