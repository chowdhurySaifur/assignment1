class BankAccount {
    constructor(accountNumber, ownerName, initialBalance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Insufficient funds.");
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}


const account1 = new BankAccount(112112349876, "SAIFUR RAHMAN CHOWDHURY", 500);
account1.deposit(100000);
account1.withdraw(50000);
account1.displayAccountInfo();
account1.getBalance();

const account2 = new BankAccount(112198457549, "Khaled Ali", 400);
account2.deposit(100);
account2.withdraw(600);
account2.displayAccountInfo();
account2.getBalance();