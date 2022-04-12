const positioningPlants = (costs, cur=0, prev=null, memo={}) => {
  let key = cur + ',' + prev;
  if(key in memo) return memo[key];
  
  if(cur === costs.length) return 0;
  
  
  let min = Infinity;
  for(let plant = 0; plant < costs[cur].length; plant++) {
    if(plant !== prev) {
      const possible = costs[cur][plant] + positioningPlants(costs, cur + 1, plant, memo)
      
      min = Math.min(min, possible);
    }
    
  }
  memo[key] = min;
  return min;
};