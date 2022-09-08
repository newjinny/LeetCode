/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let splitArr = s.split(' ')
    let count = 0
    
    for( let arr of splitArr){
        if( arr !== ""){
            count++;
        }
    }
   
    return count
};
