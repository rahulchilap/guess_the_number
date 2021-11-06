"use strict";

let secret_number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "Please start guessing";
  }
  //If the player guessed the correct number
  else if (guess === secret_number) {
    document.querySelector(".message").textContent = "Congrats";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secret_number;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  //guess is too high
  else if (guess > secret_number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Guess is too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }

  //guess is too low
  else if (guess < secret_number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Guess is too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secret_number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
