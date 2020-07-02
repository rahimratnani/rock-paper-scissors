const computerPlay = () => {

    let choices = ["rock", "paper", "scissors"];
    let compChoice = Math.floor(Math.random() * 3);

    return choices[compChoice];

};

function playRound() {

    let computerSelection = computerPlay();
    let playerSelection = this.textContent;
    playerSelection = playerSelection.toLowerCase();


    switch (true) {
        case computerSelection === playerSelection:
            playerNotif.textContent = `You pick: ${playerSelection}.`;
            computerNotif.textContent = `Computer picks: ${computerSelection}.`;
            finalNotif.textContent = `It's a Tie!`;
            tie++;
            break;
        case computerSelection === "rock" && playerSelection === "paper":
            playerNotif.textContent = `You pick: ${playerSelection}.`;
            computerNotif.textContent = `Computer picks: ${computerSelection}.`;
            finalNotif.textContent = `PAPER beats ROCK!`;
            playerPoints++;
            break;
        case computerSelection === "rock" && playerSelection === "scissors":
            playerNotif.textContent = `You pick: ${playerSelection}.`;
            computerNotif.textContent = `Computer picks: ${computerSelection}.`;
            finalNotif.textContent = `SCISSORS are beaten by ROCK!`;
            computerPoints++;
            break;
        case computerSelection === "paper" && playerSelection === "rock":
            playerNotif.textContent = `You pick: ${playerSelection}.`;
            computerNotif.textContent = `Computer picks: ${computerSelection}.`;
            finalNotif.textContent = `ROCK is beaten by PAPER!`;
            computerPoints++;
            break;
        case computerSelection === "paper" && playerSelection === "scissors":
            playerNotif.textContent = `You pick: ${playerSelection}.`;
            computerNotif.textContent = `Computer picks: ${computerSelection}.`;
            finalNotif.textContent = `SCISSORS beat PAPER!`;
            playerPoints++;
            break;
        case computerSelection === "scissors" && playerSelection === "rock":
            playerNotif.textContent = `You pick: ${playerSelection}.`;
            computerNotif.textContent = `Computer picks: ${computerSelection}.`;
            finalNotif.textContent = `ROCK beats SCISSORS!`;
            playerPoints++;
            break;
        case computerSelection === "scissors" && playerSelection === "paper":
            playerNotif.textContent = `You pick: ${playerSelection}.`;
            computerNotif.textContent = `Computer picks: ${computerSelection}.`;
            finalNotif.textContent = `PAPER is beaten by SCISSORS!`;
            computerPoints++;
            break;
    }

    playerScoreUpdate.textContent = playerPoints;
    computerScoreUpdate.textContent = computerPoints;

    announceWinner();
}

function announceWinner() {

    if (playerPoints === 5 || computerPoints === 5) {
        const result = document.querySelector('#result h2');
        const buttons = document.querySelectorAll('#options button');
        const resetButtonDiv = document.querySelector('#playAgain');

        if (computerPoints > playerPoints) {
            result.textContent = 'You Lose!';
            result.style.color = 'red';
        } else if (computerPoints === playerPoints) {
            result.textContent = "It's a Tie!";
            result.style.color = 'blue';
        } else {
            result.textContent = 'You Win!';
            result.style.color = 'green';
        }

        document.querySelector('#result').classList.remove('hide');
        document.querySelector('#instruction').classList.add('hide');
        buttons.forEach(button => button.classList.add('hide'));
        resetButtonDiv.classList.remove('hide');
    } 
}

function restartGame() {
    playerPoints = 0;
    computerPoints = 0;
    tie = 0;

    playerScoreUpdate.textContent = playerPoints;
    computerScoreUpdate.textContent = computerPoints;

    document.querySelector('#result').classList.add('hide');
    document.querySelector('#instruction').classList.remove('hide');

    const buttons = document.querySelectorAll('#options button');
    const notifications = document.querySelectorAll('#notify p');
    

    buttons.forEach(button => button.classList.remove('hide'));
    notifications.forEach(p => {
        p.classList.remove('hide');
        p.textContent = '';
    });
    resetButtonDiv.classList.add('hide');
}




// Button objects
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

// Notifying player
let playerNotif = document.querySelector('#playerPick');
let computerNotif = document.querySelector('#computerPick');
let finalNotif = document.querySelector('#notification');

// Score board
let playerScoreUpdate = document.querySelector('#player p');
let computerScoreUpdate = document.querySelector('#computer p');

// Points count
let playerPoints = 0;
let computerPoints = 0;
let tie = 0;

// event listeners for each button
rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

// Play Again button and event listener
const resetButtonDiv = document.querySelector('#playAgain');
resetButtonDiv.addEventListener('click', restartGame);