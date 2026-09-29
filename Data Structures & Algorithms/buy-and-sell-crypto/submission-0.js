class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let min = prices[0]
        let max =0

        for(let i=1 ; i<prices.length ; i++){
            let profit = prices[i] - min;

            max = Math.max(profit, max )

            min = Math.min(min, prices[i])

        }

        return max
    }
}
