const safeCracking = (hints) => {
  const graph = buildGraph(hints);
  
  return topographicalOrder(graph);
};

const buildGraph = (edges) => {
  const graph = {};
  
  for (let edge of edges) {
    const [ a, b ] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];    
    
    graph[a].push(String(b));
  }
  
  return graph;
};

const topographicalOrder = (graph) => {
  const numParents = {};
  
  for (let node in graph) {
    numParents[node] = 0;
  }
  
  for (let node in graph) {
    for(let neighbor of graph[node]) {
      numParents[neighbor] += 1;
    }
  }
  
  let ready = [];
  for (let node in numParents) {
    if(numParents[node] === 0) ready.push(node);
  }
  
  let order = '';
  
  while (ready.length > 0) {
    const current = ready.pop();
    order += current;
    
    for (let child of graph[current]) {
      numParents[child] -= 1;
      if(numParents[child] === 0) ready.push(child)
    }
    
  }
  return order;
}