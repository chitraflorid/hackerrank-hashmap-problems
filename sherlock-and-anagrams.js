// Complete the sherlockAndAnagrams function below.
function sherlockAndAnagrams(s) {
const anagramHash = {};

const strArr = Array.from(s);
let len = strArr.length;
const originalLen = len;
let i = 0;
let currStr = '';
let anagramsCount = 0;
let removedCharList = [];
let removedChar;

// find whether the given pattern is anagram and increment the count of it's relevant key
function addPatternToHash(pattern) {
    let sortedStr = pattern.length > 1 ? [...pattern].sort((a, b) => a.localeCompare(b)).join('') : pattern;
    if (!anagramHash[sortedStr]) {
        anagramHash[sortedStr] = 1;
    } else {
        anagramHash[sortedStr]++;
    }
}

// calculate anagram count.
function calculateAnagramsCount() {
    const keys = Object.keys(anagramHash);
    
    // filter the keys which are anagrams ( if the sorted key has more than or equal to 2 entries)
    const pairKeys = keys.filter(key => anagramHash[key] >= 2);

    pairKeys.forEach(key => {
        let count = anagramHash[key];
        if (key.length === 1) {
            const p = findPair(count);
            anagramsCount += p;
        } else {
             if (count === 2) {
                anagramsCount += 1;
             } else if (count > 2) {
                anagramsCount += findPair(count);
            }
        }
    });
}


while (strArr.length > 1) {
    removedChar = strArr.splice(0, 1)[0];
    removedCharList.push(removedChar);

    const removedCharlen = removedCharList.length;

    if (removedCharlen === originalLen) {
        addPatternToHash(removedChar);
        break;
    } 
    
    addPatternToHash(strArr.join(''));

    if (removedCharlen > 1) {
        let tmp = [...removedCharList];
        while (tmp.length > 1 ) {
            addPatternToHash(tmp.join(''));
            tmp.splice(0, 1);
        }
    } 

    addPatternToHash(removedChar);
    len = strArr.length;
 
    i = 0;

}

calculateAnagramsCount();

 return anagramsCount;
}


// find the anagram pairs based on the presence of the sorted string.
function findPair(n) {
    if (n === 1) return 0;

    return n - 1 + findPair(n - 1); 
}
