let choices="rock,paper,scissor";
const arr=choices.split(",");
function getComputerChoice()
{
    let ind=Math.floor(Math.random()*3);
    return arr[ind];
}
function playRound(playerSelection, computerSelection) 
{
    if(playerSelection===computerSelection)
    return "It's a tie :)";
    else if(playerSelection==="rock" && computerSelection==="scissor")
    return `You win! ${playerSelection} beats ${computerSelection}`;
    else if(playerSelection==="rock" && computerSelection==="paper")
    return `You lose! ${computerSelection} beats ${playerSelection}`;
    else if(playerSelection==="paper" && computerSelection==="scissor")
    return `You lose! ${computerSelection} beats ${playerSelection}`;
    else if(playerSelection==="paper" && computerSelection==="rock")
    return `You win! ${playerSelection} beats ${computerSelection}`;
    else if(playerSelection==="scissor" && computerSelection==="rock")
    return `You lose! ${computerSelection} beats ${playerSelection}`;
    else if(playerSelection==="scissor" && computerSelection==="paper")
    return `You win! ${playerSelection} beats ${computerSelection}`;
}
let playerSelection = prompt("What's your weapon?");
playerSelection=playerSelection.toLowerCase();
console.log(`You chose ${playerSelection}`);
let computerSelection=getComputerChoice();
console.log(`Computer chose ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));

