/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let arr = [];
    for(let i=0; i <= n; i++){
        arr.push(i.toString(2).split("1").length-1);
        // arr.push(i.toString(2).split('0').join('').length);

    
    
}
console.log(arr)
    return arr
};
