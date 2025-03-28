/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function (s) {
    let uniqueChars = new Set(s); 
    return uniqueChars.size; 
};