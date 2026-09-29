class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let prefix = 0
        let map = new Map()
        map.set(0,1)
        let count=0
        for(let i=0 ; i<nums.length ; i++){
            prefix += nums[i]

            if(map.has(prefix - k)){
                let val = map.get(prefix - k)
                count = count + val;
            }
            if(map.has(prefix)){
                let len = map.get(prefix)
                map.set(prefix , len+1)
            }
            else{
                map.set(prefix , 1)
            }

        }

        return count
    }
}
