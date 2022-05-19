/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    const max = Math.max(...arr)
    console.log(Math.max(...arr))
    return arr.indexOf(max)
    // for(let i=0; i<arr.length; i++){
    //     if(arr[i]>arr[i+1]){
    //         return i
    //     }
    // }
    
};


 


