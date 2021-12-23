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
        // Define a function that accepts a value. 
        // Create a new node from the passed value. 
        // Starting at the root:
        // Check if there is a root:
        // - If not, the root is now equal to the new node.
        // - If there is a root, check if the value of the new node is greater or less than the value of the root
        //   - If it is greater:
        //   - Check to see if there is a node to the right
        //     - If there is, move to that node and repeat these steps. 
        //     - If there is not, add that new node as the `right` property.
        //   - If it is less:
        //   - Check to see if there is a node to the left.#
        //     - If there is, move to that node and repeat these steps. 
        //     - If there is not, add that new node as the `left` property.
        // Return the entire tree.

        // MEE
//         var newNode = new Node(value);
//         if (!this.root) {
//             this.root = newNode;
//             return this;
//         }

//         var parentNode = this.root;

//         // Iterative
//         while(true) {
//             if (newNode.value > parentNode.value) {
//                 if (parentNode.right) {
//                     parentNode = parentNode.right;
//                 }
//                 else {
//                     parentNode.right = newNode;
//                     return this;
//                 }
//             }
//             else if (newNode.value < parentNode.value) {
//                 if (parentNode.left) {
//                     helper(parentNode.left);
//                 }
//                 else {
//                     parentNode.left = newNode;
//                     return this;
//                 }
//             }
//             else {
//                 return undefined;
//             }
//         }

//         // Recursive
//         function helper(parent) {
//             if (newNode.value > parent.value) {
//                 if (parent.right) {
//                     helper(parent.right);
//                 }
//                 else {
//                     parent.right = newNode;
//                     inserted = true;
//                 }
//             }
//             else if (newNode.value < parent.value) {
//                 if (parent.left) {
//                     helper(parent.left);
//                 }
//                 else {
//                     parent.left = newNode;
//                     inserted = true;
//                 }
//             }
//             else {
//                 inserted = true;
//             }

//             if (inserted) return parent;
//         }

//         this.root = helper(parentNode);
//         return this;

        // CS
//         var newNode = new Node(value);
//         if (this.root == null) {
//             this.root = newNode;
//             return this;
//         }
//         else {
//             var current = this.root;
//             while(true) {
//                 if (value == current.value) return undefined;

//                 if (value < current.value) {
//                     if (current.left == null) {
//                         current.left = newNode;
//                         return this;
//                     }
//                     else {
//                         current = current.left;
//                     }
//                 }
//                 else if(value > current.value){
//                     if (current.right == null) {
//                         current.right = newNode;
//                         return this;
//                     }
//                     else {
//                         current = current.right;
//                     }
//                 }
//             }
//         }
        
        // CS refactored
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
        // Define a function that accepts a value. 
        // Starting at the root:
        // Check if there is a root:
        // - If not, we're done searching. Return false.
        // - If there is a root, check if the value of the root is the value we're looking for. 
        //   - If yes, we're done searching. Return the found node. 
        //   - If not, check if the value of the root is greater or less than the value of the root
        //     - If it is greater:
        //     - Check to see if there is a node to the right.
        //       - If there is, move to that node and repeat these steps. 
        //       - If there is not, we're done searching. Return false.
        //     - If it is less:
        //     - Check to see if there is a node to the left.
        //       - If there is, move to that node and repeat these steps. 
        //       - If there is not, we're done searching. Return false.

        // MEE
//         if (this.root == null) return false;

//         var current = this.root;

//         while(true) {
//             if (value == current.value) {
//                 return current;
//             }
//             if (value < current.value) {
//                 if (current.left == null) {
//                     return false;
//                 }
//                 current = current.left;
//             }
//             if (value > current.value) {
//                 if (current.right == null) {
//                     return false;
//                 }
//                 current = current.right;
//             }
//         }

        // CS 
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
}

var tree = new BinarySearchTree();

// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);

tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
tree.insert(3);

tree.find(13);
tree.contains(16);
