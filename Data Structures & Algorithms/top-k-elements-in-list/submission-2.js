class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let obj = {}


        for(let i=0 ; i<nums.length ; i++){
            if(obj.hasOwnProperty(nums[i])){
                let count = obj[nums[i]]
                obj[nums[i]] = count+1

            }
            else{
                obj[nums[i]] = 1
            }
        }

        let sorted = Object.entries(obj).sort((a , b) => b[1]-a[1])


        const res = []
        sorted.forEach(([key , value])=>{

            if(res.length === k){
                return res
            }
            else{
                res.push(key)
            }
        })

        return res


    }
}
