/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let a=t.split('').sort().join('')
    let b=s.split('').sort().join('')
    let c=a==b?true:false
    return c
};