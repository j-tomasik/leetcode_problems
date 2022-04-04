const subsets = (elements) => {
  if (elements.length === 0) return [[]];
  
  const first = elements[0];
  
  const subsWithoutFirst = subsets(elements.slice(1));
  const subsWithFirst = [];
  
  for (let sub of subsWithoutFirst) {
    subsWithFirst.push([first, ...sub])
  }
  
  return [...subsWithoutFirst, ...subsWithFirst]
};