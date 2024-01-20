/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const initGame = () => {};

  let playGame = confirm("Shall we play rock, paper, or scissors?");
  if (playGame) {
    // play
    while (playGame) {
      const playerChoice = prompt("Please enter rock, paper or scissors.");
      if (playerChoice || playerChoice == "") {
        const playerOne = playerChoice.trim().toLowerCase();
        if (
          playerOne === "rock" ||
          playerOne === "paper" ||
          playerOne === "scissors"
        ) {
          const computerChoice = Math.floor(Math.random() * 3);
          const rpsArray = ["rock", "paper", "scissors"];
          const computer = rpsArray[computerChoice];

          const result =
            playerOne === computer
              ? "Tie game!"
              : playerOne === "rock" && computer === "paper"
              ? `playerOne: ${playerOne}\nComputer: ${computer}\n Computer wins!`
              : playerOne === "paper" && computer === "scissors"
              ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
              : playerOne === "scissors" && computer === "rock"
              ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
              : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
          alert(result);
          playGame = confirm("Play again?");
          if (!playGame) alert("Ok, thanks for playing");
          continue;
        } else {
          alert("you didnt enter rock, paper or scissors.");
          continue;
        }
      } else {
        alert("I guess you changed your mind. Mabye next time.");
      }
    }
  } else {
    alert("Ok, mabye next time.");
  }
};
