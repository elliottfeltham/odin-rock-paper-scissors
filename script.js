const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

// Get Computers choice with random number generator

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
};

// Initialize each players score variables

let humanScore = 0;
let computerScore = 0;

// Write logic to play a single round and compute winner with conditionals

function playRound(computerChoice, humanChoice) {
    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You win! Rock beats Scissors!");
        humanScore ++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You win! Paper beats Rock!");
        humanScore ++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You win! Scissors beats Paper!");
        humanScore ++;
    } else if (humanChoice === computerChoice) {
        console.log(`Its a tie! You both chose ${humanChoice}`);
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

// Write logic to play 5 rounds and track the score

function playGame() {    
    if (humanScore > computerScore) {
        console.log(`You win! You: ${humanScore} - Computer: ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You lose! You: ${humanScore} - Computer: ${computerScore}`);
    } else {
        console.log(`It's a tie! You: ${humanScore} - Computer: ${computerScore}`);
    }
}

let humanChoice;

rockButton.addEventListener("click", () => {
    humanChoice = "Rock";
    playRound(humanChoice, getComputerChoice());
});
    
paperButton.addEventListener("click", () => {
    humanChoice = "Paper";
    playRound(humanChoice, getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
    humanChoice = "Scissors";
    playRound(humanChoice, getComputerChoice());
});

playGame();

