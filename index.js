function getComputerChoice() {
    const choice= ["Rock","Paper","Scissor"];
    const index = Math.floor(Math.random() * choice.length);
    return choice[index];
}
console.log (getComputerChoice());


function getHumanChoice() {
   const signButton = document.querySelector("#signButton");
const log = document.querySelector("#log");

signButton.addEventListener("click", () => {
  let sign = prompt("Rock,Paper or Scissor?");

  if (sign === null) {
    log.innerText = "OK, maybe next time.";
  } else if (sign.toLowerCase() === "") {
    log.innerText = "Don't be shy, choose!";
  } else if (sign === "Rock") {
    log.innerText = "You chose Rock";}
    else if (sign === "Paper") {
    log.innerText = "You chose Paper";}
    else if (sign === "Scissor") {
    log.innerText = "You chose Scissor";}
    else {
    log.innerText = `You need to choose Rock,Paper or Scissor!`;}
});}
console.log(getHumanChoice());
let humanScore =0;
let computerScore =0;
