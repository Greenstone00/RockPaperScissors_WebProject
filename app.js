let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const paper_div = document.getElementById("p");


function convertToWorld(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function getComputersChoice() {
    const choices = ['r', 's', 'p'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, compterChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWorld(userChoice) + " beats " + convertToWorld(compterChoice) + ". You Win!"
    document.getElementById(userChoice).classList.add('blue-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('blue-glow')}, 500);
}

function lose(userChoice, compterChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = convertToWorld(compterChoice) + " beats " + convertToWorld(userChoice) + ". You Lose!"
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 500);
}

function draw(userChoice, compterChoice) {
    result_p.innerHTML = "It's a Draw!"
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow')}, 500);
}

function game(userChoice) {
    const compterChoice = getComputersChoice();
    switch (userChoice + compterChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compterChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, compterChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, compterChoice);
            break;
    }
}


function main() {
    rock_div.addEventListener('click', () => game("r"));
    scissors_div.addEventListener('click', () => game("s"));
    paper_div.addEventListener('click', () => game("p"));
}
main();