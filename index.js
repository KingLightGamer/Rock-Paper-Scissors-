function getComputerChoice() {
    const choice= ["Rock","Paper","Scissor"];
    const index = Math.floor(Math.random() * choice.length);
    return choice[index]
}