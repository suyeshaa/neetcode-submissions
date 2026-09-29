class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let map = new Map()

        for(let i =0 ; i<nums.length ; i++){
            if(map.has(nums[i])){
                let count = map.get(nums[i])
                map.set(nums[i] , count+1)
            }
            else{
                map.set(nums[i] , 1)
            }
            
        }

        let res=[]
        map.forEach((value , key) =>{
            if(value > Math.floor(nums.length/3)){
                res.push(key)
            }
        })

        return res
    }
}
