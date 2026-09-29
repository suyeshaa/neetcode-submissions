class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ""
        for(let i=0 ; i<strs.length ; i++){
            encoded = encoded + strs[i].length +  "#" +strs[i]
        }
        console.log(encoded)
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i=0;
        let result=[]
    
        while(i<str.length){
           let j =i
           while(str[j] != "#"){
            j++
           }

           let length = Number(str.slice(i,j))

           let start = j+1

           let s = str.slice(start , start+length)

           result.push(s)
           i= start+length
        }

        return result
    }
}
