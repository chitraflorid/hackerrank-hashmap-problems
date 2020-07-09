/***

Function Description
Complete the countTriplets function in the editor below. It should return the number of triplets forming a geometric progression for a given  as an integer.
countTriplets has the following parameter(s):
arr: an array of integers
r: an integer, the common ratio


Sample Input 
2
1 2 2 4
Sample Output 0
2
Explanation 0
There are  triplets in satisfying our criteria, whose indices are  and 

**/

// Complete the countTriplets function below.
function countTriplets(arr, r) {
    const elementsFreqHash = {};
    const tripletsHash = {};   
    let tripletCounter = 0; 

    for (let i = arr.length -1; i >= 0; i--) {
        const t1 = arr[i];
        const t2 = t1 * r;
        const t3 = t2 * r;
        
        tripletCounter += tripletsHash[t3] || 0;

     tripletsHash[t2] ?
      tripletsHash[t2] += elementsFreqHash[t2] || 0 :
        tripletsHash[t2] = elementsFreqHash[t2] || 0

    elementsFreqHash[t1] ? elementsFreqHash[t1]++ : elementsFreqHash[t1] = 1

    }

     return tripletCounter;
}
