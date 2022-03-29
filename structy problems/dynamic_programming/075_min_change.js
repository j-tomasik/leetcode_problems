const minChange = (amount, coins) => {
  const answer = _minChange(amount, coins);
  
  if (answer === Infinity) {
    return -1;
  } else {
    return answer;
  }
};



const _minChange = (amount, coins, counts = {}) => {
  if (amount in counts) return counts[amount];
  
  if(amount < 0) return Infinity;
  
  if(amount === 0) return 0;
  
  let minCoins = Infinity;
  for(let coin of coins) {
    const numCoins = 1 + _minChange(amount - coin, coins, counts);
    minCoins = Math.min(minCoins, numCoins);
    
  }
  
  
  counts[amount] = minCoins;
  return minCoins;
};