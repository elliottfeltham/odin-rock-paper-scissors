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

console.log(getComputerChoice())

// Get users choice with prompt

function getHumanChoice() {
    let answer = prompt("Enter your choice: ");
    let userChoice = answer.charAt(0).toUpperCase() + answer.slice(1).toLowerCase();
    // Add input validation and error handling later

    return userChoice
}

let test = getHumanChoice();

console.log(test);
// Compute winner with conditionals

// Initialize each players score variables

// Write logic to play a single round

// Write logic to play 5 rounds and track the score




