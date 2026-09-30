class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let i=0;
        let j= s1.length -1


        while(j< s2.length){
            let str = s2.slice(i , j+1)

            str = str.split("").sort().join("")
            let sortedS1 = s1.split("").sort().join("")

            if(str === sortedS1){
                return true
            }
            else{
                i++;
                j++
            }
        }

        return false
    }
}
