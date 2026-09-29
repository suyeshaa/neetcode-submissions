class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length ===0){
            return 0
        }
        let map = new Map()

        for(let i=0 ; i<nums.length ; i++){
            map.set(nums[i], i)
        }

        let possibleStarts=[]

        for(let i=0 ; i<nums.length ; i++){
            if(!map.has(nums[i] -1)){
                possibleStarts.push(nums[i])
            }
        }


        let maxLen=-1

        
        for(let i=0 ; i<possibleStarts.length ; i++){
        let number = possibleStarts[i]
        let length=1
            while(map.has(number+1) ){
                length = length +1
                number = number +1
            }

            maxLen = Math.max(maxLen, length)
        }

        return maxLen
    }
}
