/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
     let arr = s.split(" ");
    let result = [];
    for(let a of arr){
        a = a.split("").reverse().join("");
        result.push(a)
        
    }
    return result.join(" ");
};