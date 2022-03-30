/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let input1 = ransomNote.split("");
    let input2 = magazine.split("");
    for(let i=0; i< input1.length; i++){
        if(input2.includes(input1[i])){
            input2.splice(input2.indexOf(input1[i]),1);
            input1.splice(i,1);
            i--
        }
    }
   if(input1.length === 0){
       return true;
   }else {
       return false;
   }
};
     