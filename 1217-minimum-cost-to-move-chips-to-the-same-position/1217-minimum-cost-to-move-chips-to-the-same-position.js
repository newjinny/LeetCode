/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let odd = 0;
    let even = 0;
    
    for(i = 0; i < position.length; i++){
        position[i] % 2 === 0 ? even++ : odd++
    }
    
    return Math.min(odd, even)

};