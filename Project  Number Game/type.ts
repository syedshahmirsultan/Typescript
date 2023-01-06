//npx shahmirnumbgame
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
import randomInteger from "random-int";

async function ab(){
    return new Promise(resolve => {
      setTimeout(resolve,3000)  
    })
}
async function Greet(){
  var animation=chalkAnimation.rainbow("WELCOME  TO  SHAHMIR  NUMBER  GUESSING  GAME");
  await ab();
  animation.stop();  
}
await Greet();
console.log(chalk.bgRed("\nGOOD TO SEE YOU HERE\n"));

                                     

 async function random(){
  var numb=randomInteger(1,10)
var answers=  await inquirer.prompt
({
  type:"input",
  name:"userName",
 message:chalk.blueBright("PLEASE ENTER YOUR NAME")
});
async function gue(){
  var answer=await inquirer.prompt(
{type:"number",
name:"guess",
message:chalk.blueBright("GUESS THE NUMBER BETWEEN 1 AND 10:")
})
if (numb>answer.guess) {
  console.log(chalk.redBright(`${answers.userName} ! Your guess is low.Guess again`));
 await gue();
}if(numb<answer.guess){
  console.log(chalk.redBright(`${answers.userName} ! Your guess is high.Guess again`));
  await gue();
}

  if(numb===answer.guess) {
    console.log(chalk.greenBright(`${answers.userName} congratulations! You have guessed the number.The number is ${numb}`));
}


}await gue();}

;
   
    
async function cont(){
  do {
    await random();
   var ans= await inquirer.prompt({
      type:"input",
      name:"restart",
      message:chalk.yellowBright("Do you want to continue?Press Y/N")
    })
    
  } while (ans.restart=="YES"||ans.restart=="yes"||ans.restart=="Y"||ans.restart=="y"||ans.restart=="yES"||ans.restart=="yEs"||ans.restart=="YEs"||ans.restart=="YeS");
}
await cont();
 
