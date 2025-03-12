let  nums = [-2,-1,-1,1,2,3];

function maximumCount(nums){
    let n=0;
    let p=0;
   for(let i of nums){
       if(i<0){
           n++
       }
       else if (i>0){
           p++
       }
   }
   let max=n>p?n:p
   return max
}

console.log(maximumCount(nums))