class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let result={}

        for(let i=0 ; i<nums.length ; i++){
            if(result.hasOwnProperty(nums[i])){
                let count = result[nums[i]]
                result[nums[i]] = count+1
            }
            else{
                result[nums[i]] = 1
            }
        }


        let freq =[]
        

        let sorted = Object.entries(result).sort((a , b) => b[1] - a[1])

        for(let i=0 ; i<k ; i++){
            freq.push(sorted[i][0])
        }

        return freq
    }
}
