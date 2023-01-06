// npx shahmir-currencyconverter
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";

async function shah(){
    return new Promise(resolve => {
    setTimeout(resolve,3000)  
    })
}

async function wel(){
let mes=chalkAnimation.rainbow("WELCOME TO TRIPLE S MONEY EXCHANGE")
await shah();
mes.stop();
}
await wel();                              
async function dis(){
await inquirer.prompt([{
type:"list",
name:"currency",
message:chalk.blue("SELECT THE CURRENCY "),
choices:["Dollar","Pound","Riyal","Rupee","Euro","Dinar"]
},{
type:"number",
name:"amount",
message:chalk.green("ENTER THE AMOUNT")
},
{type:"list",
name:"convert",
message:chalk.blue("SELECT THE CURRENCY IN WHICH YOU CONVERT"),
choices:["Dollar","Pound","Riyal","Rupee","Euro","Dinar"]

    }
]).then((ans)=>{
  if (ans.currency==="Dollar"&&ans.convert==="Rupee"
  ) {let va=(ans.amount*223.67  +" "+"Rupee");
  console.log(chalk.yellow(va));
  
  }  
  else if (ans.currency==="Dollar"&&ans.convert==="Dollar") {
   let va= (ans.amount +" "+"Dollar");
    console.log(chalk.yellow(va));
}  else if (ans.currency==="Dollar"&&ans.convert==="Pound") {
    let va=(ans.amount*0.81 +" "+"Pound");
    console.log(chalk.yellow(va));
       
}  else if (ans.currency==="Dollar"&&ans.convert==="Riyal") {
    let va=(ans.amount*3.76 +" "+"Riyal");
    console.log(chalk.yellow(va));  
}  else if (ans.currency==="Dollar"&&ans.convert==="Euro") {
    let va=(ans.amount*0.95 +" "+"Euro"); 
    console.log(chalk.yellow(va)); 
}  else if (ans.currency==="Dollar"&&ans.convert==="Dinar") {
    let va=(ans.amount*0.31 +" "+"Dinar");
    console.log(chalk.yellow(va));
}  else if (ans.currency==="Pound"&&ans.convert==="Dollar") {
    let va=(ans.amount*1.23 +" "+"Dollar");
    console.log(chalk.yellow(va));
}  else if (ans.currency==="Pound"&&ans.convert==="Pound") {
    let va=(ans.amount +" "+"Pound");
    console.log(chalk.yellow(va));
}  else if (ans.currency==="Pound"&&ans.convert==="Riyal") {
    let va=(ans.amount*4.62 +" "+"Riyal");
    console.log(chalk.yellow(va));
}  else if (ans.currency==="Pound"&&ans.convert==="Rupee") {
    let va=(ans.amount*274.96 +" "+"Rupee");
    console.log(chalk.yellow(va));
       
}  else if (ans.currency==="Pound"&&ans.convert==="Euro") {
    let va=(ans.amount*1.17+" "+ "Euro");
    console.log(chalk.yellow(va));
}  else if (ans.currency==="Pound"&&ans.convert==="Dinar") {
    let va=(ans.amount*0.38 +" "+ "Dinar");
    console.log(chalk.yellow(va));
}  else if (ans.currency==="Riyal"&&ans.convert==="Dollar") {
    let va=(ans.amount*0.27+" "+"Dollar");
    console.log(chalk.yellow(va));
}  else if (ans.currency==="Riyal"&&ans.convert==="Pound") {
    let va=(ans.amount*0.22+" "+ "Pound");
    console.log(chalk.yellow(va));
}  else if (ans.currency==="Riyal"&&ans.convert==="Riyal") {
    let va=(ans.amount+" "+"Riyal");
    console.log(chalk.yellow(va));
}  else if (ans.currency==="Riyal"&&ans.convert==="Rupee") {
    let va=(ans.amount*59.51+ " "+"Rupee");
    console.log(chalk.yellow(va));
}  else if (ans.currency==="Riyal"&&ans.convert==="Euro") {
    let va=(ans.amount*0.25+" "+ "Euro");
    console.log(chalk.yellow(va));
}  else if (ans.currency==="Riyal"&&ans.convert==="Dinar") {
    let va=(ans.amount*0.082 +" "+"Dinar");
    console.log(chalk.yellow(va));
}  else if (ans.currency==="Rupee"&&ans.convert==="Dollar") {
    let va=(ans.amount*0.0045 +" " +"Dollar");
    console.log(chalk.yellow(va));
}  else if (ans.currency==="Rupee"&&ans.convert==="Pound") {
    let va=(ans.amount*0.0036 +" "+"Pound");
    console.log(chalk.yellow(va));
}  else if (ans.currency==="Rupee"&&ans.convert==="Riyal") {
    let va=(ans.amount*0.017 +" "+"Riyal");
    console.log(chalk.yellow(va));
}  else if (ans.currency==="Rupee"&&ans.convert==="Rupee") {
    let va=(ans.amount +" "+"Rupee");
    console.log(chalk.yellow(va));
}  else if (ans.currency==="Rupee"&&ans.convert==="Euro") {
    let va=(ans.amount*0.0042 +" "+"Euro");
    console.log(chalk.yellow(va));
}  else if (ans.currency==="Rupee"&&ans.convert==="Dinar") {
    let va=(ans.amount*0.0014 +" "+"Dinar");
    console.log(chalk.yellow(va));
}  else if (ans.currency==="Euro"&&ans.convert==="Dollar") {
    let va=(ans.amount*1.05 +" "+"Dollar");
    console.log(chalk.yellow(va));
}  else if (ans.currency==="Euro"&&ans.convert==="Pound") {
    let va=(ans.amount*0.86 +" "+"Pound");
    console.log(chalk.yellow(va));
}  else if (ans.currency==="Euro"&&ans.convert==="Riyal") {
    let va=(ans.amount*3.96 +" "+"Riyal");
    console.log(chalk.yellow(va));
} else if (ans.currency==="Euro"&&ans.convert==="Rupee") {
    let va=(ans.amount*235.83 +" "+"Rupee");
    console.log(chalk.yellow(va));
    
} else if (ans.currency==="Euro"&&ans.convert==="Euro") {
    let va=(ans.amount+" "+"Euro");
    console.log(chalk.yellow(va));
} else if (ans.currency==="Euro"&&ans.convert==="Dinar") {
    let va=(ans.amount*0.32 +" "+"Dinar");
    console.log(chalk.yellow(va));
} else if(ans.currency==="Dinar"&&ans.convert==="Dollar"){
    let va=(ans.amount*3.26 +" "+"Dollar");
    console.log(chalk.yellow(va));
    
}else if(ans.currency==="Dinar"&&ans.convert==="Pound"){
  let va=(ans.amount*2.65 +" "+"Pound");
  console.log(chalk.yellow(va));
  
}else if(ans.currency==="Dinar"&&ans.convert==="Riyal"){
    let va=(ans.amount*12.25 +" "+"Riyal");
    console.log(chalk.yellow(va));
    
}else if(ans.currency==="Dinar"&&ans.convert==="Rupee"){
    let va=(ans.amount*729.3 +" "+"Rupee");
    console.log(chalk.yellow(va));
    
}else if(ans.currency==="Dinar"&&ans.convert==="Euro"){
    let va=(ans.amount*3.09 +" "+"Euro");
    console.log(chalk.yellow(va));
    
}else if(ans.currency==="Dinar"&&ans.convert==="Dinar"){
    let va=(ans.amount +" "+"Dinar");
    console.log(chalk.yellow(va));
}
})
console.log(chalk.greenBright("THANK YOU FOR VISITING TRIPLE S MONEY EXCHANGE !"))
}


async function restart(){
  do {
    await dis();
   var mes= await inquirer.prompt({
    type:"input",
    name:"REAGAIN",
    message:chalk.yellowBright("DO YOU WANT TO CONTINUE ?ENTER Y/N")
   })
    
  } while (mes.REAGAIN==="y"||mes.REAGAIN==="Y"||mes.REAGAIN==="yeS"||mes.REAGAIN==="yes"||mes.REAGAIN==="YeS"||mes.REAGAIN==="yES");  
}
await restart();
