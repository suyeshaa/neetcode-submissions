class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

  

    isPalindrome(s) {
        let isAlphaNumeric=(char)=>{
            if((char>="a" && char<="z") || (char>="0" && char<="9")){
                return true
            }
            else{
                return false
            }

        }

        let i=0;
        let j=s.length-1

        while(i<j){
            let prefix = s[i].toLowerCase()
            let suffix = s[j].toLowerCase()
            if(!isAlphaNumeric(prefix)){
                console.log(s[i] ,"i" , isAlphaNumeric(s[i]))
                i++;
                continue 
            }
            if(!isAlphaNumeric(suffix)){
                console.log( s[j] , "j")

                j--;
                                continue 

            }

           
                console.log(s[i] , s[j])
             if(prefix === suffix){

                i++;
                j--
            }
            else{
                return false
            } 
            


        }
        return true
    }
}
