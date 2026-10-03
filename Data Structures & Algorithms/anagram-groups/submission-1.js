class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()

        for(let i=0 ; i<strs.length; i++){
            let sortedStr = strs[i].split("").sort().join("")

            if(map.has(sortedStr)){
                const valueArr = map.get(sortedStr)
                valueArr.push(strs[i])

                map.set(sortedStr , valueArr)
            }
            else{
                map.set(sortedStr , [strs[i]])
            }
        }


        return [...map.values()]

    }
}
