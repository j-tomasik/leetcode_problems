const pairedParentheses = (str) => {
  const stack = [];
  
  for(let char of str) {
    if(char === '(') {
      stack.push('(')
    }
    if(char === ')') {
      if(stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
      
    }
  }
  
  if(stack.length > 0) {
    return false;
  } else {
    return true;
  }
};