function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber < 1 / 3) {
    return "rock";
  } else if (randomNumber < 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}
console.log(getComputerChoice());
function getHumanChoice() {
  let input = prompt("Choose rock, paper, or scissors:");
  return input.toLowerCase(); // case-insensitive
 
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
   
     
const log = document.querySelector("#log");
const log2 = document.querySelector("#log2");
const log3 = document.querySelector("#log3");
  if (humanChoice === computerChoice) {
    console.log("Tie!");
    log.innerText="Tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You won! ${humanChoice} beat ${computerChoice}`);
    humanScore++;
    log2.innerText=`You won! ${humanChoice} beat ${computerChoice}`;
  } else {
    console.log(`You lose! ${computerChoice} beat ${humanChoice}`);
    computerScore++;
    log2.innerText=`You lose! ${computerChoice} beat ${humanChoice}`;
  }

  console.log(`Score - Player: ${humanScore}, Computer: ${computerScore}`);
  log3.innerText=`Score - Player: ${humanScore}, Computer: ${computerScore}`;
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);