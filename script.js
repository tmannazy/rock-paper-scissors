// playRound:
//   player submits choice
//   computer randomly chooses
//   comparison happens
//   score is updated
//   round number is updated
//   HTML is updated, displaying win/draw
//   **Before the round ends, check if the game is over...

let playerCount = 0,
    computerCount = 0,
    drawCount = 1,
    playerDiv = document.createElement('div'),
    computerDiv = document.createElement('div'),
    drawDiv = document.createElement('div'),
    scoreBoard = document.createElement('div'),
    finalScore = document.createElement('div'),
    computerSelection = computerPlay();


function computerPlay() {
    let generateNumber = Math.floor(Math.random() * 3);
    if (generateNumber === 0)
        return `Rock`;
    else if (generateNumber === 1)
        return `Paper`;
    else
        return `Scissors`;
}

function playRound(playerSelection, computerSelection) {
    if (!(playerCount == 5 || computerCount == 5)) {
        computerSelection = computerPlay();
        if (playerSelection.target == rock && computerSelection == 'Rock' || playerSelection.target == scissors && computerSelection == 'Scissors' || playerSelection.target == paper && computerSelection == 'Paper') {
            scoreBoard.innerHTML = `Draw game`;
            drawDiv.innerHTML = ` Draw: ${drawCount++}`;
            document.body.appendChild(scoreBoard);
            document.body.appendChild(drawDiv);
        } else if (playerSelection.target == rock && computerSelection == 'Scissors' || playerSelection.target == paper && computerSelection == 'Rock' || playerSelection.target == scissors && computerSelection == 'Paper') {
            playerCount++;
            scoreBoard.innerHTML = `Player wins
            Player: ${playerCount}
            Computer: ${computerCount}`;
            document.body.appendChild(scoreBoard);
        } else {
            computerCount++;
            scoreBoard.innerHTML = `Computer wins
            Player: ${playerCount}
            Computer: ${computerCount}`
            document.body.appendChild(scoreBoard);
        }
    }

    if (playerCount == 5) {
        finalScore.innerHTML = `Player wins the game with the score of: ${playerCount} points`;
        document.body.appendChild(finalScore);
    } else  if (computerCount == 5) {
        finalScore.innerHTML = `Computer wins the game with the final score of ${computerCount} points`;
        document.body.appendChild(finalScore);
    }
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');


rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);





