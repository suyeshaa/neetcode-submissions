class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let len =0
        let big = "";
        if(word1.length > word2.length){
            len = word2.length
            big = word1
        }
        else{
            len = word1.length
            big = word2
        }


        let res =""
        for(let i=0 ; i<big.length ; i++){
            if(i < len){
                res = res + word1[i] + word2[i]
            }
            else{
                res+= big[i]
            }
        }

        return res
    }
}
