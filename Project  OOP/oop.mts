// npx shahmir-oppapp
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
async function Wel(){
    return new Promise(res=>
        setTimeout(res,3000))
}
async function Welcome(){
  let rainb=chalkAnimation.rainbow("        WELCOME TO SHAHMIR OOP CONSOLE BASED APP !!!");
  await Wel();
  rainb.stop();
}
await Welcome();

class Person{
   static  personality:any;
    // constructor 
    constructor(){
      Person.personality=this.AskQuestion()
    }
    public Person(){
       Person.personality="Mystery";
    }
    public async AskQuestion() {
        var ask=await inquirer.prompt({
            name:"answer",
            type:"input",
            message:chalk.redBright("Type 1 if you like to talk to others and type 2 if you would rather keep yourself :"
        )})
        if (ask.answer==1) {
   Person.personality=chalk.greenBright("Extravert");
   
   
} else if(ask.answer==2) {
    Person.personality=chalk.magentaBright("Introvert");
    
}else{

    Person.personality=chalk.blueBright("You are still a mystery");
}

}
    
}
class Student extends Person{
 static _name:string;
    
 constructor(){
    super();}
 
public async method(){ 
     var a=await inquirer.prompt({
       name:"val",
       type:"input",
       message:chalk.redBright("What is your name :")
    })
    
    
   Student._name=chalk.blueBright(a.val);
    console.log(chalk.yellowBright(`Your name is:${Student._name} and your personality type is:${Person.personality}`))}
}
  

async function ques(){
let stu=new Student();

setTimeout(stu.method,7000)}

await ques();
