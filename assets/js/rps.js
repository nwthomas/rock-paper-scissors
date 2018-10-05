// global variables
let comparison = 0;
let totalScore = 0;
let playerSelection = "";

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

    // computer choice
    let computerChoice = computerPlay();

    // makes sure player choice is valid
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        
    } else {
        playerSelection;
    }

    // comparison algorithm
    // rock comparison
    if (computerChoice === "rock") {
        if (computerChoice === "rock" && playerSelection === "rock") {
            alert("The computer chose rock. You tied with the computer.");
            return comparison -= 0;
        } else if (computerChoice === "rock" && playerSelection == "paper") {
            alert("The computer chose rock. You just beat the computer.");
            return comparison = (comparison + 1);
        } else {
            alert("The computer chose rock. The computer beat you.");
            return comparison -= 1;
        }

    // paper comparison
    } else if (computerChoice === "paper") {
        if (computerChoice === "paper" && playerSelection === "paper") {
            alert("The computer chose paper. You tied with the computer.");
            return comparison -= 0;;
        } else if (computerChoice === "paper" && playerSelection == "scissors") {
            alert("The computer chose paper. You just beat the computer.");
            return comparison = (comparison + 1);
        } else {
            alert("The computer chose paper. The computer beat you.");
            return comparison -= 1;
        }
 
    // scissors comparison
    } else if (computerChoice === "scissors") {
        if (computerChoice === "scissors" && playerSelection === "scissors") {
            alert("The computer chose scissors. You tied with the computer.");
            return comparison -= 0;
        } else if (computerChoice === "scissors" && playerSelection == "rock") {
            alert("The computer chose scissors. You just beat the computer.");
            return comparison = (comparison + 1);
        } else {
            alert("The computer chose scissors. The computer beat you.");
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

// new code
let button = document.querySelectorAll("#btn");
    button.addEventListener("click", () => {
    playerSelection = button.value;
    console.log(playerSelection);
})
