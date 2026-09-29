class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map()

        for(let i=0 ; i<nums.length ; i++){
            let diff = target-nums[i]
            console.log(diff, nums[i])

            if(map.has(diff)){
                let idx = map.get(diff)
                return [i , idx]
            }
            else{
                map.set(nums[i] , i)
            }
        }

        

        return [1,2]


    }
}
