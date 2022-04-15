const lexicalOrder = (word1, word2, alphabet) => {
  const longest = word1.length > word2.length ? word1.length : word2.length
  for(let i = 0; i < longest; i++) {
    if(word1[i] !== word2[i]) {
      if(word1[i] === null) {
        return false;
      }
      if(word2[i] === null) {
        return true;
      }
      
      
      let idx1 = alphabet.indexOf(word1[i]);
      let idx2 = alphabet.indexOf(word2[i]);
      if(idx1 < idx2) {
        return true
      } else {
        return false
      }
    }
  }
  return true;
};