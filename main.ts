#! /usr/bin/env node
import inquirer from "inquirer"

 let answer= await inquirer.prompt(
    {
        name:"Number2",
        type:"number",
        message:"kindly Enter Number",
    }
 );

 let firstNumber:number=5;
if(answer.Number2<firstNumber){
 console.log("your guess is too low");
} else if (answer.Number2>firstNumber){
    console.log("your guess is too high ")
}else{
    console.log("you guess correctly!")
}