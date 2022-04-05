/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
//     let arr = salary.sort((a,b)=> a-b)
//     salary.pop()
//     salary.shift()
//      let sum =salary.reduce((a,b) => a + b) 
     
//      return sum/salary.length
    let max = Math.max(...salary);
    let min = Math.min(...salary);
    let sum = salary.reduce((a,b) => a + b) 
    sum -= max
    sum -= min
    
    
    return sum / (salary.length - 2)
};