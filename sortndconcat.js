function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

function sumOfArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

function sortAndConcat(arr1, arr2) {
    let s1 = [...arr1].sort((a, b) => a - b);
    let s2 = [...arr2].sort((a, b) => a - b);
    return s1.concat(s2);
}

let arr1 = [10, 3, 5, 8, 2];
let arr2 = [7, 4, 1, 6, 9];

console.log("Even numbers from arr1:", filterEvenNumbers(arr1));
console.log("Sum of arr2:", sumOfArray(arr2));
console.log("Sorted and concatenated:", sortAndConcat(arr1, arr2));
