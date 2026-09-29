class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
       let map = new Map()

       for(let i=0 ; i<s.length ; i++){
        console.log(s[i])
            if(map.has(s[i])){
                let count = map.get(s[i])
                map.set(s[i] , count+1)
            }
            else{

            map.set(s[i] , 1)
            }

       }

       console.log([...map.values()])

       for(let i=0 ; i<t.length ; i++){
        if(map.has(t[i])){
            let count = map.get(t[i])
            map.set(t[i] , count-1)

            if(map.get(t[i]) === 0){
                map.delete(t[i])
            }
        }
        else{
            return false
        }



       }

        if(map.size === 0 ){
            return true
        }
        else{
            return false
        }

    }
}
