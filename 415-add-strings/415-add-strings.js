/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    // return Math.floor(parseInt(num1)+parseInt(num2)).toString()
    var result = []
var lenDif = num1.length - num2.length
if(lenDif < 0) {
num1 = num1.padStart(num2.length, '0')
} else if(lenDif > 0) {
num2 = num2.padStart(num1.length, '0')
}
var move = 0;
for(var i=num1.length; i>0; i--) {
var sum = Number(num1.slice(i-1, i)) + Number(num2.slice(i-1, i)) + move
if(sum >= 10) {
if(i !== 1) {
move = 1
sum = sum.toString().slice(1)
} else {
sum = sum.toString()
}
} else {
move = 0
sum = sum.toString()
}
result.splice(0, 0, sum)
}
return result.join('')
}



 
 
