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
console.log(getComputerChoice);
function getHumanChoice() {
  let input = prompt("Choose rock, paper, or scissors:");
  return input.toLowerCase(); // case-insensitive
}
console.log(getHumanChoice);

let humanScore = 0;
let computerScore = 0;
