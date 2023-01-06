#! /usr/bin/env node
import chalk from "chalk";
import chalkanimation from "chalk-animation";
import inquirer from "inquirer";
import randomInteger from "random-int";
async function Wel() {
    return new Promise(resolve => setTimeout(resolve, 3000));
}
async function Welcome() {
    var rain = chalkanimation.rainbow("    WELCOME TO  DUNGEON  ADVENTURE GAME !!!");
    await Wel();
    rain.stop();
}
await Welcome();
async function Adv() {
    let rand = randomInteger(0, 75);
    // Game variables
    let enemies = ["Skeleton", "Zoombie", "Warrior", "Assassin"];
    let maxEnemyHealth = 75;
    let enemyAttackDamage = 25;
    // Player variables 
    let health = 100;
    let attackDamage = 50;
    let numHealthPotions = 3;
    let healthPotionHealAmount = 30;
    let healthPotionDropChance = 50; //Percentage
    var running = true;
    async function GAME() {
        while (running === true) {
            console.log(chalk.blueBright("--------------------------------------------------------------"));
            let enemyHealth = rand;
            let enemy = enemies[randomInteger(0, 3)];
            console.log(chalk.greenBright("\t# " + enemy + " has appeared ! #"));
            while (enemyHealth > 0) {
                console.log(chalk.yellow("\tYour HP:" + health));
                console.log(chalk.blue("\t" + enemy + "'s HP:" + enemyHealth));
                var scanner = await inquirer.prompt({
                    "type": "list",
                    "name": "scan",
                    "message": chalk.green("What would you like to do ?"),
                    "choices": ["1.Attack", "2.Drink health potion", "3.Run !"]
                });
                if (scanner.scan === "1.Attack") {
                    let damageDealt = randomInteger(0, 50);
                    let damageTaken = randomInteger(0, 50);
                    enemyHealth -= damageDealt;
                    health -= damageTaken;
                    console.log(chalk.magentaBright("\t> You strike the " + enemy + " for " + damageDealt + " damage."));
                    console.log(chalk.redBright("\t> You recieve " + damageTaken + " in retaliation !"));
                    if (health < 1) {
                        console.log(chalk.redBright("\t>You have taken too much damage,you are too weak to go on ! "));
                    }
                }
                else if (scanner.scan === "2.Drink health potion") {
                    if (numHealthPotions > 0) {
                        health += healthPotionHealAmount;
                        numHealthPotions;
                        console.log(chalk.greenBright("\t> You drink a health potion,healing yourself for " + healthPotionHealAmount + "." +
                            "\n\t> You now have " + health + " HP."
                            + "\n\t> You have " + numHealthPotions + " health potions left.\n"));
                    }
                    else {
                        console.log(chalk.redBright("\t You have no health potions left ! Defeat enemies for a chance to get one !\n "));
                    }
                }
                else if (scanner.scan === "3.Run !") {
                    console.log(chalk.magentaBright("\t You run away from the " + enemy + " !"));
                    await GAME();
                }
                else {
                    console.log(chalk.redBright("Invalid command !"));
                }
                if (health < 1) {
                    console.log(chalk.redBright("You limb out of the dungeon,weak from battle."));
                    break;
                }
                console.log(chalk.blueBright("-------------------------------------------------------------------------------------------"));
                console.log(chalk.blueBright("# " + enemy + " was defeated ! #"));
                console.log(chalk.redBright("# You have " + health + " HP left.#"));
                if (randomInteger(0, 100) < healthPotionDropChance) {
                    numHealthPotions++;
                    console.log(chalk.greenBright("The " + enemy + " dropped a health potion ! #"));
                    console.log(chalk.magentaBright("You now have " + numHealthPotions + " health potion(s).#"));
                }
                console.log(chalk.blueBright("-------------------------------------------------------------------------------------"));
                var ans = await inquirer.prompt({
                    type: "list",
                    name: "name",
                    message: chalk.greenBright("What would you like to do ?\n  Special Note(If you select Exit dungeon and it will not happen select once again.)"),
                    choices: ["1.Continue fighting", "2.Exit dungeon"]
                });
                while (ans.name !== "1.Continue fighting" && ans.name !== "2.Exit dungeon") {
                    console.log(chalk.redBright("Invalid command !"));
                    ans;
                }
                if (ans.name === "1.Continue fighting") {
                    console.log(chalk.blueBright("You continue on your adventure !"));
                }
                else {
                    console.log(chalk.magentaBright("You exit the dungeon,successfully from your adventure !\n"));
                    running = false;
                    break;
                }
            }
        }
    }
    await GAME();
}
async function Continue() {
    do {
        await Adv();
        var am = await inquirer.prompt({
            name: "Hey",
            type: "list",
            message: chalk.blue("Do you want to continue ?"),
            choices: ["Yes", "No"]
        });
    } while (am.Hey === "Yes");
    if (am.Hey === "No") {
        console.log(chalk.blueBright("\n  ##############################"));
        console.log(chalk.greenBright("  # THANK YOU  FOR  PLAYING !!! "));
        console.log(chalk.redBright(" ##############################"));
    }
}
await Continue();
