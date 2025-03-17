/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    
    let num = parseInt(coordinates[1]);  

    if ( coordinates[0] === "a" || coordinates[0] === "c" || coordinates[0] === "e" || coordinates[0] === "g") {
        return num % 2 === 0;  
    } else {
        return num % 2 !== 0; 
    }
};
