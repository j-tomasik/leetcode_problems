const quickestConcat = (s, words) => {
  const answer = _quickestConcat(s, words);
  
  if (answer === Infinity) {
    return -1
  } else {
    return answer;
  }
}

const _quickestConcat = (s, words, memo={}) => {
  if(s in memo) return memo[s];
  if (s.length === 0) return 0;
  
  let minCount = Infinity;
  for(let word of words) {
    if(s.startsWith(word)) {
      const suffix = s.slice(word.length)
      const attempt = 1 + _quickestConcat(suffix, words, memo);
      minCount = Math.min(minCount, attempt)
    }
  }
  
  memo[s] = minCount;
  return minCount;
  
};