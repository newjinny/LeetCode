/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
     const arr = [...heights];
    arr.sort((a,b) => a -b);
     
    let result = 0;
    
    for(let i = 0; i < heights.length; i++) {
        if(heights[i] !== arr[i]) {
            result++;
        }
    }
    
    return result;
};