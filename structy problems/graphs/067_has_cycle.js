const hasCycle = (graph) => {
  const visited = new Set();
  const visiting = new Set();
  
  for(let node in graph) {
      if(cycleDetect(graph, node, visiting, visited)) return true;
  }
  return false;
};

const cycleDetect = (graph, node, visiting, visited) => {
  if(visited.has(node)) return false;
  
  if (visiting.has(node)) return true;
 
  visiting.add(node);
  
  for(let child of graph[node]) {
    if(cycleDetect(graph, child, visiting, visited)) {
      return true;
    }
  }
  visiting.delete(node);
  visited.add(node);
  
  return false;
}
