// This is a simple implementation of currying in JavaScript. Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.

const curry = (fn) => {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return function(...moreArgs) {
            return curried.apply(this, [...args, ...moreArgs]);
        }
    }
}

const multiply = (a,b,c) => a*b*c;
const curriedMultiply = curry(multiply);
console.log(curriedMultiply(1)(2)(3));
console.log(curriedMultiply(1,2)(3));
console.log(curriedMultiply(1)(2,3));