// global variables
let comparison = 0;
let totalScore = 0;

// computer's choice of rock, paper, or scissors
function computerPlay() {
    let computerSelection = Math.random();
    if (computerSelection <= 0.34) {
        return "rock";
    } else if (computerSelection <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

// plays single round of rock, paper, scissors
function playRound() {

    // function & global variables
    let playerSelection = prompt("Please choose rock, paper, or scissors:", "Enter text here...");
        playerSelection = playerSelection.toLowerCase();
    let computerChoice = computerPlay();

    console.log(computerChoice);

    // makes sure player choice is valid
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        alert("That's not a valid choice. Please re-enter.");
        playRound();
    } else {
        playerSelection;
    }

    // comparison algorithm
    // rock comparison
    if (computerChoice === "rock") {
        if (computerChoice === "rock" && playerSelection === "rock") {
            alert("You tied with the computer.");
            return comparison -= 0;
        } else if (computerChoice === "rock" && playerSelection == "paper") {
            alert("You just beat the computer.");
            return comparison = (comparison + 1);
        } else {
            alert("The computer beat you.");
            return comparison -= 1;
        }

    // paper comparison
    } else if (computerChoice === "paper") {
        if (computerChoice === "paper" && playerSelection === "paper") {
            alert("You tied with the computer.");
            return comparison -= 0;;
        } else if (computerChoice === "paper" && playerSelection == "scissors") {
            alert("You just beat the computer.");
            return comparison = (comparison + 1);
        } else {
            alert("The computer beat you.");
            return comparison -= 1;
        }
 
    // scissors comparison
    } else if (computerChoice === "scissors") {
        if (computerChoice === "scissors" && playerSelection === "scissors") {
            alert("You tied with the computer.");
            return comparison -= 0;
        } else if (computerChoice === "scissors" && playerSelection == "rock") {
            alert("You just beat the computer.");
            return comparison = (comparison + 1);
        } else {
            alert("The computer beat you.");
            return comparison -= 1;
        }
    
    // incorrect response penalty
    } else {
        alert("You have to choose a valid response: -1 point.")
        return comparison = parseFloat(comparison) + -1;
    }
}

// plays 5 rounds of rock, paper, scissors
function game() {
    for (i = 0; i < 5; i++) {
        playRound();
        console.log("Your current score is " + comparison + ".");
    }
}

game();
