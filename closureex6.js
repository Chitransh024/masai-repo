function bankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      if (amount <= 0) {
        return "Deposit amount must be positive.";
      }
      balance += amount;
      return balance;
    },

    withdraw(amount) {
      if (amount <= 0) {
        return "Withdrawal amount must be positive.";
      }
      if (amount > balance) {
        return "Insufficient balance.";
      }
      balance -= amount;
      return balance;
    },

    getBalance() {
      return balance;
    },

    reset() {
      balance = initialBalance;
      return balance;
    }
  };
}

// Usage Example:
const account = bankAccount(100);

console.log(account.deposit(50));     // 150
console.log(account.withdraw(30));    // 120
console.log(account.getBalance());    // 120
console.log(account.reset());         // 100
