const options = ["rock", "paper", "scissors"]

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)]
    return choice
}
    
function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")){     
        return "Player"
            
        }
        else{
            return "Computer"
        }
}


let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection)
    if(result == "Tie"){
        return "It's a Tie"
    }
    else if(result == "Player"){
        playerScore++
        
    }
    else{
        computerScore++
        
    }


    
} 



function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase()
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}


const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const resultDiv = document.querySelector('.resultDiv');


rockButton.addEventListener('click', () =>{
    const computerSelection = getComputerChoice()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
    resultDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    const gameResult = getWinner(playerScore, computerScore);
    if (gameResult) {
       
        resultDiv.textContent = gameResult;
}})

paperButton.addEventListener('click', () =>{
    const computerSelection = getComputerChoice()
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
    resultDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    const gameResult = getWinner(playerScore, computerScore);
    if (gameResult) {
        
        resultDiv.textContent = gameResult;
}})

scissorsButton.addEventListener('click', () =>{
    const computerSelection = getComputerChoice()
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
    resultDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    const gameResult = getWinner(playerScore, computerScore);
    if (gameResult) {
        
        resultDiv.textContent = gameResult;
}})

function restetGame (){
    if (playerScore === 5 || computerScore === 5) 
    playerScore = 0;
    computerScore = 0;
    }


function getWinner(playerScore, computerScore){
    if(playerScore === 5)
        {
            restetGame();
            return "You win!"
           
            
            
        }
        else if(computerScore === 5){ 
            restetGame();
            return "You lose! :("
        }
        return null;

        

        
    }
    