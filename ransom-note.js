/**
Sample Input 2
7 4
ive got a lovely bunch of coconuts
ive got some coconuts
Sample Output 2
No
Explanation 2
Harold's magazine is missing the word .


Sample Input 0
6 4
give me one grand today night
give one grand today
Sample Output 0
Yes

**/

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    for (let i = 0; i < note.length; i++) {
        const searchWord = note[i];
        const index = magazine.indexOf(searchWord);
        if (index >= 0) {
            magazine.splice(index, 1);
        } else {
            console.log("No");
            return;
        }
    }
    
    console.log('Yes');
}
