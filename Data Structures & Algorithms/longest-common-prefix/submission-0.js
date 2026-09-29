class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let result = ""

        for(let i=0 ; i<strs[0].length ; i++){

            let s = strs[0][i]

            for(let j=1 ; j<strs.length ; j++){
                if(i> strs[j].length || s !== strs[j][i]){
                    return result
                }
            }

            result = result +s
        }

        return result

        
    }
}
