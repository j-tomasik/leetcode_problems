const tolerantTeams = (rivalries) => {
  const graph = buildGraph(rivalries)
  const teams = {};
  
  for(let node in graph) {
    if(!(node in teams) && validate(graph, node, teams, false) === false) {
      return false;
    }
  }
  return true;
};

const buildGraph = (arr) => {
  const graph = {};
  
  for (let edge of arr) {
    const [a, b] = edge;
    if (! (a in graph)) graph[a] = [];
    if (! (b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  
  return graph;
}

const validate = (graph, node, teams, currentTeam) => {
  if(node in teams) return teams[node] === currentTeam;
  
  teams[node] = currentTeam;
  
  for (let neighbor of graph[node]) {
    if(validate(graph, neighbor, teams, !currentTeam) === false) {
      return false;
    }
  }
  
  return true;
}