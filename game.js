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

function rps(playerSelection, computerSelection) {
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

function displayComputerSelection(computerSelection) {
    let img = document.createElement('img');
    img.style.cssText = 'background-color: #BDCDD6; width: 150px; height: auto';
    img.setAttribute('src', `images/${computerSelection}.png`);
    img.setAttribute('alt', computerSelection);
    let computerSelectionDiv = document.querySelector('.computerSelection > div');
    if (computerSelectionDiv.hasChildNodes()) {
        computerSelectionDiv.removeChild(computerSelectionDiv.firstChild);
    }
    computerSelectionDiv.appendChild(img);
}

function updateScoreAndInfo(result) {
    let info = document.querySelector('.info');
    info.textContent = result;

    let score;
    if (result.includes("win")) {
        score = document.getElementById("playerScore");
    }  else if (result.includes("lose")) {
        score = document.getElementById("computerScore");
    }

    if (score != null) {
        score.textContent = Number.parseInt(score.textContent) + 1;
    }

    return score;
}

function endGame(score) {
    let info = document.querySelector('.info');
    if (score.id == "playerScore") {
        info.textContent = "You got 5 points! You Won!";
    } else {
        info.textContent = "Computer reached 5 points! You Lost!";
    }

    let selections = document.querySelectorAll('.playerSelection div');

    selections.forEach(selection => {
        selection.removeEventListener('click', playRound);
    })

    let btn = document.createElement('button');
    btn.textContent = "Play Again";
    btn.style.cssText = 'background-color: #6096B4; color: #EEE9DA; width: 140px; height: 70px; border: solid #BDCDD6 5px; border-radius: 12px; font-size: 18px;'
    btn.addEventListener('click', initializeGame);
    document.querySelector(".infoContainer").appendChild(btn);
}

function playRound(e) {
    let selected = document.querySelector('.selected');
    if (selected) {
        selected.classList.remove("selected");
    }

    this.classList.add("selected");
    let playerSelection = this.id;

    let computerSelection = getComputerChoice();

    displayComputerSelection(computerSelection);

    let result = rps(playerSelection, computerSelection);

    let score = updateScoreAndInfo(result);

    if (score != null && score.textContent == "5") {
        endGame(score);
    }
}

function initializeGame() {
    let selections = document.querySelectorAll('.playerSelection div');

    selections.forEach(selection => {
        selection.addEventListener('click', playRound);
    });

    let selected = document.querySelector('.selected');
    if (selected) {
        selected.classList.remove("selected");
    }

    let info = document.querySelector('.info');
    info.innerHTML = 'First to 5 points win<br>What are you going to play?';

    let playerScore = document.getElementById("playerScore");
    let computerScore = document.getElementById("computerScore");

    playerScore.textContent = "0";
    computerScore.textContent = "0";

    let computerSelectionDiv = document.querySelector('.computerSelection > div');
    if (computerSelectionDiv.hasChildNodes()) {
        computerSelectionDiv.removeChild(computerSelectionDiv.firstChild);
    }

    let btn = document.querySelector('.infoContainer > button');
    if (btn) {
        btn.remove();
    }
}

let playerName = prompt("What\'s your name?");
let player = document.querySelector('.player>.label');
player.textContent = playerName;

initializeGame();