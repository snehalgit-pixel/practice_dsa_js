/*
2-sum problem: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
*/

const twoSum = (numbers, target) => {
    try {
        const numberMap = new Map();
        for (let i=0; i<numbers.length; i++) {
            let complement = target - numbers[i];
            if (numberMap.has(complement)) {
                return [numberMap.get(complement), i];
            }
            numberMap.set(numbers[i], i);
        }
        return [];
    }
    catch(error) {
        console.error("An error occurred during two-sum computation:", error);
    }
}

const numbers = [4, 0, 11, 1, 8, 6, 5, 3, 2, 7];
console.log(twoSum(numbers, 12));