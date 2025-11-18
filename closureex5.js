function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    reset: function () {
      count = 0;
      return count;
    }
  };
}

// Usage:
const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.increment()); // 3

console.log(counter.reset());     // 0

console.log(counter.increment()); // 1
