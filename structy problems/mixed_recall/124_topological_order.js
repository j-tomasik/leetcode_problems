const topologicalOrder = (graph) => {
  const numParents = {};
  for (let node in graph) {
    numParents[node] = 0;
  }
  for (let node in graph) {
    for(let child of graph[node]) {
      numParents[child] += 1;
    }
  }
  
  const ready = [];
  
  for (let node in numParents) {
    if (numParents[node] === 0) {
      ready.push(node);
    }
  }
  
  const order = [];
  while(ready.length > 0) {
    let currentNode = ready.pop();
    order.push(currentNode);
    
    for(let child of graph[currentNode]) {
      numParents[child] -= 1;
      if (numParents[child] === 0) {
        ready.push(child);
      }
    }
  }
  
  
  return order;
};