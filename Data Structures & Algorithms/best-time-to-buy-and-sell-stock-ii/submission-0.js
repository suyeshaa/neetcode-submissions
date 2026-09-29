class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        //only sell when i<


        let buy =prices[0];
        let sell =0;

        let i=1

        let profit =0
        while(i<prices.length){
            if(prices[i] < buy){
                buy = prices[i]
            }
            else{
                profit += prices[i] - buy
                buy = prices[i]
            }
            i++
        }


        return profit
    }
}
