/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
 let min = prices[0];
 let profit = 0;
    for (i=1; i< prices.length;i++){
        if(prices[i] - min > profit){
            profit = prices[i] - min
        }
       
            if(min > prices[i]){
                min = prices[i]
            }
        
    }
return profit

};