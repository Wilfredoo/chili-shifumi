// We get the player scoreboard and set it to 0 to start the game
let playerScore = document.getElementById('playerScore');

// We get the computer scoreboard and set it to 0 to start the game
let computerScore = document.getElementById('computerScore');

function handleRoundPoints(computerChoice, losingOption) {
    if (computerChoice === losingOption) {
        alert('Player Wins')
        playerScore.textContent++;
    } else {
        alert('Computer Wins')
        computerScore.textContent++;
    }
}

function handlePlayerChoice(event) {
    // This is used to create either 0,1,2 and this number is used to access the 
    // gameButtons array 
    let randomNumberGenerator = Math.floor(Math.random() * 3)

    let playerChoice = event.currentTarget.id;
    let computerChoice = gameButtons[randomNumberGenerator].id

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

