/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    for(let i = 1; i <= arr.length; i++) { 
        if(i % 2 === 1) {                                      
            for(let j = 0; j <= arr.length - i; j++) {          
                sum += arr.slice(j,j+i).reduce((a,b) => a+b);
                console.log(sum)
            }
        }
    }
    return sum;
};
   