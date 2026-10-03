class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {

        let commonPrefixStr = strs[0]

        for(let i=1 ; i<strs.length ; i++){
            let minLen = Math.min(strs[i].length , commonPrefixStr.length)

            if(strs[i].length > commonPrefixStr.length){
                minLen = commonPrefixStr.length
            }
            else{
                commonPrefixStr =  commonPrefixStr.slice(0,strs[i].length)         
                minLen = strs[i].length  
            }
            
            let j=0
            if(minLen ===0){
                commonPrefixStr = ""
            }
            while(j<minLen){

                console.log(commonPrefixStr[j] , strs[i][j])
                if(commonPrefixStr[j] !== strs[i][j]){
                    commonPrefixStr = commonPrefixStr.slice(0,j)
                    console.log(commonPrefixStr)
                }
                j++
            }
        }

        return commonPrefixStr
    }
}
