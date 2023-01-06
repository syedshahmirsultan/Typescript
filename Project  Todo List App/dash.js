#! /usr/bin/env node
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
async function wake() {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    });
}
async function welcome() {
    let gr = chalkAnimation.rainbow(`WELCOME USER TO SHAHMIR TODO LIST APP`);
    await wake();
    gr.stop();
}
await welcome();
async function question() {
    var ans = await inquirer.prompt({
        type: "checkbox",
        name: "Hobby",
        message: chalk.green("\nWHAT DO YOU WANT TO DO TODAY ?You can select more than one option\n"),
        choices: ["Go cinema to watch movie",
            "Go for bussiness meeting",
            "Dinner with family",
            "Go for seminar", "Go to doctor for check up",
            "Play cricket with friends",
            "Go to GYM",
            "Go for Prayer",
            "Go out of city"]
    });
    console.log(chalk.yellow("THIS IS YOUR TODO LIST\n"));
    console.log(chalk.red(ans.Hobby + "\n"));
}
async function restart() {
    do {
        await question();
        var ques = await inquirer.prompt({
            type: "list",
            name: "try",
            message: chalk.magentaBright("Do you want to continue"),
            choices: ["YES", "No"]
        });
    } while (ques.try === "YES");
}
await restart();
