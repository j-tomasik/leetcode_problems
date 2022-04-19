const keyFinder = (string, tokens) => {
  let output = [];
  let i = 0;
  let j = i + 1;
  
  while (i < string.length) {
    if (string[i] !== '$') {
      output.push(string[i]);
      i += 1;
      j = i + 1;
    } else if (string[j] !== '$') {
      j += 1;
    } else {
      const key = string.slice(i, j + 1);
      const value = tokens[key];
      let result = keyFinder(value, tokens);
      tokens[key] = result;
      output.push(result);
      i = j + 1;
      j = i + 1;
    }
  }
  return output.join('');
}