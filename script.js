let choices="rock,paper,scissor";
let pl=0,co=0;
let playerSelection,computerSelection,message;
const arr=choices.split(",");
function getComputerChoice()
{
    let ind=Math.floor(Math.random()*3);
    return arr[ind];
}
function playRound(playerSelection, computerSelection) 
{
    playerSelection = prompt("What's your weapon?");
    playerSelection=playerSelection.toLowerCase();
    console.log(`You chose ${playerSelection}`);
    computerSelection=getComputerChoice();
    console.log(`Computer chose ${computerSelection}`);
    if(playerSelection===computerSelection)
    {
        console.log("It's a tie :)");
        return "tie";
    }
    else if(playerSelection==="rock" && computerSelection==="scissor")
    {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return "win";
    }
    else if(playerSelection==="rock" && computerSelection==="paper")
    {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return "lose";
    }
    else if(playerSelection==="paper" && computerSelection==="scissor")
    {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return "lose";
    }
    else if(playerSelection==="paper" && computerSelection==="rock")
    {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return "win";
    }
    else if(playerSelection==="scissor" && computerSelection==="rock")
    {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return "lose";
    }
    else if(playerSelection==="scissor" && computerSelection==="paper")
    {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return "win";
    }
}
function game()
{
    for(let i=0;i<5;i++)
    {
        message=playRound(playerSelection, computerSelection);
        if(message==="win")
        pl++;
        else if(message==="lose")
        co++;
        console.log(`Your score:${pl}\t Computer's score:${co}`);
    }
    if(pl>co)
    console.log("Congrats! You've won the match!");
    else if(pl<co)
    console.log("Computer won this match.")
    else
    console.log("It's a tie! :)");
}
game();

