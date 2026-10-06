class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let i= n-1;
        let j= m-1
        let k = nums1.length-1


        while(i>=0){
            if(nums2[i] < nums1[j] && j>=0){
                nums1[k] = nums1[j]
                k-- 
                j--
            }
            else {
                nums1[k] = nums2[i]
                i--;
                k--;
            }
        }
    }
}
