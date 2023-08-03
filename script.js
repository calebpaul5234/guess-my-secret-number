"use strict";

let secretNumber = Math.trunc(Math.random() * 10 + 1);
let totalTries = 3;
let totalTrophies = 0;

const body = document.querySelector("body");
const header = document.querySelector("h1");
const smallMessage = document.querySelector(".small-message");
const theNumber = document.querySelector(".number");
const guessInput = document.querySelector(".guess");
const modal = document.querySelector(".modal");
const modalHeader = document.querySelector(".modal-header");
const modalText = document.querySelector(".modal-text");
const trophiesDisplay = document.querySelector(".trophies");
const btn = document.querySelector(".btn");
const overlay = document.querySelector(".overlay");

function playGame() {
  const guess = Number(guessInput.value);

  // NO INPUT!
  if (!guess) {
    smallMessage.textContent = "⛔️ No number.";

    // TRY AGAIN!
  } else if (guess !== secretNumber) {
    if (totalTries > 1) {
      totalTries--;
      smallMessage.textContent =
        guess > secretNumber
          ? `📈 Too high. Tries left: ${totalTries}`
          : `📉 Too low. Tries left: ${totalTries}`;
    } else {
      // WRONG! YOU LOSE!
      smallMessage.textContent =
        "⛔️ This was my number. Press 'R' to play again!";
      header.textContent = "DISGRACEFUL";
      theNumber.style.color = "red";
      theNumber.textContent = secretNumber;
      totalTrophies = 0;
      trophiesDisplay.textContent = null;
      guessInput.removeEventListener("keydown", handleEnterKey);
    }
    // CORRECT! YOU WIN!
  } else if (guess === secretNumber) {
    smallMessage.textContent = "🎉 That's Correct! Press 'R' to play again!";
    header.textContent = "CONGRATULATIONS!";
    theNumber.style.color = "green";
    theNumber.textContent = secretNumber;
    totalTrophies++;
    trophiesDisplay.textContent = "🏆".repeat(totalTrophies);
    guessInput.removeEventListener("keydown", handleEnterKey);
  }
}

// AGAIN!
function resetGame() {
  secretNumber = Math.trunc(Math.random() * 10 + 1);
  totalTries = 3;
  guessInput.value = "";
  theNumber.textContent = "?";
  theNumber.style.color = "black";
  header.textContent = "GUESS MY SECRET NUMBER";
  smallMessage.textContent = "You have 3 tries. Choose wisely...";
  guessInput.addEventListener("keydown", handleEnterKey);
}

// CONTROLS
function handleEnterKey(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    playGame();
  }
}

guessInput.addEventListener("keydown", handleEnterKey);

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    guessInput.autofocus = true;
    guessInput.focus();
  } else if (event.key === "r") {
    resetGame();
  }
});

btn.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  guessInput.autofocus = true;
  guessInput.focus();
});
