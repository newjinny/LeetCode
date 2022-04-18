/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    var arr = grid.flat()
       return arr.filter((number) => number < 0).length

};