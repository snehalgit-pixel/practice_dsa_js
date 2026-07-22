/*
Anagram - Input - ['listen', 'enlist', 'ear', 'google', 'glooge', 'silent', 'inlets', 'banana', 'are', 'era', 'rat', 'PAN', 'tar', 'art', 'nap']
Purpose - remove anagrams from the input array and return a new array with unique words
Output - [desired] - [ 'inlets', 'era', 'glooge', 'banana', 'art', 'nap' ]
Time Complexity - [desired] - O(N)
*/

const removeAnagrams = (words) => {
    try {
        const sortedWords = new Map();
        for (const word of words) {
            const sortedWord = word.toLowerCase().split('').sort().join('');
            sortedWords.set(sortedWord, word);
        }
        const filteredCollection = [...sortedWords.values()];
        return filteredCollection;
    }
    catch(error) {
        console.error('ERROR: while removing anagrams:', error);
    }
}

const input = ['listen', 'enlist', 'ear', 'google', 'glooge', 'silent', 'inlets', 'banana', 'are', 'era', 'rat', 'PAN', 'tar', 'art', 'nap'];
console.log(removeAnagrams(input));