const adjacencyList = require('./airportsGraph'); 

function bfs(start, find) {
  const queue = [start];
  const visited = new Set();

  while (queue.length > 0) {
    const airport = queue.shift();
    const destinations = adjacencyList.get(airport);
    
    for (const destination of destinations) {
      if (destination === find) {
        console.log(airport, 'found', find);
      }
      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        console.log(destination);
      }
    }

  }
}

bfs('PHX', 'BKK');

console.log('adjacencyList', adjacencyList);
 