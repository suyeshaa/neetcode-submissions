class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        //loop on nums
        //if nums[i] !== val -> i++
        // if !== -> splice and push

        let i=0;

        while(i<nums.length){
            if(nums[i] === val){
                nums.splice(i , 1)
            }
            else{
                i++
            }
        }
        console.log(nums)
        return nums.length
    }
}
