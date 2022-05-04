/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
     let newArr = [];
    let str = s.split(" ")
    for(i=0;i<str.length;i++) {
        let idx = str[i][str[i].length-1]
        newArr[idx-1] = str[i].slice(0,str[i].length-1);
    }
    return newArr.join(" ");
};