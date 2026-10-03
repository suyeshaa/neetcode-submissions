class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let buy = 0
        let sell = 1;

        while(sell<prices.length){
            if(prices[sell] > prices[buy]){
                profit = profit + prices[sell]- prices[buy]
                buy++;
                sell++;
            }
            else{
                buy++;
                sell++
            }
        }

        return profit
    }
}
