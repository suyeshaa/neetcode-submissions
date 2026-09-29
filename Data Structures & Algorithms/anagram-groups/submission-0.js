class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()

        for(let i=0 ; i<strs.length ; i++){
            let sorted = strs[i].split("").sort().join("")

            if(map.has(sorted)){
                let anagramArr = map.get(sorted)
                anagramArr.push(strs[i])
                map.set(sorted , anagramArr)
            }

            else{
                map.set(sorted , [strs[i]])
            }
        }

        return[...map.values()]
    }
}
