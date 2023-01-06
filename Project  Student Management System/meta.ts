//npx shahmir-stdmsystem
import chalk from "chalk";
import chalkanimation from "chalk-animation";
import inquirer from "inquirer";
import randomInteger from "random-int";
 
async function meta(){
  return new Promise(resolve=>{
    setTimeout(resolve,3000)
  })  
}
async function welcome(){
    let wel=chalkanimation.rainbow("WELCOME TO SHAHMIR STUDENT MANAGEMENT SYSTEM !");
    await meta();
    wel.stop();
}
await welcome();

async function about(){
  var ans=await inquirer.prompt([{
    "type":"input",
    "name":"name",
    "message":chalk.blue("PLEASE ENTER YOUR FULLNAME ?")
  

  },
{
  "type":"input",
  "name":"email",
  "message":chalk.green("PLEASE ENTER YOUR EMAIL ADDRESS ?")

},
{
 "type":"password",
 "name":"pass",
 "message":chalk.yellowBright("PLEASE ENTER YOUR PASSWORD ?")
},
{
  "type":"list",
  "name":"course",
  "message":chalk.green("PLEASE SELECT ANY COURSE IN WHICH YOU WANT TO ENROLL ?"),
  "choices":["Blockchain","Web 3.0","Mixed Reality(MR)","Gaming"]
}])
if (ans.course==="Blockchain") {
  console.log(chalk.yellowBright("\nCURRENT STATUS"));
  let numb=randomInteger(11346,11394);
  console.log(chalk.green(
              `Name: ${ans.name}
               Email: ${ans.email}
               Password: ${ans.pass}
               Course: ${ans.course}
               Id: ${numb}
               Batch: 40
               City: Islamabad
               Day: Saturday
               Time: 09:00 AM To 01:00 PM
               Quarter Fee: 3000
               Year: 2022 To 2023`));
  
  
}if (ans.course==="Web 3.0") {
  console.log(chalk.yellowBright("\nCURRENT STATUS"));
  let numb=randomInteger(11234,11379);
  console.log(chalk.green(`
               Name: ${ans.name}
               Email: ${ans.email}
               Password: ${ans.pass}
               Course: ${ans.course}
               Id: ${numb}
               Batch: 39
               City: Karachi
               Day: Sunday
               Time: 02:00 PM To 06:00 PM
               Quarter Fee: 4000
               Year: 2022 To 2023`));
      


}if (ans.course==="Mixed Reality(MR)") {
  console.log(chalk.yellowBright("\nCURRENT STATUS"));
  let numb=randomInteger(11594,11789);
  console.log(chalk.green(`
               Name: ${ans.name}
               Email: ${ans.email}
               Password: ${ans.pass}
               Course: ${ans.course}
               Id: ${numb}
               Batch: 38
               City: Lahore
               Day: Monday
               Time: 10:00 AM To 02:00 PM
               Quarter Fee: 2000
               Year: 2022 To 2023`));


}if (ans.course==="Gaming") {
  console.log(chalk.yellowBright("\nCURRENT STATUS"));
  let numb=randomInteger(12345,12543);
  console.log(chalk.green(` 
               Name: ${ans.name}
               Email: ${ans.email}
               Password: ${ans.pass}
               Course: ${ans.course}
               Id: ${numb}
               Batch: 41
               City: Peshawar
               Day: Tuesday
               Time: 08:00 AM To 02:00 PM
               Quarter Fee: 5000
               Year: 2022 To 2023`));
 

}}

async function dob(){
  do {
    await about();
    var ans=await inquirer.prompt({
     "type":"list",
     "name":"reagain",
     "message":chalk.magenta("\nDo you want to continue?"),
     "choices":["Yes","No"]
    })
    
  } while (ans.reagain=="Yes");
}
await dob();
