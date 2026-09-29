class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefixArray =[nums[0]]

         let suffixArray =[nums[nums.length -1]]



        for(let i=1;i<nums.length ; i++){
            let prev = prefixArray[i-1]
            prefixArray.push(prev*nums[i])
        }

         for(let i=nums.length-2;i>=0 ; i--){
            let prev = suffixArray[suffixArray.length-1]
            suffixArray.push(prev*nums[i])
        }

        suffixArray.reverse()

        let result =[]

        for(let i=0 ; i<nums.length ; i++){
            if(i==0){
                result.push(suffixArray[1])
            }
            else if(i===nums.length-1){
                result.push(prefixArray[nums.length-2])
            }
            else{
                result.push(suffixArray[i+1] * prefixArray[i-1])
            }

       

        }

            return result
    }
}
