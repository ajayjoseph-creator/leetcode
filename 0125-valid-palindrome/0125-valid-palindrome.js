/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   let a = s.replace(/[^a-zA-Z0-9]/g, '');
let b=a.split('').reverse().join('')
let c=a.toLowerCase()===b.toLowerCase()?true:false
return c
};