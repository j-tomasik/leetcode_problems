const prereqsPossible = (numCourses, prereqs) => {
  const visited = new Set();
  const visiting = new Set();
  
  const graph = buildGraph(prereqs, numCourses);
  
  for(let node in graph) {
    if(cycleDetect(graph, node, visiting, visited)) return false;
    
  }
  return true;
};

const buildGraph = (prereqs, numCourses) => {
  const graph = {};
  
  for(let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }
  
  for(let prereq of prereqs) {
    const [a, b] = prereq;
    graph[a].push(b);
  }
  return graph;
}

const cycleDetect = (graph, node, visiting, visited) => {
  if(visited.has(node)) return false;
  
  if(visiting.has(node)) return true;
  
  visiting.add(node);
  
  for(let neighbor of graph[node]) {
    if(cycleDetect(graph, neighbor, visiting, visited)) {
      return true;
    }
  }
  
  visiting.delete(node);
  visited.add(node);
  
  return false;
}
