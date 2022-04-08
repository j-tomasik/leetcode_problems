const maxIncreasingSubseq = (numbers, i=0, previous=-Infinity, memo={}) => {
 const key = i + ',' + previous;
  if(key in memo) return memo[key];
 
  if(i === numbers.length) return 0;
  
  const current = numbers[i];
  const options = [];
  const dontTakeFirst = maxIncreasingSubseq(numbers, i + 1, previous, memo);
  
  options.push(dontTakeFirst);
  if (current > previous) {
    const takeFirst = 1 + maxIncreasingSubseq(numbers, i + 1, current, memo);
    options.push(takeFirst);
  }
  memo[key] = Math.max(...options)
  return memo[key];
};