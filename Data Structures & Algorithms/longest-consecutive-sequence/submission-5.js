class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let sortedNums = nums.sort((a , b) => a-b)

        let max = 1
        let count=1

        if(nums.length === 0){
            return 0
        }

        for(let i=1 ; i< nums.length ; i++){
            if(sortedNums[i-1] === sortedNums[i]){
                continue
            }
            else if(sortedNums[i-1]+1 === sortedNums[i]){
                count = count+1
            }
            else{
                max = Math.max(max, count)
                count = 1
            }
        }

        max = Math.max(count , max)

        return max
    }
}
