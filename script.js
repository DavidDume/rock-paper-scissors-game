const boxes = document.querySelectorAll('.box');
const userScore = document.querySelector('.userScore');
const computerScore = document.querySelector('.computerScore');
const resetBtn = document.querySelector('button');
const winner = document.querySelector('.winner')

let computerVal = 0;
let userVal = 0;

boxes.forEach(b => {
    b.addEventListener('click', e => {
        game(e.target.dataset.key)
    })
})

resetBtn.addEventListener('click', () => {
    computerVal = 0;
    userVal = 0;
    resetBtn.classList.toggle('hidden')
    userScore.textContent = userVal;
    computerScore.textContent = computerVal;
    winner.textContent = '';
})


const selection = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return selection[Math.floor(Math.random()*selection.length)];
}

function playRound(computerSelects, userSelects) {
    let computer = computerSelects.toLowerCase()
    let user = userSelects.toLowerCase()
    if(computer === "paper" && user === "rock") {
        computerVal++
    } else if(computer === "paper" && user === "scissors") {
        userVal++
    } else if(computer === "paper" && user === "paper") {
        return "Computer Selects Paper, " + " Its a Tie!"
    } else if(computer === "rock" && user === "scissors") {
        computerVal++
    } else if(computer === "rock" && user === "paper") {
        userVal++
    } else if(computer === "rock" && user === "rock") {
        return "Computer Selects Rock, " + " Its a Tie!"
    } else if (computer === "scissors" && user === "paper") {
        computerVal++
    } else if(computer === "scissors" && user === "rock") {
        userVal++
    } else if(computer === "scissors" && user === "scissors") {
        return "Computer Selects Scissors, " + " Its a Tie!"
    }

    if(userVal === 5) {
        winner.textContent = 'You Win!';
        resetBtn.classList.toggle('hidden')
        
    } else if(computerVal === 5) {
        winner.textContent = 'Computer Wins!';
        resetBtn.classList.toggle('hidden')
    }
    
}

function game(user) {
    //for (let i = 0; i <= 5; i++) {
        playRound(computerPlay(), user);
        userScore.textContent = userVal;
        computerScore.textContent = computerVal;
    //}
}

