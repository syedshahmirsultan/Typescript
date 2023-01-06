#! /usr/bin/env node
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
async function Wel() {
    return new Promise(res => setTimeout(res, 3000));
}
async function Welcome() {
    let rainb = chalkAnimation.rainbow("        WELCOME TO SHAHMIR OOP BANK APP!!!");
    await Wel();
    rainb.stop();
}
await Welcome();
class Customer {
    FirstName(set, get) {
    }
    LastName(set, get) {
    }
    Gender(set, get) {
    }
    Age(set, get) {
    }
    MobileNumber(set, get) {
    }
    bankAccount(set, get) {
    }
    CustomerInfo() {
        Name: {
            this.FirstName;
        }
        {
            this.LastName;
        }
        Age: {
            this.Age;
        }
        Gender: {
            this.Gender;
        }
        Mobile: {
            this.MobileNumber;
        }
        AccountBalance: {
            this.bankAccount;
        }
    }
}
class BankAccount {
    AccountBalance;
    constructor() {
        this.AccountBalance = 100;
    }
    async Debit() {
        var a = await inquirer.prompt({
            type: "number",
            name: "amount",
            message: chalk.blueBright("Please enter any amount :")
        });
        let statement = "Sorry,you have insufficient balance !";
        if (a.amount > 0) {
            statement = "The amount you entered is wrong !";
            if (this.AccountBalance > a.amount) {
                this.AccountBalance = this.AccountBalance - a.amount;
                console.log(this.AccountBalance);
                statement = chalk.greenBright("Transaction sucessful! New account balance is" + " " + this.AccountBalance);
            }
            else {
                statement = chalk.greenBright("You dont have enough money for this transaction !");
            }
        }
        console.log(statement);
    }
    async Credit() {
        var a = await inquirer.prompt({
            type: "number",
            name: "amount",
            message: chalk.blueBright("Please enter any amount :")
        });
        let statement = "Transaction failed !";
        if (a.amount > 0) {
            this.AccountBalance = this.AccountBalance + a.amount;
            if (a.amount > 100) {
                this.AccountBalance - 100;
                this.AccountBalance = this.AccountBalance;
                console.log(this.AccountBalance);
            }
            statement = chalk.magentaBright("Your account has been credited successfully !");
        }
        console.log(statement);
    }
}
async function aaa() {
    let ab = new BankAccount();
    await ab.Debit();
    await ab.Credit();
    console.log(ab);
}
await aaa();
