let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result>p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');



function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const randomNumber = Math.floor((Math.random() * 3));
  return choices[randomNumber];
}

function displayResult() {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
}

function convertToOption(inputWord) {
  if (inputWord === 'rock') return 'Rock';
  if (inputWord === 'paper') return 'Paper';
  if (inputWord === 'scissors') return 'Scissors';
}

function userWin(userChoice, computerChoice) {
  userScore++;
  result_p.innerHTML = `${convertToOption(userChoice)} beats ${convertToOption(computerChoice)}, You Won!!!`;
  displayResult();
  const userChoice_div = document.getElementById(userChoice).classList;
  userChoice_div.add('green-glow');
  setTimeout(() => userChoice_div.remove('green-glow'),500)
}

function userLose(userChoice, computerChoice) {
  computerScore++;
  result_p.innerHTML = `${convertToOption(userChoice)} loses ${convertToOption(computerChoice)}, You Lost!!!`;
  displayResult();
  const userChoice_div = document.getElementById(userChoice).classList;
  userChoice_div.add('red-glow');
  setTimeout(() => userChoice_div.remove('red-glow'),500)
}

function userDraw(userChoice, computerChoice) {
  result_p.innerHTML = `${convertToOption(userChoice)} equals ${convertToOption(computerChoice)}, Draw!!!`;
  displayResult();
  const userChoice_div = document.getElementById(userChoice).classList;
  userChoice_div.add('yellow-glow');
  setTimeout(() => userChoice_div.remove('yellow-glow'),500)

}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + "-" + computerChoice) {
    case 'paper-rock':
    case 'scissors-paper':
    case 'rock-scissors':
      userWin(userChoice, computerChoice);
      break;
    case 'paper-scissors':
    case 'scissors-rock':
    case 'rock-paper':
      userLose(userChoice, computerChoice);
      break;
    case 'paper-paper':
    case 'scissors-scissors':
    case 'rock-rock':
      userDraw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click',() => game('rock'))
  paper_div.addEventListener('click', () => game('paper'))
  scissors_div.addEventListener('click', () => game('scissors'))
}

main();
