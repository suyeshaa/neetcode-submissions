class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

     isPalindrome = (s,l,r)=>{
            while(l<r){
                if(s[l]!==s[r]){
                    return false
                }
                l++;
                r--
            }
            return true
        }
    validPalindrome(s) {
        let left =0;
        let right = s.length -1;

        if(s.length <=1){
            return true
        }

        let count =0
        while(left <right){
            if(s[left] !== s[right]){
                let palindrome = this.isPalindrome(s, left+1, right) || this.isPalindrome(s, left, right-1)
                return palindrome
            }

            left++;
            right--

        }
            return true


       

        
    }
}
