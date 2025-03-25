/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let even=nums.filter((x)=>(x.toString()).length %2==0)
    let evencount=even.length
   
    return evencount;
};