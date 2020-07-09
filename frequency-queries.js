/**
You are given  queries. Each query is of the form two integers described below: 
-  : Insert x in your data structure. 
-  : Delete one occurence of y from your data structure, if present. 
-  : Check if any integer is present whose frequency is exactly . If yes, print 1 else 0.
The queries are given in the form of a 2-D array  of size  where  contains the operation, and  
contains the data element. For example, you are given array . The results of each operation are:

Sample Input 1
4
3 4
2 1003
1 16
3 1
Sample Output 1
0
1
Explanation 1
For the first query of type , there is no integer of frequency . The answer is . For the second query of type , 
there is one integer,  of frequency  so the answer is .

**/


// Complete the freqQuery function below.
function freqQuery(queries) {
    const freqHash = {};
    const output = [];

    queries.forEach(([op, val]) => {
        switch(op) {
            case 1:
                freqHash[val] ? freqHash[val] += 1 : freqHash[val] = 1;
                break;
            case 2:
                    if (freqHash[val]) {
                        freqHash[val]--;

                        if (freqHash[val] < 0) delete freqHash[val];
                    } 
                break;
                
            case 3:
                let freqFound = 0;
                for (let key in freqHash) {                
                    if (freqHash[key] === val) {
                        freqFound = 1;
                        break;
                    }
                }

                output.push(freqFound);
           
                break;
        }   
    });

    return output;
}

