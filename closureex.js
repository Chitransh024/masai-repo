function outerFunction() {
  const message = "This is a closure example";

  return function innerFunction() {
    console.log(message);
  };
}

const closureFn = outerFunction();
closureFn();
