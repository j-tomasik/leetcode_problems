const overlapSubsequence = (str1, str2, i = 0, j = 0, memo={}) => {
  if (i === str1.length || j === str2.length) return 0;
  let pos = i + ',' + j;
  if(pos in memo) return memo[pos]
  
  if(str1[i] === str2[j]) {
    memo[pos] = 1 + overlapSubsequence(str1, str2, i + 1, j + 1, memo)
  } else {
    memo[pos] = Math.max(
      overlapSubsequence(str1, str2, i + 1, j, memo),
      overlapSubsequence(str1, str2, i, j + 1, memo)
    )
  }
  
  
  return memo[pos];
};