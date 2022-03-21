const largestComponent = (graph) => {
  if(graph.length === 0) return 0;
  let visited = new Set();
  let largest = 0;
  
  for(let src in graph){
    let count = compCount(src, visited, graph);
    if(count > largest) largest = count;
    
  }
  
  
  return largest
};

const compCount = (src, visited, graph) => {
  if(visited.has(String(src))) return 0;
      
  let count = 1;
    
  
  
  visited.add(String(src));
  
  for(let neighbor of graph[src]){
    count += compCount(neighbor, visited, graph)
  }
  
  return count;
  
}