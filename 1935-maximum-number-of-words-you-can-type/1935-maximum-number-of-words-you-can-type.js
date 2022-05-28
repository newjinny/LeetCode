/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let word = text.split(" ")
    let broken = brokenLetters.split("")
    let count = new Set()
    

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < broken.length; j++) {
      if (word[i].includes(broken[j])) {
        count.add(i);
      }
    }
  }

  return word.length - count.size;
    // for(let i = 0; i < word.length; i++){
    //  for (let j = 0; j < broken.length){
    //     if(word[i].includes(broken[j] || broken[j+1])){
    //             count++;
    // }
    // }
    // }
    //     return word.length - count
    
};

