function getComputerChoice(){
    const choice = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choice[randomIndex];
}
function play(playerSelection){
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = getComputerChoice();
    if (playerChoice === computerChoice){
        return `It's a tie! Both you and computer picked ${playerChoice}`;
    }else if(
       (playerChoice === `rock` && computerChoice === `scissors`) || 
       (playerChoice === `scissors` && computerChoice === `paper`) || 
       (playerChoice === `paper` && computerChoice === `rock`)
    ){
        return `You Win! ${playerChoice} beats ${computerChoice}`;
    }else {
        return `You Lose! ${computerChoice} beats ${playerChoice}`;
}}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Enter your choice (rock, paper, or scissors):");
        const result = play(playerChoice);
        console.log(result);
        if (result.startsWith("You Win!")) {
            playerScore++;
        } else if (result.startsWith("You Lose!")) {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log(`You won the game! The score was ${playerScore} to ${computerScore}.`);
    } else if (computerScore > playerScore) {
        console.log(`You lost the game. The score was ${computerScore} to ${playerScore}.`);
    } else {
        console.log(`The game was a tie, with a score of ${playerScore} to ${computerScore}.`);
    }
}
