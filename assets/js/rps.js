// global variables
let comparison = 0;
let playerSelection = "";
const buttons = document.querySelectorAll("input");
let gameNumber = 0;
let endingPhrase = "";

// computer choice
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

// check to see if game is final 
function getScore() {
    if (gameNumber == 5) {
        if (comparison == 0) {
            endingPhrase = " You tied with the computer.";
        } else if (comparison > 0) {
            endingPhrase = " You beat the computer.";
        } else {
            endingPhrase = " The computer beat you.";
        }
    } else {
        return;
    }
}

// resets game if score is 5
function resetGame() {
    if (gameNumber == 5) {
        gameNumber = 0;
        comparison = 0;
        endingPhrase = "";
    } else {
        return;
    }
}

// plays a single round of the game
function playRound() {

    gameNumber++
    let computerChoice = computerPlay();

    playerSelection = playerSelection.toLowerCase();

    // rock comparison
    if (computerChoice === "rock") {
        if (computerChoice === "rock" && playerSelection === "rock") {
            comparison -= 0;
            getScore();
            document.getElementById("text").innerHTML = "The computer chose rock. Your score is "
                + comparison + "." + endingPhrase;
            resetGame();
            return;
        } else if (computerChoice === "rock" && playerSelection == "paper") {
            comparison = (comparison + 1);
            getScore();
            document.getElementById("text").innerHTML = "The computer chose rock. Your score is "
                + comparison + "." + endingPhrase;
            resetGame();
            return;
        } else {
            comparison -= 1;
            getScore();
            document.getElementById("text").innerHTML = "The computer chose rock. Your score is "
                + comparison + "." + endingPhrase;
            resetGame();
            return;
        }

    // paper comparison
    } else if (computerChoice === "paper") {
        if (computerChoice === "paper" && playerSelection === "paper") {
            comparison -= 0;
            getScore();
            document.getElementById("text").innerHTML = "The computer chose paper. Your score is "
                + comparison + "." + endingPhrase;
            resetGame();
            return;
        } else if (computerChoice === "paper" && playerSelection == "scissors") {
            comparison = (comparison + 1);
            getScore();
            document.getElementById("text").innerHTML = "The computer chose paper. Your score is "
                + comparison + "." + endingPhrase;
            resetGame();
            return;
        } else {
            comparison -= 1;
            getScore();
            document.getElementById("text").innerHTML = "The computer chose paper. Your score is "
                + comparison + "." + endingPhrase;
            resetGame();
            return;
        }
 
    // scissors comparison
    } else if (computerChoice === "scissors") {
        if (computerChoice === "scissors" && playerSelection === "scissors") {
            comparison -= 0;
            getScore();
            document.getElementById("text").innerHTML = "The computer chose scissors. Your score is " 
                + comparison + "." + endingPhrase;
            resetGame();
            return;
        } else if (computerChoice === "scissors" && playerSelection == "rock") {
            comparison = (comparison + 1);
            getScore();
            document.getElementById("text").innerHTML = "The computer chose scissors. Your score is "
                + comparison + "." + endingPhrase;
            resetGame();
            return;
        } else {
            comparison -= 1;
            getScore();
            document.getElementById("text").innerHTML = "The computer chose scissors. Your score is "
                + comparison + "." + endingPhrase;
            resetGame();
            return;
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
