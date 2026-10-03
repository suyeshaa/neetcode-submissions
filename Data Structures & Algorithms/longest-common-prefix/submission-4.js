class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {

        let commonPrefixStr = strs[0]

        for(let i=1 ; i<strs.length ; i++){
            let minLen = Math.min(strs[i].length , commonPrefixStr.length)

            
            let j=0
            
            while(j<minLen){

                console.log(commonPrefixStr[j] , strs[i][j])
                if(commonPrefixStr[j] !== strs[i][j]){
                    break;
                }
                j++
            }
            commonPrefixStr = commonPrefixStr.slice(0,j)
        }

        return commonPrefixStr
    }
}
