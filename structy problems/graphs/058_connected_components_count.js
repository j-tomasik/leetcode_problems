const connectedComponentsCount = (graph) => {
  let visited = new Set();
  let count = 0;
  
  for(let node in graph){
    if(explore(visited, graph, node) === true) {
      count += 1;
    }
    
    
  }
  return count;
};

const explore = (visited, graph, src) => {
  if (visited.has(String(src))) return false;
  visited.add(String(src));
  
  for(let neighbor of graph[src]){
    explore(visited, graph, neighbor)
  }
  
  return true;
}