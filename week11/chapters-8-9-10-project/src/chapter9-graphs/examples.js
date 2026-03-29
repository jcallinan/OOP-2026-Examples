import Graph from './graph.js';

const graph = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
myVertices.forEach((v) => graph.addVertex(v));

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log('Adjacency List:\n' + graph.toString());

const bfsVisit = [];
graph.breadthFirstSearch('A', (value) => bfsVisit.push(value));
console.log('BFS traversal from A:', bfsVisit.join(' -> '));

const { distances, predecessors } = graph.BFS('A');
console.log('BFS distances from A:', distances);
console.log('BFS predecessors from A:', predecessors);

const dfsVisit = [];
graph.depthFirstSearch((value) => dfsVisit.push(value));
console.log('DFS traversal:', dfsVisit.join(' -> '));
