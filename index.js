// Step 2: Get the computer's choice
function getComputerChoice() {
  const randomNum = Math.random();
  if (randomNum < 1/3) {
    return "rock";
  } else if (randomNum < 2/3) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Step 3: Get the human player's choice
function getHumanChoice() {
  const userInput = prompt("Enter your choice (rock, paper, or scissors):");
  return userInput.toLowerCase(); // Make it case-insensitive
}

// Step 6: Play the full game
function playGame() {
  // Step 4: Declare score variables
  let humanScore = 0;
  let computerScore = 0;

  // Step 5: Play a single round
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${humanChoice}.`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  // Play 5 rounds
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Score after round ${i + 1}: Human ${humanScore} - Computer ${computerScore}`);
  }

  // Declare the final winner
  if (humanScore > computerScore) {
    console.log("You win the game!");
  } else if (humanScore < computerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("The game is a tie!");
  }
}

// Run the game
playGame();
