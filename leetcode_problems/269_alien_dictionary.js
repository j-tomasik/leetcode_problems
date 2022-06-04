var alienOrder = function(words) {  
  
  const letters = new Set()
  
  // Map<letter, Set<letter>>
  const forwardMap = new Map()
  const backwardMap = new Map()
  
  
  const setForward = (from, to) => {
    if (forwardMap.has(from)) {
      forwardMap.get(from).add(to)
    } else {
      forwardMap.set(from, new Set([to]))
    }
    
    if (backwardMap.has(to)) {
      backwardMap.get(to).add(from)
    } else {
      backwardMap.set(to, new Set([from]))
    }
  }
  
  
  // find the first different letter, that is the relation
  // return if valid or not
  const collectForward = (word1, word2) => {
    let i = 0
    for (; i < word1.length; i++) {
      if (word2[i] === undefined) {
        return false
      }
      
      if (word1[i] !== word2[i]) {
        setForward(word1[i], word2[i])
        return true
      }
    }
    
    return true
  }
  
  
  // 1. collect all letters & collect the forward/backward relations
  //  a <-->f  f<-->d 
  
  for (let i = 0; i < words.length; i++) {
    for (let char of words[i]) {
      letters.add(char)
    }
    
    if (i > 0) {
      const isValid = collectForward(words[i - 1], words[i])
      if (!isValid) {
        return ''
      }
    }
  }
  
  // 2. look through the forwardMap, and collect the head layer by layer
  // if backwardMap is empty
  
  const result = []
  
  const collect = (letter) => {
    result.push(letter)
    letters.delete(letter)
    
    if (forwardMap.has(letter)) {
      for (let next of forwardMap.get(letter)) {
        backwardMap.get(next).delete(letter)
        
        if (backwardMap.get(next).size === 0) {
          backwardMap.delete(next)
        }
      }
      
      forwardMap.delete(letter)
    }
  }
  
  while (letters.size > 0) {
    
    let isHeadFound = false
    
    for (let letter of letters) {
      if (!backwardMap.has(letter)) {
        collect(letter)
        isHeadFound = true
      }
    }
    
    // circle found
    if (!isHeadFound) {
      return ''
    }
  }
  
  
  return result.join('')
}