//       2 ------ 0
//     /   \
//    /     \
//   1 ----- 3

// 3 ways to represent graphs
// // Edge list
// const graph = [[0,2], [2,3], [2,1], [1,3]];

// // Adjacency list (index of array is the value of graph node)
// const graph1 = [[2], [2,3], [0,1,3], [1,2]];

// // Adjacency matrix
// const graph2 = [
//   [0, 0, 1, 0],
//   [0, 0, 1, 1],
//   [0, 1, 0, 1],
//   [0, 1, 1, 0]
// ]

class Graph {

  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    this.numberOfNodes++;
    this.adjacentList[node] = [];
  }

  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }

  showConnections() {
    console.log('adjacentList', this.adjacentList);
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }

}

const mGraph = new Graph();
mGraph.addVertex('0');
mGraph.addVertex('1');
mGraph.addVertex('2');
mGraph.addVertex('3');
mGraph.addVertex('4');
mGraph.addVertex('5');
mGraph.addVertex('6');
mGraph.addEdge('3', '1');
mGraph.addEdge('3', '4');
mGraph.addEdge('4', '2');
mGraph.addEdge('4', '5');
mGraph.addEdge('1', '2');
mGraph.addEdge('1', '0');
mGraph.addEdge('0', '2');
mGraph.addEdge('6', '5');

mGraph.showConnections();
