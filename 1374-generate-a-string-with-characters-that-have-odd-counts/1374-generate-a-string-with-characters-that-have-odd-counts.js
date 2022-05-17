/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
        var s=[];
    for(let i=0;i<n;i++){
        s[i]='p';
    }
    if(n%2===0){
        s[n-1]='z';
    }
    return s.join("")
};