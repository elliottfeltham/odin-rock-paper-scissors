const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const roundResult = document.querySelector("#round-result");
const computerScoreDisplay = document.querySelector("#computer-score")
const humanScoreDisplay = document.querySelector("#player-score")

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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        roundResult.textContent = "You win! Rock beats Scissors!";
        humanScore ++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        roundResult.textContent = "You win! Paper beats Rock!";
        humanScore ++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        roundResult.textContent = "You win! Scissors beats Paper!";
        humanScore ++;
    } else if (humanChoice === computerChoice) {
        roundResult.textContent = `Its a tie! You both chose ${humanChoice}`;
    } else {
        roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    checkWinner();
}

// Write logic to play 5 rounds and track the score

function checkWinner() {    
    if (humanScore == 5) {
        roundResult.textContent = `You win! You: ${humanScore} - Computer: ${computerScore}`;
        resetGame();
    } else if (computerScore == 5) {
        roundResult.textContent = `You lose! You: ${humanScore} - Computer: ${computerScore}`;
        resetGame();
}};

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
}

rockButton.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
});
    
paperButton.addEventListener("click", () => {
    playRound("Paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
    playRound("Scissors", getComputerChoice());
});


