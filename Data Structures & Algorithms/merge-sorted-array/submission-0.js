class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let i =0;
        let j = m-1;

        let k =n-1;

        let p = nums1.length -1

        while(k>=0){
            if(nums1[j] > nums2[k] && j>=0){
                nums1[p] = nums1[j]
                j--
            }
            else{
                nums1[p] = nums2[k]
                k--
            }

            p--
        }
    }
}
