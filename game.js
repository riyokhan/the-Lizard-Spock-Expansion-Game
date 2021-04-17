let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result>p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");

function getComputerChoice() {
    //const choices = ["Rock", "Paper", "Scissors"];
    //const random = Math.floor(Math.random()*3);
    const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    const random = Math.floor(Math.random()*5);
    return choices[random];
}

function userWin(u, c){
    userScore++;
    //to show it on the page, use innerHTML
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${u} beat ${c}. You beat me!`;
}

function userLose(u,c){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${c} beat ${u}. Haha! I got you!`;
}

function draw(u,c){
    result_div.innerHTML = `${u} and ${c} - It's a tie, let's play again.`;
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + "_" + computerChoice) {
        //to win, rs pr sp
        //to lose, rp ps sr
        //to draw, rr pp ss

        //case "Rock_Scissors":
        //case "Paper_Rock":
        //case "Scissors_Paper":
        //    userWin(userChoice, computerChoice);
        //    break;
        //case "Rock_Paper":
        //case "Paper_Scissors":
        //case "Scissors_Rock":
        //    userLose(userChoice, computerChoice);
        //    break;
        //case "Rock_Rock":
        //case "Paper_Paper":
        //case "Scissors_Scissors":
        //    draw(userChoice, computerChoice);
        //    break;

//*/
        case "Rock_Scissors":
        case "Rock_Lizard":
        case "Paper_Rock":
        case "Paper_Spock":
        case "Scissors_Paper":
        case "Scissors_Lizard":
        case "Lizard_Paper":
        case "Lizard_Spock":
        case "Spock_Rock":
        case "Spock_Scissors":
            userWin(userChoice, computerChoice);
            break;
        case "Rock_Paper":
        case "Rock_Spock":
        case "Paper_Lizard":
        case "Paper_Scissors":
        case "Scissors_Rock":
        case "Scissors_Spock":
        case "Lizard_Scissors":
        case "Lizard_Rock":
        case "Spock_Lizard":
        case "Spock_Paper":
            userLose(userChoice, computerChoice);
            break;
        case "Rock_Rock":
        case "Paper_Paper":
        case "Scissors_Scissors":
        case "Lizard_Lizard":
        case "Spock_Spock":    
            draw(userChoice, computerChoice);
            break;
    }
}

//const main = () => {
function main(){
    rock_div.addEventListener('click', () => game("Rock"));
    paper_div.addEventListener('click', () => game("Paper"));
    scissors_div.addEventListener('click', () => game("Scissors"));
    lizard_div.addEventListener('click', () => game("Lizard"));
    spock_div.addEventListener('click', () => game("Spock"));
}
//}

main();
