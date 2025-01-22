const buttons = document.querySelectorAll("button");
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

    let roundWinner = null;

    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        roundResult.textContent = "You win! Rock beats Scissors!";
        humanScore ++;
        roundWinner = "human";
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        roundResult.textContent = "You win! Paper beats Rock!";
        humanScore ++;
        roundWinner = "human";
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        roundResult.textContent = "You win! Scissors beats Paper!";
        humanScore ++;
        roundWinner = "human";
    } else if (humanChoice === computerChoice) {
        roundResult.textContent = `Its a tie! You both chose ${humanChoice}`;
    } else {
        roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
        roundWinner = "computer";
    }

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    checkWinner();
    return roundWinner;
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

function resetButton() {
    buttons.forEach((button) => {
        button.style.backgroundColor = "white";
    }); 
}

rockButton.addEventListener("click", () => {
    const winner = playRound("Rock", getComputerChoice());
    rockButton.style.backgroundColor = winner === "human" ? "rgba(0, 255, 50, 0.5)" : winner === "computer" ? "rgba(255, 0, 0, 0.5)" : "white";
    setTimeout(resetButton, 2500);
});

paperButton.addEventListener("click", () => {
    const winner = playRound("Paper", getComputerChoice());
    paperButton.style.backgroundColor = winner === "human" ? "rgba(0, 255, 0, 0.5)" : winner === "computer" ? "rgba(255, 0, 0, 0.5)" : "white";
    setTimeout(resetButton, 2500);
});

scissorsButton.addEventListener("click", () => {
    const winner = playRound("Scissors", getComputerChoice());
    scissorsButton.style.backgroundColor = winner === "human" ? "rgba(0, 255, 0, 0.5)" : winner === "computer" ? "rgba(255, 0, 0, 0.5)" : "white";
    setTimeout(resetButton, 2500);
});


