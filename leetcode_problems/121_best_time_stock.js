var maxProfit = function(prices) {
    if(prices.length === 0) return 0;
    
    let maxDif = 0;
    let currMin = prices[0];
    
    for(let i = 1; i < prices.length; i++){
        if(prices[i] < currMin) {
            currMin = prices[i];
            
        }
        
        if((prices[i] - currMin) > maxDif){
            maxDif = (prices[i] - currMin);
        }   
    }
    
    return maxDif;
};