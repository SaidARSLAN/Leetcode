/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const createMap = (value) => {
    const newMap = new Map();
    for (let i = 0;i<value.length;i++) {
        let count = 1;
        for (let j = 0; j< value.length;j++) {
            if (i != j && value[i] == value[j]) {
                count += 1
            }
        }
        newMap.set(value[i],count)
    }
    return newMap;
}



var findTheDifference = function(s, t) {
    const sMap = createMap(s);
    const tMap = createMap(t);
    for (var [key,value] of tMap) {
            if (sMap.get(key) !== value) {
                return key
            }
    }
};