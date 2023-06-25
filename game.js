function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);

    if (random == 0) {
        return "rock";
    } else if (random == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let lowerPlayerSelection = playerSelection.toLowerCase();

    if (lowerPlayerSelection == computerSelection) {
        return "It's a tie!";
    } else if (lowerPlayerSelection == "rock") {
        if (computerSelection == "paper") {
            return "You lose! Paper beats rock!";
        } else {
            return "You win! Rock beats scissors!";
        }
    } else if (lowerPlayerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper beats rock!";
        } else {
            return "You lose! Scissors beats paper!";
        }
    } else {
        if (computerSelection == "rock") {
            return "You lose! Rock beats scissors!";
        } else {
            return "You win! Scissors beats paper!";
        }
    }
}

function game() {
    let winCountPlayer = 0;
    let winCountComputer = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`Round: ${i + 1}`);
        let playerSelection = prompt("Rock, Paper, Scissors?");
        let result = playRound(playerSelection, getComputerChoice());
        console.log(result);
        if (result.includes("win")) {
            winCountPlayer++;
        }  else if (result.includes("lose")) {
            winCountComputer++;
        }
    }

    if (winCountPlayer > winCountComputer) {
        console.log("Winner: Player\nCongrats!");
    } else if (winCountPlayer < winCountComputer) {
        console.log("Winner: Computer\nTry again!");
    } else {
        console.log("Tie!\nTry again!");
    }
}

game();