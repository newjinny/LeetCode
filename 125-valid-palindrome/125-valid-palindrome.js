/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //영어 골라내고 소문자로 바꾸고 합치고 뒤집고
    
    var eng =s.replace( /[^a-zA-Z0-9]/g,'').toLowerCase(); 
      var strReverse = eng.split('').reverse().join('');
    
    return eng === strReverse;
 
};

 