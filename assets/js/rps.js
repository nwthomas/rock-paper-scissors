let comparison = 0;
let totalScore = 0;
let playerSelection = "";
const buttons = document.querySelectorAll("input");

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

function playRound() {

    let computerChoice = computerPlay();
    console.log(computerChoice);
    playerSelection = playerSelection.toLowerCase();

    // rock comparison
    if (computerChoice === "rock") {
        if (computerChoice === "rock" && playerSelection === "rock") {
            comparison -= 0;
            return document.getElementById("text").innerHTML = "You tied. The computer chose rock. Your score is "
                + comparison + ".";
        } else if (computerChoice === "rock" && playerSelection == "paper") {
            comparison = (comparison + 1);
            return document.getElementById("text").innerHTML = "You won. The computer chose rock. Your score is "
                + comparison + ".";
        } else {
            comparison -= 1;
            return document.getElementById("text").innerHTML = "You lost. The computer chose rock. Your score is "
                + comparison + ".";
        }

    // paper comparison
    } else if (computerChoice === "paper") {
        if (computerChoice === "paper" && playerSelection === "paper") {
            comparison -= 0;
            return document.getElementById("text").innerHTML = "You tied. The computer chose paper. Your score is "
                + comparison + ".";
        } else if (computerChoice === "paper" && playerSelection == "scissors") {
            comparison = (comparison + 1);
            return document.getElementById("text").innerHTML = "You won. The computer chose paper. Your score is "
                + comparison + ".";
        } else {
            comparison -= 1;
            return document.getElementById("text").innerHTML = "You lost. The computer chose paper. Your score is "
                + comparison+ ".";
        }
 
    // scissors comparison
    } else if (computerChoice === "scissors") {
        if (computerChoice === "scissors" && playerSelection === "scissors") {
            comparison -= 0;
            return document.getElementById("text").innerHTML = "You tied. The computer chose scissors. Your score is " 
                + comparison + ".";
        } else if (computerChoice === "scissors" && playerSelection == "rock") {
            comparison = (comparison + 1);
            return document.getElementById("text").innerHTML = "You won. The computer chose scissors. Your score is "
                + comparison + ".";
        } else {
            comparison -= 1;
            return document.getElementById("text").innerHTML = "You lost. The computer chose scissors. Your score is "
                + comparison + ".";
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

buttons.forEach((input) => {
    input.addEventListener("click", (e) => {
        playerSelection = input.value;
        playRound()
    });
});
