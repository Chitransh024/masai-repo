function extractAndReverse(arr) {
    let sub = arr.slice(2, 5);
    sub.reverse();
    return sub;
}

let numbers = [15, 30, 45, 60, 75, 90];
console.log(extractAndReverse(numbers));
