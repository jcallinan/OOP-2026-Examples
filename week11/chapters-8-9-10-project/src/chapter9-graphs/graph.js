import Dictionary from '../shared/dictionary.js';
import Queue from '../shared/queue.js';

const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2
};

const initializeColor = (vertices) => {
  const color = {};
  vertices.forEach((v) => {
    color[v] = Colors.WHITE;
  });
  return color;
};

export default class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Dictionary();
  }

  addVertex(v) {
    if (this.adjList.hasKey(v)) return;
    this.vertices.push(v);
    this.adjList.set(v, []);
  }

  addEdge(v, w) {
    if (!this.adjList.hasKey(v)) this.addVertex(v);
    if (!this.adjList.hasKey(w)) this.addVertex(w);
    this.adjList.get(v).push(w);
    if (!this.isDirected) this.adjList.get(w).push(v);
  }

  toString() {
    return this.vertices
      .map((v) => `${v} -> ${this.adjList.get(v).join(' ')}`)
      .join('\n');
  }

  breadthFirstSearch(startVertex, callback) {
    const color = initializeColor(this.vertices);
    const queue = new Queue();

    queue.enqueue(startVertex);
    while (!queue.isEmpty()) {
      const u = queue.dequeue();
      const neighbors = this.adjList.get(u);
      color[u] = Colors.GREY;
      for (const w of neighbors) {
        if (color[w] === Colors.WHITE) {
          color[w] = Colors.GREY;
          queue.enqueue(w);
        }
      }
      color[u] = Colors.BLACK;
      if (callback) callback(u);
    }
  }

  BFS(startVertex) {
    const color = initializeColor(this.vertices);
    const distances = {};
    const predecessors = {};
    this.vertices.forEach((v) => {
      distances[v] = 0;
      predecessors[v] = null;
    });
    const queue = new Queue();
    queue.enqueue(startVertex);

    while (!queue.isEmpty()) {
      const u = queue.dequeue();
      color[u] = Colors.GREY;
      const neighbors = this.adjList.get(u);
      for (const w of neighbors) {
        if (color[w] === Colors.WHITE) {
          color[w] = Colors.GREY;
          distances[w] = distances[u] + 1;
          predecessors[w] = u;
          queue.enqueue(w);
        }
      }
      color[u] = Colors.BLACK;
    }
    return { distances, predecessors };
  }

  depthFirstSearch(callback) {
    const color = initializeColor(this.vertices);
    const visit = (u) => {
      color[u] = Colors.GREY;
      if (callback) callback(u);
      for (const w of this.adjList.get(u)) {
        if (color[w] === Colors.WHITE) visit(w);
      }
      color[u] = Colors.BLACK;
    };

    this.vertices.forEach((v) => {
      if (color[v] === Colors.WHITE) visit(v);
    });
  }
}
