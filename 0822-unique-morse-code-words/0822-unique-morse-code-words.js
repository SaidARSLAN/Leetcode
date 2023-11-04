/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morses = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const mergedList = new Map();
    for (let i =0;i<morses.length;i++) {
        mergedList[String.fromCharCode(97+i)] = morses[i]
    }
    const resultList = []
    for (let i of words) {
        let tempWord = "";
        for (let j of i) {
            tempWord+=mergedList[j]
        }
        resultList.push(tempWord)
    }
    const completed = [];
    for (let i of resultList) {
        if (!completed.includes(i)) {
            completed.push(i)
        }
    }
    return completed.length
};