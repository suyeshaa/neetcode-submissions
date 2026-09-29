class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let count =0
        
        let i=1;

        while(i<nums.length){
            if(nums[i] === nums[i-1]){
                nums.splice(i,1)
            }
            else{
                i++;
            }
        }

        console.log(nums)

        return nums.length
            
    }
}
