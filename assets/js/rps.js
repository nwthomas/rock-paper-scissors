let comparison = 0;
let playerSelection = "";
const buttons = document.querySelectorAll("input");
let gameNumber = 0;
let finalMessage = "";

function computerPlay() {
    let computerSelection = Math.random();
    if (computerSelection < 0.34) {
        return "rock";
    } else if (computerSelection < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound() {

    gameNumber++
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
    
    // error response
    } else {
        document.getElementById("text").innerHTML = "Something went wrong. Please reload the page.";
    }
}

buttons.forEach((input) => {
    input.addEventListener("click", (e) => {
        playerSelection = input.value;
        input.focus();
        playRound()
    });
});
