const shifumiArray = ["rock", "paper", "scissors"];

function generateComputerChoice() {
    console.log("function generateComputerChoice")
  let randomItem =
    shifumiArray[Math.floor(Math.random() * shifumiArray.length)];
  return randomItem;
}

function drawOrNot(playerChoice) {
    console.log("function drawOrNot")
    computerChoice = generateComputerChoice(); //I called the gunction generatecomputerchoice
  if (playerChoice === computerChoice) {
    alert("its a draw");
  } else {
    winOrLose(playerChoice, computerChoice); // passing arguments
  }
}

function winOrLose(playerChoiceX, computerChoiceY) {
    console.log("function winOrLose")
//    console.log("computer choice?", computerChoice) // I CAN NOT ACCESS COMPUTER CHOICE BECAUSE IT IS DEFINED INSIDE ANOTHER FUNCTION
  // receiving parameters
  if (
    (playerChoiceX === "scissors" && computerChoiceY === "rock") ||
    (playerChoiceX === "rock" && computerChoiceY === "paper") ||
    (playerChoiceX === "paper" && computerChoiceY === "scissors")
  ) {
    alert("You lose!");
  } else {
    alert("You win!");
  }
}
