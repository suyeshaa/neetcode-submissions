class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length -1;

        while(left < right){
            let sum = numbers[left] + numbers[right]
            if(numbers[left] + numbers[right] > target){
                right--
            }
            else if(numbers[left] + numbers[right] < target){

                left++
            }
            else{
                return [left+1, right+1]
            }
        }
        return []
    }
}
