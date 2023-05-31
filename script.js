function getComputerChoice(){
    const choice = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choice[randomIndex];
}
function play(playerSelection){
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = getComputerChoice;
    if (playerChoice === computerChoice){
        return `It's a tie! Both you and computer picked ${playerChoice}`
    }else if(

    ){

    }
    

}
console.log(play("rock"));