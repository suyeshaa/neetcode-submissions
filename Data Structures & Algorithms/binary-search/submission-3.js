class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let left =0;
        let right = nums.length -1


        while(left < right){
            let middle = Math.floor((left+right)/2)

            console.log(middle , left , right)

            if(nums[middle] > target){
                right = middle
            }
            else if(nums[middle] < target){
                left = middle+1
            }
            else{
                return middle
            }
        }

        if(left ===right){
            if(nums[left] === target){
                return left
            }
            
        }


        return -1
    }
}
