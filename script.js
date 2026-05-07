const choices = document.getElementById("choices-container");
let choice;

choices.addEventListener("click", (e) => {
    choice = e.target.alt;
    play(choice);
})

function getComputerChoice(){
    const computerChoice = (Math.floor(Math.random() * 3)) + 1;
    if(computerChoice === 1){
        return "rock";
    }else if (computerChoice === 2){
        return "paper";
    }else{
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
            return;
        }else{
            alert('Player won the game!')
            return;
        }
    }else{
        round(choice);
        rounds++;
        return;
    }    
}
