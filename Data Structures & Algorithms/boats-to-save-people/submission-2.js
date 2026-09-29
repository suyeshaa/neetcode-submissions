class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people = people.sort((a,b) => a-b)

        let i= 0;
        let j=people.length -1;
        let boat =0
        while(i<=j){
            if(people[i] === limit){
                boat++
                i++;
            }

            else if(people[j] ===limit){
                boat++;
                j--;
            }

            else if(people[i] + people[j] <= limit && i!==j){
                boat++;
                i++;
                j--;
            }
            else if(people[i] + people[j] > limit && i!==j){
                boat++;
                j--
            }
            else if(i==j){
                boat++
                i++;
                j--;
            }
            
        }

       return boat
    }
}
