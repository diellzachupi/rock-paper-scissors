// Set initial scores
let playerScore = 0;
let computerScore = 0;

// Get elements

const playerNumber = document.getElementById("playerNumber");
const computerNumber = document.getElementById("computerNumber");
const outcome = document.getElementById("outcome");


// Random computer play

function computerPlay() {

  let a = ['Rock', 'Paper', 'Scissors']

  return a[Math.floor(Math.random() * a.length)]

}


// word capitalization

function toCapitalize(word) {

  let lower = word.toLowerCase();
  let first = lower.charAt(0).toUpperCase();
  let remaining = lower.slice(1)
  return first + remaining

};

function play(id) {

  playRound(id, computerPlay())

};

// main play

function playRound(playerSelection, computerSelection) {

  let p = toCapitalize(playerSelection)
  let c = toCapitalize(computerSelection)


  if (p === 'Paper' &&
    c === 'Rock') {

    console.log('Point for you! Paper beats Rock.') 
    playerNumber.textContent = playerScore += 1

  } else if (p === 'Rock' &&
    c === 'Scissors') {

    console.log('Point for you! Rock beats Scissors.')
    playerNumber.textContent = playerScore += 1

  } else if (p === 'Scissors' &&
    c === 'Paper') {

      console.log('Point for you! Scissors beats Paper.')
    playerNumber.textContent = playerScore += 1

  } else if (p === c) {

    console.log('Same choice. Try again.')

  } else {

    console.log(`Point for computer! ${c} beats ${p}.`);
    computerNumber.textContent = computerScore += 1
  }
  discloseResult()

}

// Check which player gets 5 points first.

function discloseResult() {

  if (playerScore === 5) {

    alert(' Congratulations! You won the game.')

  } else if (computerScore === 5) {

    alert(' Sorry! The computer won the game.') 

  }
}