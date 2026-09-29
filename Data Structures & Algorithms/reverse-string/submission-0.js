class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {
        let right = s.length-1;
        let left = 0

        while(left<right){
            let leftString = s[left]

            s[left] = s[right]
            s[right] = leftString

            right--;
            left++
        }

        return s
    }
}
