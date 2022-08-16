/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr = []
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    
    for(i = 0; i < s.length; i++){
        if(vowels.includes(s[i])){
            arr.push(s[i])
        }
    }
    return s.split('').map(res => vowels.includes(res) ? (res = arr.pop()) : res).join('')


};