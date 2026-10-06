class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set  = new Set(nums)
        let max = 1

        if(nums.length===0){
            return 0
        }

        for(let i=0 ; i<nums.length ; i++){
            if(!set.has(nums[i]-1)){
                let val = nums[i]
                let j=i
                let count = 1
                    
                while(set.has(val+1)){
                    count++;
                    val = val+1
                }
                max = Math.max(count , max)

            }
        }

        return max
    }
}
