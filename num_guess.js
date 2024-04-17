#! usr/ env node
import inquirer from "inquirer";
const randomNum = Math.floor(Math.random() * 6 + 1);
let answer = await inquirer.prompt([
    {
        message: "Please guess a number between 1 to 6!:",
        name: "numberGuess",
        type: "number"
    },
]);
if (answer.numberGuess === randomNum) {
    console.log("Congratulation! you guessed right number");
}
else {
    console.log("you guessed wrong number!");
}
