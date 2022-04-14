/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    var steps =0;
    var water = capacity
    
    for(let i=0; i<plants.length; i++){
        if (capacity >= plants[i]){
            steps ++
            capacity-=plants[i]
        }else {
            steps+=i+i+1
            capacity = water-plants[i]
        }
        
    }
   return steps;
};
