const longestPath = (graph) => {
 const distances = {};
  
  for(let node in graph) {
    if(graph[node].length === 0){
      distances[node] = 0;
    } 
  }
  
  for(let node in graph) {
    explore(node, graph, distances);
  }
  
 return Math.max(...Object.values(distances))
}

const explore = (start, graph, distances) => {
  if(start in distances) return distances[start];
  
  let maxLength = 0;
  for(let neighbor of graph[start]) {
    const attempt = explore(neighbor, graph, distances)
  if(attempt > maxLength) maxLength = attempt;
    }
  
  distances[start] = 1 + maxLength;
  return distances[start]
}