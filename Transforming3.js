function getEvenSquares(arr) {
    return arr
        .filter(num => num % 2 === 0)
        .map(num => num * num);
}
