/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    let sum = 0

    
    for(i = 0; i<grid.length; i++ ){
        let rowMax = Math.max(...grid[i])
        for(j = 0; j < grid.length; j++){
            let col = grid.map(row => {
                return row[j]
            })    
       
       let colMax = Math.max(...col)
       sum += Math.min(rowMax,colMax)-grid[i][j]
         }
    }
    return sum
    
};
  