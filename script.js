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
    playerDiv = document.createElement('div'),
    computerDiv = document.createElement('div'),
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
        if (playerSelection.target === rock) {
            computerDiv.innerHTML = `Computer selected ${computerSelection}`;
            document.body.appendChild(computerDiv);
            if (computerSelection === 'Rock') {
                scoreBoard.innerHTML = `You choices were the same.
                Player: ${playerCount},
                Computer: ${computerCount}`;
                document.body.appendChild(scoreBoard);
            } else if (computerSelection === 'Paper') {
                computerCount++;
                scoreBoard.innerHTML = `Computer wins.
                Computer: ${computerCount},
                Player: ${playerCount}`;
                document.body.appendChild(scoreBoard);
            } else if (computerSelection === 'Scissors') {
                playerCount++;
                scoreBoard.innerHTML = `Player wins.
                Player: ${playerCount},
                Computer: ${computerCount}`;
                document.body.appendChild(scoreBoard);
            }
        }
        else if (playerSelection.target === paper) {
            computerDiv.innerHTML = `Computer selected ${computerSelection}`;
            document.body.appendChild(computerDiv);
            if (computerSelection === 'Paper') {
                scoreBoard.innerHTML = `You choices were the same.
                Player: ${playerCount},
                Computer: ${computerCount}`;
                document.body.appendChild(scoreBoard);
            } else if (computerSelection === 'Rock') {
                playerCount++;
                scoreBoard.innerHTML = `Player wins.
                Player: ${playerCount},
                Computer: ${computerCount}`;
                document.body.appendChild(scoreBoard);
            } else if (computerSelection === 'Scissors') {
                computerCount++;
                scoreBoard.innerHTML = `Computer wins.
                Computer: ${computerCount},
                Player: ${playerCount}`;
                document.body.appendChild(scoreBoard);
            }

        } else if (playerSelection.target === scissors) {
            computerDiv.innerHTML = `Computer selected ${computerSelection}`;
            document.body.appendChild(computerDiv);
            if (computerSelection === 'Scissors') {
                scoreBoard.innerHTML = `You choices were the same.
                Player: ${playerCount},
                Computer: ${computerCount}`;
                document.body.appendChild(scoreBoard);
            } else if (computerSelection === 'Paper') {
                playerCount++;
                scoreBoard.innerHTML = `Player wins.
                Player: ${playerCount},
                Computer: ${computerCount}`;
                document.body.appendChild(scoreBoard);
            } else if (computerSelection === 'Rock') {
                computerCount++;
                scoreBoard.innerHTML = `Computer wins.
                Computer: ${computerCount},
                Player: ${playerCount}`;
                document.body.appendChild(scoreBoard);
            }
        }
    }
    if (playerCount == 5) {
        finalScore.innerHTML = `Player wins the game with the score of: ${playerCount}`;
        document.body.appendChild(finalScore);
    } else  if (computerCount == 5) {
        finalScore.innerHTML = `Computer wins the game with the final score of ${computerCount}`;
        document.body.appendChild(finalScore);
    }
}

const rock = document.querySelector('.rock');

const paper = document.querySelector('.paper');

const scissors = document.querySelector('.scissors');


rock.addEventListener('click', playRound);

paper.addEventListener('click', playRound);

scissors.addEventListener('click', playRound);





