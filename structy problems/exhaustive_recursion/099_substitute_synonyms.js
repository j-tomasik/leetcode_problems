const substituteSynonyms = (sentence, synonyms) => {
  const words = sentence.split(' ');
  const subarrays = getOptions(words, synonyms);
  
  const results = [];
  for (subarray of subarrays) {
    const sentence = subarray.join(' ');
    results.push(sentence)
  }
  return results;
};

const getOptions = (words, synonyms) => {
  if (words.length === 0) return [[]];
  const first = words[0];
  const remaining = words.slice(1);
  
  const subarrays = getOptions(remaining, synonyms);
  
  if (first in synonyms) {
    const result = [];
    
    for(let synonym of synonyms[first]) {
      for (let subarray of subarrays) {
        result.push([synonym, ...subarray])
      }
    }
    
    return result;
  } else {
    const result = [];
    
    for (let subarray of subarrays) {
      result.push([first, ...subarray])
    }
    
    return result;
  }
}
