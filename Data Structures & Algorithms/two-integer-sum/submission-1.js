class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()
        for(let i=0 ; i<nums.length ; i++){
            let value = target-nums[i]

            console.log(i)

            if(map.has(value)){
                
                return( [map.get(value) , i])
            }
            else{
                map.set(nums[i] , i)
            }
        }

        
        
    }
}
