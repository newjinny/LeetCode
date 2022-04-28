/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let sum = 0;
    let highest = 0;
    for(let i=0; i<gain.length; i++){
        highest=Math.max(sum+=gain[i],highest)
    }
    return highest
};

