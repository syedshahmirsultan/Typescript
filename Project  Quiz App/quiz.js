#! /usr/bin/env node
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
async function Wel() {
    return new Promise(resolve => setTimeout(resolve, 3000));
}
async function Man() {
    let rain = chalkAnimation.rainbow("   WELCOME TO SHAHMIR QUIZ APP !!");
    await Wel();
    rain.stop();
}
;
await Man();
async function Hell() {
    do {
        var man = await inquirer.prompt({
            name: "Alert",
            type: "list",
            message: chalk.blueBright("\nAre you ready for the QUIZ !"),
            choices: ["Yes", "No"]
        });
    } while (man.Alert === "No");
    if (man.Alert === "Yes") {
        async function Black() {
            return new Promise(resolve => setTimeout(resolve, 1000));
        }
        async function White() {
            let mess = chalkAnimation.rainbow("  WELCOME TO GENERAL KNOWLEDGE QUIZ !!!");
            await Black();
            mess.stop();
        }
        await White();
    }
}
async function Abb() {
    await Hell();
    var ques = await inquirer.prompt([
        {
            name: "first",
            type: "list",
            message: chalk.blueBright(" 1.Which one is the smallest ocean in the world ?"),
            choices: ["Pacific", "Atlantic", "Indian", "Arctic"]
            // Arctic
        }, {
            name: "second",
            type: "list",
            message: chalk.blueBright("2.Dead Sea is located between which two countries ? "),
            choices: ["Jordan and Sudan", "Turkey and UAE", "Jordan and Israel", "UAE and Egypt"]
            // Jordan and Israel
        }, {
            name: "third",
            type: "list",
            message: chalk.blueBright("\n3.In which region 'Bermuda Triangle' region is located ? "),
            choices: ["Atlantic", "Indian", "Pacific", "Arctic"]
            // Atlantic
        }, {
            name: "fourth",
            type: "list",
            message: chalk.blueBright("\n4.Which country is known as the 'playground of Europe' ? "),
            choices: ["Switzerland", "Italy", "Norway", "Finland"]
            // Switzerland
        }, {
            name: "fifth",
            type: "list",
            message: chalk.blueBright("\n5.Which country is known as the 'Land of Rising Sun' ?"),
            choices: ["Pakistan", "Fiji", "Finland", "Japan"]
            // Japan
        }, {
            name: "six",
            type: "list",
            message: chalk.blueBright("\n6.Which continent has the highest number of countries ? "),
            choices: ["Asia", "South America", "Africa", "Australia"]
            // Africa
        }, {
            name: "seventh",
            type: "list",
            message: chalk.blueBright("\n7.In which country,white elephant is found ?"),
            choices: ["Malaysia", "Thailand", "South Africa", "India"]
            // Thailand
        }, {
            name: "eigth",
            type: "list",
            message: chalk.blueBright("\n8.Total number of oceans in the world is ? "),
            choices: ["3", "4", "5", "7"]
            //5
        }, {
            name: "nineth",
            type: "list",
            message: chalk.blueBright("\n9.Which mountain is known as the 'Roof of World'? "),
            choices: ["Pamir", "Andes", "Himaliya", "Karakoram"]
            // Pamir
        }, {
            name: "tenth",
            type: "list",
            message: chalk.blueBright("\n10.The world's longest straight road without any corner located in ? "),
            choices: ["USA", "UK", "India", "Saudi Arabia"]
            //Saudi Arabia
        }, {
            name: "eleventh",
            type: "list",
            message: chalk.blueBright("\n11.Which one is the biggest island in the world ? "),
            choices: ["Greenland", "Finland", "Scottland", "Holland"]
            // Greenland
        }, {
            name: "tweleveth",
            type: "list",
            message: chalk.blueBright("\n12.Which country is known as the 'Land of Tulips' ?"),
            choices: ["Italy", "France", "China", "Netherland"]
            // Netherland
        }, {
            name: "thirteenth",
            type: "list",
            message: chalk.blueBright("\n13.Which country is known as the 'Battleground of Europe' ?"),
            choices: ["Norway", "Sweden", "England", "Belgium"]
            // Belgium
        }, {
            name: "fourtheenth",
            type: "list",
            message: chalk.blueBright("\n14.The historic city 'Machu Picchu'is located in which country ?"),
            choices: ["Peru", "Germany", "Italy", "Argentina"]
            // Peru
        }, {
            name: "fiftheenth",
            type: "list",
            message: chalk.blueBright("\n15.Which country has the world largest prison population? "),
            choices: ["Dubai", "China", "Saudi Arabia", "USA"]
            //USA
        }
    ]);
    var i = 0;
    if (ques.first === "Arctic") {
        i++;
    }
    if (ques.second === "Jordan and Israel") {
        ++i;
    }
    if (ques.third === "Atlantic") {
        ++i;
    }
    if (ques.fourth === "Switzerland") {
        ++i;
    }
    if (ques.fifth === "Japan") {
        ++i;
    }
    if (ques.six === "Africa") {
        ++i;
    }
    if (ques.seventh === "Thailand") {
        ++i;
    }
    if (ques.eigth === "5") {
        ++i;
    }
    if (ques.nineth === "Pamir") {
        ++i;
    }
    if (ques.tenth === "Saudi Arabia") {
        ++i;
    }
    if (ques.eleventh === "Greenland") {
        ++i;
    }
    if (ques.tweleveth === "Netherland") {
        ++i;
    }
    if (ques.thirteenth === "Belgium") {
        ++i;
    }
    if (ques.fourtheenth === "Peru") {
        ++i;
    }
    if (ques.fiftheenth === "USA") {
        ++i;
    }
    console.log(chalk.magentaBright("   RESULT \t" + " " + Math.round(i / 15 * 100) + " " + "%\n"));
    console.log(chalk.greenBright("\n\tGRADING  SYSTEM     REMARKS       "));
    console.log(chalk.green("\t 90 or 90 Above A+     Excelent !   "));
    console.log(chalk.green("\t 80 or 80 Above A     very Good ! "));
    console.log(chalk.blueBright("\t 70 or 70 Above B     Good ! "));
    console.log(chalk.magentaBright("\t 60 or 60 Above C     Average !"));
    console.log(chalk.yellow("\t 50 or 50 Above D     Slightly Pass  !"));
    console.log(chalk.redBright("\t 49 or Below 49 F     Bad General Knowledge ! "));
    console.log(chalk.grey("\t 20 0r Below 20 U     Need to Work on General Knowledge\n"));
}
async function recall() {
    do {
        await Abb();
        var ab = await inquirer.prompt({
            name: "recall",
            type: "list",
            message: chalk.blueBright("Do you want to continue"),
            choices: ["Yes", "No"]
        });
    } while (ab.recall === "Yes");
}
await recall();
