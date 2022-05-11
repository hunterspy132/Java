
let playerScore = 0;
let computerScore = 0;

game();

function computerPlay() {
    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * random.length)];
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("You have to pick Rock paper scissors");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore > computerScore) {
        console.log(" You are a winner");
    } else if(playerScore = computerScore){
        console.log("well we draw it out");
    }else{
        console.log("Try again")
    }

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ("Draw");
    } else if (playerSelection === "rock".toUpperCase) {
        if (computerSelection === "scissors") {
            playerScore++;
            return "You won this round";

        } else {
            computerScore++;
            return "You fail? it's okay";
        }
    } else if (playerSelection === "scissors".toLocaleUpperCase) {
        if (computerSelection === "paper") {
            playerScore++;
            return "You won this round";

        } else {
            computerScore++;
            return "You fail? it's okay";
        }
    } else if (playerSelection === "paper".toLocaleUpperCase) {
        if (computerSelection === "rock") {
            playerScore++;
            return "You won this round";

        } else {
            computerScore++;
            return "You fail? it's okay";
        }
    }
}
