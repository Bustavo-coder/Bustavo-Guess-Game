"use strict"

const btn = document.querySelector(".btn2")
let secretNumber = Math.trunc(Math.random() * 20 + 1)
const refresh = document.querySelector(".btn-1")
const displayMessage = function (message) {
  document.querySelector(".result").textContent = message
}
const color = function (color) {
  document.querySelector(".header").style.backgroundColor = color
}

let score = 20
let highscore = 0

 const Manipuhighscore = document.querySelector(".Highscore").textContent = highscore

btn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".GUESS").value);
  // when there is no input value
  if (!guess) {
    displayMessage("No Number")

  }
  // When Guess == correct number
  else if (guess === secretNumber) {
    displayMessage("Correct Number")
    color("#32cd32");

    document.querySelector(".display").style.width = "50%"

    document.querySelector(".pae").textContent = secretNumber;

    if (score > highscore) {
      highscore = score
      document.querySelector(".Highscore").textContent = highscore
    }
    
    // When Guess Is Not Equal To Number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage( guess > secretNumber ? "Too High" : "Too Low")
       score--;
      document.querySelector(".score").textContent = score;
      color("#ff0000");
    } else {
      displayMessage("You Lost The Game")
      document.querySelector(".score").textContent = 0;
      color("#ff0000");
    }
  }
})

// Refreh Page


refresh.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".pae").textContent = "?"
   console.log(document.querySelector(".score").textContent = score)
  document.querySelector(".GUESS").value = ""
  color("#000000");
  displayMessage("Start Guessing")
  document.querySelector(".display").style.width = "20%" 
})


