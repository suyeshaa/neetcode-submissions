class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let result = strs[0]

        for(let i=0 ; i<strs.length ; i++){
            let min = Math.min(strs[i].length , result.length)
            let j=0
            while(j<min){
                if(strs[i][j] !== result[j]){
                   
                    break
                    console.log(result)
                }
                j++
            }
 result = result.slice(0 , j)
        }
                    return result

    }
}
