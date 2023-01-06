// npx shahmir-countdownapp
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
import inquirer from'inquirer';

async function abc(){
    return new Promise(res=>
        setTimeout(res,3000))
}
async function cde(){
    let message=chalkAnimation.rainbow("          WELCOME TO SHAHMIR  COUNTDOWN TIMER APP !!!");
    await abc();
    message.stop();   
} 
await cde();



var date=chalk.greenBright(new Date().getDate() +"-"+new Date().getMonth()+1+"-"+new Date().getFullYear()); 
 console.log(chalk.yellow("\n"+`The current date is: ${date}`+"\n"));
async function aws(){
  var inq=await inquirer.prompt({
    type:"input",
    name:"Count",
    message:chalk.blueBright("You can set a countdown timer\n(Please enter time in minutes)"),
  
  });
  var sec=inq.Count*60;
  console.log(chalk.redBright(" CountDown starts !"))
let va=()=>{
console.clear();
if (sec>0) {
   
  console.log(chalk.bgBlue("\n\t" +    sec))

     setTimeout(va,1000)
  if (sec===1) {
    console.log(chalk.greenBright(" CountDown ends !"));
    
  }
}sec--;
}
setTimeout(va,1000)
}
  
await aws();


