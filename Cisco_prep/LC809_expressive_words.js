var expressiveWords = function(S, words) {
  let res = 0;
  for(let w of words){
    if(isWord(S, w))res++
  }
  return res
};

function isWord(S,W){
  let j = 0;
  let N = S.length;
  for(let i = 0; i < N; i++){
    if(S[i] === W[j]) j++
    else if (S[i] === S[i-1] && S[i-1] === S[i-2]) continue
    else if (S[i] === S[i-1] && S[i] === S[i+1]) continue
    else return false
  }
  return j === W.length;
}
