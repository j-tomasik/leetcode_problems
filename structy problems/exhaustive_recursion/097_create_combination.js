const createCombinations = (items, k) => {
  if ( k > items.length) return []; 
  if (k === 0) return [[]];
  
  
  const first = items[0];
  const combosWithFirst = [];
  
  const partialCombos = createCombinations(items.slice(1), k - 1);
  
  for (let sub of partialCombos) {
    combosWithFirst.push([first, ...sub]);
  }
  
  const withoutFirst = createCombinations(items.slice(1), k);
  
  
 return [...withoutFirst, ...combosWithFirst];
};