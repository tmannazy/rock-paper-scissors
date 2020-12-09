let count = 0,
    playerCount = 0,
    computerCount = 0,
    playerDiv = document.createElement('div'),
    computerDiv = document.createElement('div'),
    scoreBoard = document.createElement('div'),
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
    // do {
    function playRound(playerSelection, computerSelection) {
        computerSelection = computerPlay();

        if (playerSelection.target === rock) {
            computerDiv.innerHTML = `Computer selected ${computerSelection}`;
            document.body.appendChild(computerDiv);
            if (computerSelection === 'Rock') {
                computerCount;
                playerCount;
                scoreBoard.innerHTML = `You choices were the same.
                Player: ${playerCount},
                Computer: ${computerCount}`;
                document.body.appendChild(scoreBoard);
            } else if (computerSelection === 'Paper') {
                computerCount++;
                scoreBoard.innerHTML = `Computer wins.
                Computer: ${computerCount}
                Player: ${playerCount}`;
                document.body.appendChild(scoreBoard);
            } else if (computerSelection === 'Scissors') {
                playerCount++;
                scoreBoard.innerHTML = `Player wins.
                Player: ${playerCount}
                Computer: ${computerCount}`;
                document.body.appendChild(scoreBoard);
            }
        }
        else if (playerSelection.target === paper) {
            computerDiv.innerHTML = `Computer selected ${computerSelection}`;
            document.body.appendChild(computerDiv);
            if (computerSelection === 'Paper') {
                computerCount;
                playerCount;
                scoreBoard.innerHTML = `You choices were the same.
                Player: ${playerCount},
                Computer: ${computerCount}`;
                document.body.appendChild(scoreBoard);
            } else if (computerSelection === 'Rock') {
                playerCount++;
                scoreBoard.innerHTML = `Player wins.
                Player: ${playerCount};
                Computer: ${computerCount}`;
                document.body.appendChild(scoreBoard);
            } else if (computerSelection === 'Scissors') {
                computerCount++;
                scoreBoard.innerHTML = `Computer wins.
                Computer: ${computerCount}
                Player: ${playerCount}`;
                document.body.appendChild(scoreBoard);
            }
        } else if (playerSelection.target === scissors) {
            computerDiv.innerHTML = `Computer selected ${computerSelection}`;
            document.body.appendChild(computerDiv);
            if (computerSelection === 'Scissors') {
                computerCount;
                playerCount;
                scoreBoard.innerHTML = `You choices were the same.
                Player: ${playerCount},
                Computer: ${computerCount}`;
                document.body.appendChild(scoreBoard);
            } else if (computerSelection === 'Paper') {
                playerCount++;
                scoreBoard.innerHTML = `Player wins.
                Player: ${playerCount}
                Computer: ${computerCount}`;
                document.body.appendChild(scoreBoard);
            } else if (computerSelection === 'Rock') {
                computerCount++;
                scoreBoard.innerHTML = `Computer wins.
                Computer: ${computerCount}
                Player: ${playerCount}`;
                document.body.appendChild(scoreBoard);
            }
        }
        // }

    }
    // count++;
if (playerCount === 5 || computerCount === 5) {

    }
    const rock = document.querySelector('.rock');
    const paper = document.querySelector('.paper');
    const scissors = document.querySelector('.scissors');



rock.addEventListener('click', (e) => {
    playRound(e)
});
paper.addEventListener('click', (e) => {
    playRound(e)
});
scissors.addEventListener('click', (e) => {
    playRound(e)
});
