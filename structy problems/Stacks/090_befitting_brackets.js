const befittingBrackets = (str) => {
  const stack = [];
  
  for(let char of str) {
    if (char === '(' ||char ==='{' || char === '[' ) {
      stack.push(char);
    } 
    
    if (char === ')' && stack.pop() !== '(') return false;
    if (char === ']' && stack.pop() !== '[') return false;
    if (char === '}' && stack.pop() !== '{') return false;
    
  }
  
  return stack.length === 0;
};