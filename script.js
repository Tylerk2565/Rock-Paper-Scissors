const choices = ['rock', 'paper', 'scissors'];
let playerChoice = document.getElementById('choiceInput');
let gameResult = document.getElementById('result');
const playButton = document.getElementById('play');

// Event listener submit choice on click and reset text in input box
playButton.addEventListener('click', function(){
  playGame(playerChoice.value);
  playerChoice.value = '';
})

// Play game function
function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  // Checks to see if the input is empty/null
  if (playerChoice === '') {
    gameResult.innerText = 'Please enter a choice';
    return;
  }
  // Checks to see if the input is valid
  if (!choices.includes(playerChoice.toLowerCase())) {
    gameResult.innerText = 'Please enter a valid choice';
    return;
  }
  if (playerChoice === computerChoice) {
    gameResult.innerText = `It's a Tie Computer chose ${computerChoice}`;
  } else if (
    (playerChoice.toLowerCase() === 'rock' && computerChoice === 'scissors') ||
    (playerChoice.toLowerCase() === 'paper' && computerChoice === 'rock') ||
    (playerChoice.toLowerCase() === 'scissors' && computerChoice === 'paper')) {
    gameResult.innerText = `You win! Computer chose ${computerChoice}.`;
  } else {
    gameResult.innerText = `You lose! Computer chose ${computerChoice}.`;
  }
  // Timer to reset the result text after 3000ms
  setTimeout(() => {
    playerChoice.value = '';
    gameResult.innerText = '';
  }, 3000);
}
