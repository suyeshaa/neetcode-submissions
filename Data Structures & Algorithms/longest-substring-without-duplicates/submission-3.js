class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set()

        let j=0;

        let maxCount =0;

        for(let i =0 ; i<s.length ; i++){

            while(set.has(s[i])){
                set.delete(s[j])
                j++
            }
            set.add(s[i])
            maxCount = Math.max(maxCount, i-j+1)

        }

        return maxCount

    }
}
