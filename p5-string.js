/*
Given a string s consisting of characters (primarily 'A' and 'B'), reduce the string by repeatedly removing any occurrence of the target substrings "AB" or "BB".
Whenever one of these target substrings is removed, the remaining left and right parts of the string join together, which may form new instances of "AB" or "BB".
The reduction process continues until no adjacent "AB" or "BB" sequences remain in the string.
*/

const reduceString = (str) => {
    try {
        const stack = [];
        if (str.length < 2) {
            return str;
        }
        if (str.length === 2) {
            if (str === "AB" || str === "BB") {
                return "";
            }
            return str;
        }
        for (const letter of str) {
            stack.push(letter);
            while (str.length >= 2) {
                const lastTwo = stack[stack.length - 2]+(stack[stack.length - 1]);
                if (lastTwo === "AB" || lastTwo === "BB") {
                    stack.pop();
                    stack.pop();
                }
                else {
                    break;
                }
            }
        }
        return stack.length ? stack.join("") : "";
    }
    catch(error) {
        console.error("An error occurred during string reduction:", error);
    }
}

const inputString = "BABBA";
console.log(`Remaining string = ${reduceString(inputString)}`);