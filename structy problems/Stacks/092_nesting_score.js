const nestingScore = (str) => {
  const stack = [0];
  
  for (let char of str) {
    if (char === '[') {
      stack.push(0);
    } else {
      let last = stack.pop();
      if (last === 0) {
        stack[stack.length - 1] += 1;
      } else {
        let double = last * 2;
        stack[stack.length - 1] += double;
      }
    }
  }
  return stack[0];
};