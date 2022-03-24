const semestersRequired = (numCourses, prereqs) => {
  const graph = buildGraph(numCourses, prereqs);
  let distances = {};
  
  for(let node in graph) {
    if(graph[node].length === 0) {
      distances[node] = 1;
  }
  }
  
  for(node in graph) {
    explore(node, graph, distances);
  }
  return Math.max(...Object.values(distances))
};

const buildGraph = (numCourses, prereqs) => {
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

const explore = (node, graph, distances) => {
  if(node in distances) return distances[node];
  
  let maxLength = 0;
  for(let neighbor of graph[node]) {
    const attempt = explore(neighbor, graph, distances)
    
    if(attempt > maxLength) maxLength = attempt;
  }
  
  distances[node] = 1 + maxLength;
  return distances[node];
}