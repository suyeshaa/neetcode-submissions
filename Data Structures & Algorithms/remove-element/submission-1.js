class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k=0;

        let i=0;
        while(i<nums.length){
            if(nums[i] === val){
                nums.splice(i , 1)
                console.log(nums)
            }
            else{
                k++
                i++
            }
        }

        console.log(nums , "nums" , k)

        return k
    }
}
