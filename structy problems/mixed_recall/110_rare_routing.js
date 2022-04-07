const rareRouting = (n, roads) => {
  let visited = new Set();
  const graph = buildGraph(roads, n);
  
 const validate = traverse(graph, visited, 0, null)
  
  return validate  && visited.size === n;
};

const buildGraph = (roads, n) => {
  const graph = {};
  
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  
  for (let road of roads) {
    const [a, b] = road;
    graph[a].push(b);
    graph[b].push(a);
    
  }
  
  return graph;
}

const traverse = (graph, visited, node, lastNode) => {
  if(visited.has(node)) return false;
  
  visited.add(node);
  
  for (let neighbor of graph[node]) {
    if (neighbor !== lastNode && traverse(graph, visited, neighbor, node) === false) {
      return false;
    }
  }
  return true;
}