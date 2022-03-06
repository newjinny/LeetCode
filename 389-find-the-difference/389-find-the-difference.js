/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
     let strs = s.split('').sort();
    let strt = t.split('').sort();
    if (strs.length == strt.length) return;
  
    while (strs.length < strt.length) {
      for (let i = 0; i < strt.length; i++) {
        if (strs[i] !== strt[i]) 
          return strt[i];
      }
    }
};