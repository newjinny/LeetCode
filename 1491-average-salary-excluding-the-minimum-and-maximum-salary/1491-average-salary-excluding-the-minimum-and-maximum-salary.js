/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    var max = Math.max(...salary);
    var min = Math.min(...salary);
    
  let sum = salary.reduce((a,b) => a + b)
    
    sum -= max
    sum -= min
    
    return sum / (salary.length - 2)
};