class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i=0 ;
        let j = heights.length -1

        let water = -1
        let maxWater = -1


        while(i<j){
            water = Math.min(heights[i] , heights[j]) * (j-i)
            maxWater = Math.max(water , maxWater)

            if(heights[i] > heights[j]){
                j--
            }
            else{
                i++
            }
        }

        return maxWater
    }
}
