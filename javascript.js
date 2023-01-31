function getComputerChoice() {
    let randomNum = Math.random();
    //console.log(randomNum);
    let choice;

    if  (randomNum <= 0.333) {
        choice = "rock";
    } else if (randomNum <= 0.666) {
        choice = "scissors";
    } else {
        choice = "paper";
    }

    console.log(choice);

    return(choice);

    // get a random rps value which is hidden from the user
    // random number, if <= 0.333 = Rock
    // if <= 0.666 = Scissors
    // if <= 0.999 = Paper
}

// get user input
// ask user what their choice is
// if it isnt rock paper or scissors they must enter the right string

function getUserChoice() {

    let userChoice = prompt("Rock, Paper, or Scissors, what would you like to play?").toLowerCase();

    while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        userChoice = prompt("Error this move is not recognized, please enter either Rock, paper, or Scissors:").toLowerCase()
    }

    console.log(userChoice);

    return(userChoice);
} 

function startGame() {
    
    let userChoice = getUserChoice();

    let choice = getComputerChoice();

    if ((choice == userChoice) && choice == "rock") {
        console.log("Tie! You both chose Rock");
    } else if ((choice == userChoice) && choice == "paper") {
        console.log("Tie! You both chose Paper");
    } else if ((choice == userChoice) && choice == "scissors") {
        console.log("Tie! You both chose Scissors");
    } else if ((choice == "rock") && (userChoice == "paper")) {
        console.log("You won! Paper beats Rock");
        userReal++;
    } else if ((choice == "rock") && (userChoice == "scissors")) {
        console.log("You lost! Rock beats Scissors");
        userCPU++;
    } else if ((choice == "paper") && (userChoice == "rock")) {
        console.log("You lost! Paper beats Rock");
        userCPU++;
    } else if ((choice == "paper") && (userChoice == "scissors")) {
        console.log("You won! Scissors beat Paper");
        userReal++;
    } else if ((choice == "scissors") && (userChoice == "rock")) {
        console.log("You won! Rock beats Scissors");
        userReal++;
    } else if ((choice == "scissors") && (userChoice == "paper")) {
        console.log("You lost! Scissors beat Paper");
        userCPU++;
    }
} 

let userReal = 0;
let userCPU = 0;

for (let i = 0; i < 5; i++) {
    startGame();
}

if (userReal > userCPU) {
    console.log("Human Won");
} else if (userReal < userCPU) {
    console.log("Computer Won");
} else {
    console.log("Tie");
}

// make rules
// if rock meets rock tie
// else if rock meets scissors rock wins
// else if rock meets paper paper wins
// else submit proper playing word
