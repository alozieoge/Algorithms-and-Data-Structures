class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(value, priority) {
        this.values.push({value, priority});
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => (a.priority - b.priority));
    }
}


class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }


    addEdge(vertex1, vertex2, weight) { 
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            if (!this.adjacencyList[vertex1].includes(vertex2)) {
                this.adjacencyList[vertex1].push({node: vertex2, weight: weight});
            }
            if (!this.adjacencyList[vertex2].includes(vertex1)) {
                this.adjacencyList[vertex2].push({node: vertex1, weight}); // ES6 supports using the value name as the key name in an object if not given.
            }
        }
    }

    Dijkstras(start, finish) {
        // Define a function that accepts a starting and ending vertex. 
        // Create an object called distances and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0. 
        // After setting a value in the distances object, add each vertex with a priority of infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin. 
        // Create another object called previous and set each key to be every vertex in the adjacency list with a value of null. 
        // Start looping as long as the priority queue is not empty:
        // - Dequeue a vertex from the priority queue. 
        // - If that vertex is the same as the engine vertex, we're done!
        // - Otherwise, loop through each value in the adjacency list at that vertex:
        //   - Calculate the distance to that vertex from the starting vertex. 
        //   - If the calculated distance is less than the stored distance for that vertex:
        //     - Update the distance object with the new lower distance. 
        //     - Update the previous object with that vertex. 
        //     - Enqueue the vertex with the total distance from the start vertex. 

        // MEE
//         var distances = {};
//         Object.keys(this.adjacencyList).forEach(vertex => {
//             vertex == start ? distances[vertex] = 0 : distances[vertex] = Infinity;
//         })

//         var queue = new PriorityQueue(); 
//         Object.keys(distances).forEach(vertex => {
//             queue.enqueue(vertex, queue[vertex]);
//         })
        
//         var previous = {}; 
//         Object.keys(this.adjacencyList).forEach(vertex => {
//             previous[vertex] = null;
//         })

//         var vertex;
//         var totalDistance;

//         while (queue.values.length) {
//             vertex = queue.dequeue();
//             if (vertex == finish) {
//                 break;
//             }
//             totalDistance = 0;
//             this.adjacencyList[vertex].forEach(neighbor => {
//                 totalDistance += neighbor.weight;
//                 if (totalDistance < distances[vertex]) {
//                     distances[neighbor] = totalDistance; 
//                     previous[neighbor] = vertex;
//                     queue.enqueue(neighbor, totalDistance);
//                 }
//             })
//         }

//         return previous;

        // CS - ES2015 Syntax
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [] // to return at end
        let smallest;

        // Build-up initial state
        for (let vertex in this.adjacencyList) {
            if (vertex == start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            }
            else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // console.log(distances);

        // As long as there is something to visit in the priority queue
        while (nodes.values.length) {
            smallest = nodes.dequeue().value; // current visited node
            // console.log(smallest);
            if (smallest == finish) {
                
                // console.log(distances);
                // console.log(previous);

                // We're are done
                // Build path to return by walking backwards from the 'finish' vertex in the 'previous' object.
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] != Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    // console.log(neighbor);
                    // console.log(this.adjacencyList[smallest][neighbor]);

                    // Find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    // Calculate new distance from starting node to neighboring node
                    let candidate = distances[smallest] + nextNode.weight; // current shortest distance to current visited node + distance to neighboring node

                    let nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
                        // Updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        // Updating previous - how we got to neighbor
                        previous[nextNeighbor] = smallest;
                        // Enqueue in priority queue with new priority (distance)
                        nodes.enqueue(nextNeighbor, candidate);
                    }                   
                }
            }
        }

        // console.log(path);
        return path.concat(smallest).reverse();

    }
}


var graph = new WeightedGraph(); 
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

graph.Dijkstras("A", "E");
// [A, C, D, F, E]
