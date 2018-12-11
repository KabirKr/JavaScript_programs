"Use strict";

// Selecting DOM
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#comp-score");
const finalResult = document.querySelector(".final_result");
const result = document.querySelector(".__result");
const resetButton = document.getElementById("reset-btn");
const result_div = document.querySelector(".result");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");

// Initial Scores of player and comp
let player = 0;
let computer = 0;

// add Event in rock-paper-scissor
let startGame = () => {
  rock.addEventListener("click", () => gamePlay("r"));
  paper.addEventListener("click", () => gamePlay("p"));
  scissor.addEventListener("click", () => gamePlay("s"));
};

// Random Choices by comp
let getCompChoice = () => {
  const choices = ["r", "p", "s"];
  const randomChoices = Math.floor(Math.random() * 3);
  return choices[randomChoices];
};

// convert comp choices to word
let convertToWord = letter => {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissor";
};

// Action When a player win
let win = (playerInput, compInput) => {
  player++;
  const choice_div = document.getElementById(playerInput);
  playerScore.innerHTML = player;
  computerScore.innerHTML = computer;
  result.innerHTML = convertToWord(compInput);
  finalResult.innerHTML = "You Win";
  choice_div.classList.add("choice_div_green");
  setTimeout(() => choice_div.classList.remove("choice_div_green"), 400);
  result_div.style.visibility = "visible";
  finalResult.style.color = "#31b43a";
};

// Action When a player lost
let loose = (playerInput, compInput) => {
  computer++;
  const choice_div = document.getElementById(playerInput);
  computerScore.innerHTML = computer;
  computerScore.innerHTML = computer;
  result.innerHTML = convertToWord(compInput);
  finalResult.innerHTML = "You lost!";
  choice_div.classList.add("choice_div_red");
  setTimeout(() => choice_div.classList.remove("choice_div_red"), 400);
  result_div.style.visibility = "visible";
  finalResult.style.color = "#d01115";
};

// Action When a player draw
let draw = (playerInput, compInput) => {
  const choice_div = document.getElementById(playerInput);
  playerScore.innerHTML = player;
  computerScore.innerHTML = computer;
  result.innerHTML = convertToWord(compInput);
  finalResult.innerHTML = "It's a Draw";
  choice_div.classList.add("choice_div_yellow");
  setTimeout(() => choice_div.classList.remove("choice_div_yellow"), 400);
  result_div.style.visibility = "visible";
  finalResult.style.color = "orange";
};

// Game logic

let gamePlay = playerChoice => {
  const compChoice = getCompChoice();
  switch (playerChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(playerChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      loose(playerChoice, compChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(playerChoice, compChoice);
      break;
  }
};

// Reset game
resetButton.addEventListener("click", () => {
  player = 0;
  computer = 0;
  playerScore.innerHTML = player;
  computerScore.innerHTML = computer;
  result_div.style.visibility = "hidden";
});

startGame(); // Calling function to start the game

//  15/11/2018 By Kabir
