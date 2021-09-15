const adjacencyList = require('./airportsGraph'); 
let steps = 0;

function dfs(start, visited = new Set()) {
  console.log(start);
  steps++;
  visited.add(start);

  const destinations = adjacencyList.get(start);

  for (const destination of destinations) {
    if (destination === 'BKK') {
      console.log(`DFS found in ${steps} steps`);
      return;
    }
    if (!visited.has(destination)) {
      dfs(destination, visited);
    }
  }
}

dfs('PHX');
