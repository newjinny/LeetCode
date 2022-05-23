/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    if(alphabet.length > sentence.length) return false;
    for(let i = 0; i < alphabet.length; i++) {
        if(sentence.indexOf(alphabet[i]) === -1) return false;
    }
    return true;
};