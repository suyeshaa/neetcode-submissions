class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let res = new Array(nums.length)

        for(let i=0 ; i<nums.length ; i++){
            let pos = (i+k) % nums.length


            res[pos] = nums[i]
        }

        console.log(res)

        for(let i=0 ; i<nums.length ; i++){
            nums[i] = res[i]
        }

        return nums
       
    }
}
