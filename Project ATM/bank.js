#! /usr/bin/env node
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import randomInteger from "random-int";
async function cd() {
    return new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
}
async function wel() {
    var tec = chalkAnimation.rainbow("WELCOME TO TRIPLE S BANK ATM");
    await cd();
    tec.stop();
}
await wel();
async function ques() {
    await inquirer.prompt([{
            type: String || Number,
            name: "Id",
            message: chalk.green("PLEASE ENTER YOUR ACCOUNT ID")
        },
        {
            type: Number,
            name: "password",
            message: chalk.green("PLEASE ENTER YOUR PASSWORD")
        },
        {
            type: "list",
            name: "input",
            message: chalk.blue("PLEASE SELECT YOUR BANK ACCOUNT"),
            choices: ["Saving Account", "Current Account",
                "Credit Account"]
        },
        {
            type: Number,
            name: "amount",
            message: chalk.green("PLEASE ENTER THE AMOUNT")
        }]).then((answer) => {
        if (answer.input === "Saving Account") {
            console.log(chalk.yellow("Your transaction is completed "));
            let ran = randomInteger(5000000, 10000000);
            console.log(chalk.blueBright(`Your account is "Saving Account"
   Your id is "${answer.Id}" \nYour password is "${answer.password}" 
  Your current balance is "${ran}"
  Total Amount : ${answer.amount} `));
            console.log(chalk.yellow("THANK YOU FOR BANKING !"));
        }
        else if (answer.input === "Current Account") {
            console.log(chalk.yellow("Your transaction is completed "));
            let ran = randomInteger(5000000, 10000000);
            console.log(chalk.blueBright(`Your account is "Current Account"
     Your id is "${answer.Id}"
    Your password is "${answer.password}"
    Your current balance is "${ran}" 
    Total Amount : ${answer.amount} `));
            console.log(chalk.yellow("THANK YOU FOR BANKING !"));
        }
        else if (answer.input === "Credit Account") {
            console.log(chalk.yellow("Your transaction is completed "));
            let ran = randomInteger(5000000, 10000000);
            console.log(chalk.blueBright(`Your account is "Credit Account"
     Your id is "${answer.Id}"
    Your password is "${answer.password}" 
    Your current balance is "${ran}" 
    Total Amount : ${answer.amount} `));
            console.log(chalk.yellow("THANK YOU FOR BANKING !"));
        }
    });
}
async function reStart() {
    do {
        await ques();
        var ans = await inquirer.prompt({
            type: "input",
            name: "again",
            message: chalk.yellowBright("Do you want to continue ?Press Y/N")
        });
    } while (ans.again === "y" || ans.again === "Y" || ans.again === "yeS" || ans.again === "yes" || ans.again === "YeS" || ans.again === "yES");
}
await reStart();
