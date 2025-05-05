/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let res=[]
    let even=nums.filter(num=>num%2===0);
    let odd=nums.filter(num=>num%2!==0)

    for(i=0;i<even.length;i++){
          res.push(even[i])
          res.push(odd[i])
    }
    return res
};