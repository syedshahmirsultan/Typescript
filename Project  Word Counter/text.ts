// npx shahmirwordcount
import chalk from "chalk";
import chalkanimation from "chalk-animation";
import inquirer from "inquirer"

async function meta(){
    return new Promise(reject=> {
      setTimeout(reject,3000)  
    })
}
async function blockchain(){
    let left=chalkanimation.rainbow("WELCOME TO SHAHMIR WORD COUNTER !")
    await meta();
    left.stop();
}
await blockchain();


console.log(chalk.redBright("\nNICE TO SEE YOU HERE !\n"));

async function count(){
 await inquirer.prompt([{
 "type":"input",
 "name":"name" ,
 "message":chalk.blueBright("Enter your name")
 },
{
  "type":"input",
  name:"para",
  "message":chalk.blueBright("Please write an english text ?I will show the words you had written !")
}]).then(ans=>{
let wn:string=ans.para.replace(/\s+/g,'').replace(/\.+/g,'').replace(/\-+/g,'').replace(/\_+/g,'').replace(/\,+/g,'')
.replace(/\/+/g,'').replace(/\\+/g,'').replace(/\|+/g,'').replace(/\++/g,'').replace(/\?+/g,'').replace(/\=+/g,'')
.replace(/\>+/g,'').replace(/\<+/g,'');
let wn1=wn.length;
console.log(chalk.yellowBright(`This is the text you had written
${ans.para}`));

console.log(chalk.greenBright(`${ans.name}! Your total words  = ${wn1}`));


}) 

}


async function restart(){
  do {
    await count();
    var va=await inquirer.prompt({
      "type":"list",
      "name":"restart",
      "message":chalk.magentaBright("Do you want to continue ?"),
      "choices":["Yes","No"]
    })
    
  } while (va.restart=="Yes")

}
await restart();
