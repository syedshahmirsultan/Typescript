
// npx shahmircalx
  import chalk, { Chalk } from "chalk";
  import inquirer from 'inquirer';
 import chalkAnimation from 'chalk-animation';
import { log } from "console";
const sleep=()=>{
    return new Promise((res) => {
       setTimeout(res,3000)  
    })}

 async function welcome(){
 var messag=chalkAnimation.rainbow( 'WELCOME TO SHAHMIR CALCULATOR'
 );await sleep();
 messag.stop();}
await welcome();

console.log(chalk.blueBright(` 

     _____________________
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|\n`))

    console.log(chalk.bgRedBright("\n NICE  TO SEE YOU HERE\n"))
    


 async function askQ(){
    await inquirer.prompt([
    
    {
      type:"list",
      name:"operator",
      message:chalk.green("SELECT THE OPERATOR "),
    choices:["Addition","Subtraction","Division","Multiplication"
,"Modulus","Power","Percentage"]}
,{
    type:"number",
    name:"num1",
    message:chalk.yellow("ENTER THE FIRST NUMBER :")
}
,{
    type:"number",
    name:"num2",
    message:chalk.yellow("ENTER THE SECOND NUMBER :")
}
]).then((answers)=>{

if (answers.operator==="Addition") {
    console.log(chalk.blue(answers.num1+answers.num2));}
    else if(answers.operator==="Subtraction"){
    console.log(chalk.blue(answers.num1-answers.num2));    
}else if(answers.operator==="Multiplication"){
    console.log(chalk.blue(answers.num1*answers.num2));    
}else if(answers.operator==="Division"){
    console.log(chalk.blue(answers.num1/answers.num2));    
}else if(answers.operator==="Modulus"){
    console.log(chalk.blue(answers.num1%answers.num2));    
}else if(answers.operator==="Power"){
    console.log(chalk.blue(answers.num1**answers.num2));    
}else if(answers.operator==="Percentage"){
    console.log(chalk.blue(answers.num1/answers.num2*100)); 

}})
   
 }


 async function reStart() {
   do{
   await askQ();

    var again=await inquirer.prompt({
         type:"input",
       name:"reAgain",
         message:chalk.blue(
        "\nDo you want to continue?PRESS Y or N: ")
    })
  
} 
while(again.reAgain==="y"|| again.reAgain==="Y"|| again.reAgain==="yes"|| again.reAgain==="YES"||again.reAgain==="yES"||again.reAgain==="Yes"||again.reAgain==="YeS"||again.reAgain==="YEs")}

 await reStart();
