class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let map= new Map()

        let sorted = nums.sort((a,b) =>a-b)

        let result=[]

        for(let i=0 ; i<nums.length ; i++){
            if(i>0 && sorted[i] === sorted[i-1]){
                continue
            }

            let j=i+1;
            let k= nums.length -1

            while(j<k){
                let sum = sorted[i]+sorted[j] +sorted[k]

                if(sum ===0){
                    result.push([sorted[i] , sorted[j] , sorted[k]])
                    j++;
                    k--;

                    while(j<k && sorted[j] === sorted[j-1]){
                    j++
                    }
                    while(j<k && sorted[k] === sorted[k+1] ){
                        k--
                    }
                }
                else if(sum > 0){
                    k--
                }
                else{
                    j++
                }

               
            }
        }
return result

    }
}
