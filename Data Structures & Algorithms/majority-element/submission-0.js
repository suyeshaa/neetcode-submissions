class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map = new Map()

        for(let i=0 ; i<nums.length ; i++){
            if(map.has(nums[i])){
                let count = map.get(nums[i])
                map.set(nums[i] , count+1)
            }
            else{
                map.set(nums[i] , 1)
            }
        }

        let maxCount = 0

        let result;

        map.forEach((val,key)=>{
            if(val>maxCount){
                result = key
                maxCount = val
            }
        })

        return result
    }
}
