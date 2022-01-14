class Graph { // Undirected
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        // Write a method that accepts a name of a vertex. 
        // Add a key to the adjacency list with the name of the vertex and set its value to be an empty array. 

        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) { 
        // Write a method that accepts 2 vertices - vertex1 and vertex2. 
        // In the adjacency list, find the key of vertex1 and push vertex2 to its array. 
        // In the adjacency list, find the key of vertex2 and push vertex1 to its array. 
        // Handle duplication and non-key errors in the adjacency list.

        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            if (!this.adjacencyList[vertex1].includes(vertex2)) {
                this.adjacencyList[vertex1].push(vertex2);
            }
            if (!this.adjacencyList[vertex2].includes(vertex1)) {
                this.adjacencyList[vertex2].push(vertex1);
            }
        }
    }

    removeEdge(vertex1, vertex2) {
        // Write a method that accepts 2 vertices - vertex1 and vertex2.
        // Reassign the key of vertex1 to be an array that does not contain vertex2. 
        // Resaaign the key of vertex2 to be an array that does not contain vertex1. 
        // Handle non-valid keys in the adjacency list.

        // CS
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v != vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v != vertex1);
        }
    }

    removeVertex(vertex) {
        // Write a function that accepts a vertex to remove. 
        // Loop as long as there are any other vertices in the adjacency list for that vertex. 
        // - Call the removeEdge() function with the vertex to remove and each value in the adjacency list for that vertex. 
        // Delete the key in the adjacency list for that vertex.

        // CS
        if (!this.adjacencyList[vertex]) return;
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    DFSRecursive(startVertex) {
        // Write a function that accepts a starting vertex. 
        // Create a list to store the results to be returned at the end. 
        // Create an object to store the visited vertices. 
        // Create a helper function which accepts a vertex. 
        // - The helper function should return early if the vertex is empty (base case). 
        // - Place the vertex into the visited object and push that vertex into the results array. 
        // - Loop over all of the values in the adjacencyList for that vertex. 
        // - If any of those values have not been visited, recursively invoke the helper function with that vertex. 
        // Invoke the helper function with the starting vertex. 
        // Return the result array. 

        // MEE
//         var result = [];
//         var visited = {};
//         const adjacencyList = this.adjacencyList;

//         function DFS(vertex) {
//             if (!vertex) return;
//             visited[vertex] = true;
//             result.push(vertex);
//             for (var adjacentVertex of adjacencyList[vertex]) {
//                 if (!visited[adjacentVertex]) {
//                     DFS(adjacentVertex);
//                 }
//             }
//         }

//         DFS(startVertex);
//         return result;
        
        // CS
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function DFS(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return DFS(neighbor);
                }
            })
        })(startVertex);

        return result;
    }

    DFSIterative(startVertex) {
        // Write a function that accepts a starting node. 
        // Create a stack to help use keep track of vertices (use a list/array)
        // Create a list / array to store the end result, to be returned at the very end
        // Create an object to store the visited vertices. 
        // Add the starting vertex to the stack, and mark it as visited. 
        // While the stack has something in it:
        // - Pop the next vertex from the stack. 
        // - If that vertex hasn't been visted yet:
        //   - Mark it as visited. 
        //   - Add it to the result list. 
        //   - Push all of its neighbors into the stack. 

        // MEE
//         var stack = [];
//         var result = [];
//         var visited = {};
//         var vertex = "";

//         stack.push(startVertex);
//         while (stack.length > 0) {
//             console.log(stack);
//             vertex = stack.pop();
//             if (!visited[vertex]) {
//                 visited[vertex] = true;
//                 result.push(vertex);
//                 this.adjacencyList[vertex].forEach(neighbor => {
//                     stack.push(neighbor);
//                 });
//             }
//         }
//         return result;

        // CS
        const stack = [startVertex];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[startVertex] = true;
        while(stack.length) {
            console.log(stack);
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }

}


var g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

// g.DFSRecursive("A");

