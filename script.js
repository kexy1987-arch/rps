const choices = document.getElementById("choices-container");
let choice;
const playersScore = document.getElementById("player-score");
const computersScore = document.getElementById("computer-score");
const playersPic = document.getElementById("player-choice");
const computerPic = document.getElementById("computer-choice");

choices.addEventListener("click", (e) => {
    choice = e.target.alt;
    playersPic.children[0].src = e.target.src;
    playersPic.children[0].alt = e.target.alt;
    play(choice);
})

function getComputerChoice(){
    const computerChoice = (Math.floor(Math.random() * 3)) + 1;
    if(computerChoice === 1){
        computerPic.children[0].src = "https://static.vecteezy.com/system/resources/previews/050/740/253/large_2x/cute-smiling-rock-cartoon-illustration-vector.jpg"
        computerPic.children[0].alt = "rock"
        return "rock";
    }else if (computerChoice === 2){
        computerPic.children[0].src = "https://img.freepik.com/premium-vector/hand-drawn-paper-cartoon-illustration_23-2151474661.jpg?w=2000";
        computerPic.children[0].alt = "paper";
        return "paper";
    }else{
        computerPic.children[0].src = "https://img.freepik.com/premium-vector/hand-drawn-scissors-cartoon-illustration_23-2151388093.jpg?w=2000";
        computerPic.children[0].alt = "scissor";
        return "scissors";
    }
}

function getPlayerChoice(){
    let playerChoice = prompt("Rock, paper or scissors?");
    if(playerChoice === null)return;
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

let playerScore = 0;
let computerScore = 0;

function round(player){
    const computer = getComputerChoice();
    if (!player)return;
    if (computer === player){
        alert(`It's a tie.\n Player: ${playerScore} Computer: ${computerScore}`)
        return
    }
    if(player === "rock"){
        if(computer === "paper"){
            computerScore += 1;
            alert(`Computer has Paper! Computer win the round.\n Player: ${playerScore} Computer: ${computerScore}`);
            return
        }else{
            playerScore += 1;
            alert(`Player has Rock! Player win the round.\n Player: ${playerScore} Computer: ${computerScore}`);
            return
        }
    }
    if (player === "scissors") {
        if (computer === "rock") {
            computerScore += 1;
            alert(`Computer has Rock! Computer win the round.\n Player: ${playerScore} Computer: ${computerScore}`);
            return
        } else {
            playerScore += 1;
            alert(`Player has Scissors! Player win the round.\n Player: ${playerScore} Computer: ${computerScore}`);
            return
        }
    }
    if (player === "paper") {
        if (computer === "scissors") {
            computerScore += 1;
            alert(`Computer has scissors! Computer win the round.\n Player: ${playerScore} Computer: ${computerScore}`);
            return
        } else {
            playerScore += 1;
            alert(`Player has paper! Player win the round.\n Player: ${playerScore} Computer: ${computerScore}`);
            return
        }
    }
    
}
let rounds = 0;

function play(choice){
    if(rounds === 5){
        if (computerScore > playerScore){
            alert(`Computer won!`)
            rounds = 0;
            playerScore = 0;
            computerScore = 0;
            playersScore.textContent = playerScore;
            computersScore.textContent = computerScore;
            return;
        }else{
            alert('Player won the game!')
            rounds = 0;
            playerScore = 0;
            computerScore = 0;
            playersScore.textContent = playerScore;
            computersScore.textContent = computerScore;
            return;
        }
    }else{
        round(choice);
        playersScore.textContent = playerScore;
        computersScore.textContent = computerScore;
        rounds++;
        return;
    }    
}
