const decompressBraces = (s) => {
  const numberChars = "123456789"
  const stack = [];
  
  for (let val of s) {
    if (numberChars.includes(val)) {
      stack.push(Number(val));
    } else {
      if (val === '}') {
        let segment = '';
        while (typeof stack[stack.length - 1] !== 'number') {
          let popped = stack.pop();
          segment = popped + segment;
        }
        const num = stack.pop();
        stack.push(repeat(segment, num));
      } else if (val !== '{') {
        stack.push(val);
      }
    }
  }
  return stack.join('');
};

const repeat = (segment, num) => {
  let result = '';
  
  for (let i = 0; i < num; i ++) {
    result += segment;
  }
  return result;
}