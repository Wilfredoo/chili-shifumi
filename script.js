// We get the player scoreboard and set it to 0 to start the game
let playerScore = document.getElementById('playerScore');

// We get the computer scoreboard and set it to 0 to start the game
let computerScore = document.getElementById('computerScore');

function computerChoiceGenerator() {
    // An array containing all of the possible game options
    const gameOptions = ['rock', 'paper', 'scissors']

    // Generates a random number either being 0,1,2
    let randomNumberGenerator = Math.floor(Math.random() * 3)

    // The randomNumberGenerator variable is used to access a random value
    // from the game options array
    const randomComputerChoice = gameOptions[randomNumberGenerator]

    return randomComputerChoice;
}


function handleRoundPoints(computerChoice, losingOption) {
    if (computerChoice === losingOption) {
        alert('Player Wins')
        playerScore.textContent++;
    } else {
        alert('Computer Wins')
        computerScore.textContent++;
    }
}


// this function is used to handle the players decision
function handlePlayerChoice(event) {
    // the event comes from the game button click
    // this then takes the id value from each button
    let playerChoice = event.currentTarget.id;

    // the computer choice has a called computerChoiceGenerator 
    // which returns randomly either rock, paper or scissors
    let computerChoice = computerChoiceGenerator()



    // If the playerChoice is the same as the computerChoice it is a draw
    if (playerChoice === computerChoice) {
        alert('It is a draw')
    } else {

        // We then check the playerChoice, then calling handleRoundPoints
        // passing the computerChoice with the option it can lose to
        if (playerChoice === 'rock') handleRoundPoints(computerChoice, 'scissors')
        if (playerChoice === 'paper') handleRoundPoints(computerChoice, 'rock')
        if (playerChoice === 'scissors') handleRoundPoints(computerChoice, 'paper')
    }

}


// get all of the game buttons into an array
const gameButtons = document.getElementsByClassName('gameButton');

// loop through all of the buttons and add an event listener to each button
// this is used to handle the players choice
for (let i = 0; i < gameButtons.length; i++) {
    gameButtons[i].addEventListener('click', handlePlayerChoice)
}