import Queue from "../queue/queue";

class Graph {
  adjList: Map<any, any[]>;
  vertices: any[];
  constructor() {
    this.vertices = [];
    this.adjList = new Map();
  }
  addVertex(v) {
    this.vertices.push(v);
    this.adjList.set(v, []);
  }
  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }
  bfs(v, callback) {
    // 广度优先搜索
    let color = initializeColor(this.vertices);
    let queue = new Queue();
    queue.enqueue(v);

    while(!queue.isEmpty()) {
      let u = queue.dequeue();
      let neighborsList = this.adjList.get(u);
      color[u] = 'grey';
      neighborsList.forEach(item => {
        if(color[item] === 'white') {
          color[item] = 'grey';
          queue.enqueue(item);
        }
      })
      color[u] = 'black';
      if(callback) {
        callback(u);
      }
    }
  }
  dfs(callback) {
    let color = initializeColor(this.vertices);
    dfsVisit(this.vertices[0], color, callback);
  }
  toString() {
    let s = '';
    this.vertices.forEach((item) => {
      let currentList = this.adjList.get(item);
      s += `${item} -> ${currentList.join(' ')}` + '\n';
    })
    return s;
  }
}

function initializeColor(vertices: any[]) {
  let color = [];
  vertices.forEach(item => {
    color[item] = 'white';
  })
  return color;
}

let graph = new Graph();
var myVertices = ['A','B','C','D','E','F','G','H','I'];
var myVertices = ['A','B','C','D','E','F','G','H','I'];
for (var i=0; i<myVertices.length; i++){
 graph.addVertex(myVertices[i]);
}
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

console.log(graph.toString());

graph.bfs(myVertices[0], function(u) {
  console.log(u);
})

function dfsVisit(arg0: any, color: any[], callback: any) {
  color[arg0] = 'grey';
  if(callback) {
    callback(arg0);
  }
  let neighbors = graph.adjList.get(arg0);
  neighbors.forEach(item => {
    if(color[item] === 'white') {
      dfsVisit(item, color, callback);
    }
  })
  color[arg0] = 'black';
}
console.log('------------');
graph.dfs(function(value) {
  console.log(value);
})