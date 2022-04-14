const combineIntervals = (intervals) => {
  const combined = [];
  const sortedIntervals = intervals.sort((intervalA, intervalB) => intervalA[0] - intervalB[0]);
  
  let currentMin = Infinity;
  let currentMax = sortedIntervals[0][1];
  
  for(let i = 0; i < sortedIntervals.length; i++) {
    if(sortedIntervals[i][0] < currentMin) {
      currentMin = sortedIntervals[i][0];
    }
    
    if(sortedIntervals[i][0] > currentMin && sortedIntervals[i][0] <= currentMax && sortedIntervals[i][1] > currentMax) {  
        currentMax = sortedIntervals[i][1]
    }
    
    if(sortedIntervals[i][0] > currentMax) {
      combined.push([currentMin, currentMax]);
      currentMin = sortedIntervals[i][0];
      currentMax = sortedIntervals[i][1];
    }
    
  }
  combined.push([currentMin, currentMax])
  
  return combined; 
};