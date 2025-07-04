/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   let isNegative = x < 0;
    let reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''));

    if (reversed > 2 ** 31 - 1) {
        return 0;
    }

    return isNegative ? -reversed : reversed;
};