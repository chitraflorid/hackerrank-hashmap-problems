/**
Given two strings, determine if they share a common substring. A substring may be as small as one character.
For example, the words "a", "and", "art" share the common substring . The words "be" and "cat" do not share a substring.
**/

// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    if (!s1 || !s2) {
        return 'NO';
    }

    const s1Hash = {};

    [...s1].forEach(char => {
        s1Hash[char] = 1;
    });

    for (let char in s1Hash) {
        if (s2.indexOf(char) !== -1) {
            return 'YES';
        }
    }

    return 'NO';
}
