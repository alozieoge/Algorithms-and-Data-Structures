class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue { // Based on Minimum Binary Heap
    constructor() {
        this.values = [];
    }


    enqueue(value, priority) {
        let newNode = new Node(value, priority);

        this.values.push(newNode);
        this.bubbleUp();
        return this.values;
    }

    bubbleUp() {
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
        const min = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return min;
    }

    sinkDown() {
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
        // ES2015 Syntax
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
        return path.concat(smallest).reverse()
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
