'use strict';

let secretNumber = Math.trunc(Math.random() * 10 + 1);
let triesCount = 3;
let straightWins = 0;
let highscore = 0;

const smallMessage = document.querySelector('.message');
const largeNumber = document.querySelector('.number');
const body = document.querySelector('body');
const largeMessage = document.querySelector('h1');
const tries = document.querySelector('.tries');
const straightWinsMessage = document.querySelector('.straightWins');
const highscoreMessage = document.querySelector('.highscore');
const guessInput = document.querySelector('.guess');
const img = document.querySelector('img');
const buttonClick = document.querySelector('.check');
const buttonAgain = document.querySelector('.again');
const helpText = document.querySelector('.help');

// // TEST ONLY
// largeNumber.textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessInput.value);

  // When there is NO INPUT
  if (!guess) {
    smallMessage.textContent = '⛔️ No number.';

    // When guess is CORRECT!
  } else if (guess === secretNumber) {
    smallMessage.textContent = "🎉 That's Correct!";
    largeMessage.textContent = 'Awesometacular!';
    // body.style.backgroundImage =
    //   "url('https://ewscripps.brightspotcdn.com/dims4/default/4d95054/2147483647/strip/true/crop/800x450+0+0/resize/320x180!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F27%2Fc6%2F60bf3e304ad1a1dde27f82008ea9%2Ffireworks.gif')";
    body.style.backgroundRepeat = 'no-repeat';
    largeNumber.style.width = '30rem';
    largeNumber.style.color = 'green';
    largeNumber.textContent = secretNumber;
    img.src =
      'https://i.pinimg.com/originals/bd/ef/a1/bdefa1f5772f97cf5fea28834c6fa5ed.gif';
    // img.src = "https://i.gifer.com/10j2.gif";
    buttonClick.style.display = 'none';
    buttonAgain.style.display = 'inline-block';
    helpText.textContent = 'Enter = Play again';

    // SCORES
    straightWins++;
    straightWinsMessage.textContent = straightWins;
    if (straightWins > highscore) {
      highscore = straightWins;
      highscoreMessage.textContent = highscore;
    }

    // When guess is WRONG!
  } else if (guess !== secretNumber) {
    if (triesCount > 1) {
      triesCount--;
      tries.textContent = triesCount;
      smallMessage.textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
    } else {
      // You lost
      smallMessage.textContent = '⛔️ This was my number!';
      largeMessage.textContent = 'Very Unfortionate';
      largeNumber.style.width = '30rem';
      largeNumber.style.color = 'red';
      largeNumber.textContent = secretNumber;
      tries.textContent = '0';
      img.src =
        'https://media.tenor.com/NALGaWXDWc8AAAAd/leaving-michael-scott.gif';
      straightWins = 0;
      straightWinsMessage.textContent = straightWins;
      buttonClick.style.display = 'none';
      buttonAgain.style.display = 'inline-block';
      helpText.textContent = 'Enter = Play again';
    }
  }
});

// Play again
document.querySelector('.again').addEventListener('click', function () {
  body.style.backgroundImage =
    "URL('https://upload.wikimedia.org/wikipedia/commons/e/e4/StarfieldSimulation.gif')";
  // body.style.backgroundImage = "URL('https://j.gifs.com/G65MKL.gif')";
  body.style.backgroundRepeat = '';
  img.src =
    'https://media.tenor.com/BpnBCSmkazMAAAAd/superstitious-theoffice.gif';
  secretNumber = Math.trunc(Math.random() * 10 + 1);
  triesCount = 3;
  guessInput.value = '';
  tries.textContent = '3';
  // largeNumber.textContent = secretNumber;
  largeNumber.textContent = '?';
  largeNumber.style.width = '15rem';
  largeNumber.style.color = 'black';
  largeMessage.textContent = 'Guess My Number!';
  smallMessage.textContent = "It's between 1 & 10";
  buttonClick.style.display = 'inline-block';
  buttonAgain.style.display = 'none';
  helpText.textContent = 'Enter = Check answer';
});

// Add event listener for the 'keydown' event on the input element
guessInput.addEventListener('keydown', function (event) {
  // Check if the key pressed is the Enter key
  if (event.keyCode === 13) {
    // Check if the "check" button is visible (game in progress)
    if (buttonClick.style.display !== 'none') {
      // Simulate a click on the 'check' button element
      buttonClick.click();
    } else {
      // Simulate a click on the 'again' button element
      buttonAgain.click();
    }
  }
});
