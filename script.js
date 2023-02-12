let choices="rock,paper,scissor";
let pl=0,co=0;
let playerSelection,computerSelection,message;
const arr=choices.split(",");
const container = document.querySelector('.game');

    const choice = document.createElement('div');
    choice.style.cssText = 'color: white; font-size: x-large; text-align: center; margin-bottom:1.5em';
    const result = document.createElement('div');
    result.setAttribute('id','result');
    result.style.cssText = 'color: white; font-size: x-large; text-align: center; margin-bottom:1.5em';
    const score = document.createElement('div');
    score.style.cssText = 'color: white; font-size: x-large; text-align: center; margin-bottom:1.5em';
    score.setAttribute('id','choice');
function getComputerChoice()
{
    let ind=Math.floor(Math.random()*3);
    return arr[ind];
}
function getPlayerChoice()
{    
    const weapons = document.querySelectorAll('.weapon');
    weapons.forEach((weapon) => {
        weapon.addEventListener('click', () => {
            if(pl===5||co===5) return;
            playerSelection=weapon.id;
            playRound(playerSelection);
        });    
    });
}

function playRound() 
{   
    computerSelection=getComputerChoice();
    choice.textContent = `Computer chose ${computerSelection}.`;
    container.appendChild(choice);
    
    if(playerSelection===computerSelection)
    {
        result.textContent = "It's a tie 🤝";
    }
    else if(playerSelection==="rock" && computerSelection==="scissor")
    {
        result.textContent = `You win! 😬 ${playerSelection} beats ${computerSelection}.`;
        pl++;
    }
    else if(playerSelection==="rock" && computerSelection==="paper")
    {
        result.textContent = `You lose! 🙁 ${computerSelection} beats ${playerSelection}.`;
        co++;
    }
    else if(playerSelection==="paper" && computerSelection==="scissor")
    {
        result.textContent = `You lose! 😟 ${computerSelection} beats ${playerSelection}.`;
        co++
    }
    else if(playerSelection==="paper" && computerSelection==="rock")
    {
        result.textContent = `You win! 🤠 ${playerSelection} beats ${computerSelection}.`;
        pl++;
    }
    else if(playerSelection==="scissor" && computerSelection==="rock")
    {
        result.textContent = `You lose! 😔 ${computerSelection} beats ${playerSelection}.`;
        co++;
    }
    else if(playerSelection==="scissor" && computerSelection==="paper")
    {
        result.textContent = `You win! 🤩 ${playerSelection} beats ${computerSelection}.`;
        pl++;
    }
    container.appendChild(result);
    score.textContent= `Your Score: ${pl} . Computer's Score: ${co} .`;
    container.appendChild(score);
    if(pl===5||co===5)
    {
        result.textContent = ``;
        choice.style.cssText = 'color: white; font-size: 32px; text-align: center; margin-bottom:1.5em';
        if(pl===5)
        choice.textContent = "You win!!";
        else if(co===5)
        choice.textContent = "Computer wins..";
        container.appendChild(choice);
        container.appendChild(result);
        const playAgain = document.createElement('button');
        playAgain.classList='playAgain';
        playAgain.style.cssText = 'color: black; font-size: x-large; padding:15px; border-radius:8px; text-align: center; margin-bottom:1.5em; margin-left:46%;';
        playAgain.textContent='Play Again';
        container.appendChild(playAgain);
        playAgain.addEventListener('click', ()=> {
            location.reload();
        });
        
        return;
    }
}

getPlayerChoice();
  
    


