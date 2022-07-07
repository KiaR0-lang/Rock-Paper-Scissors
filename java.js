// computer play
function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return 'rock';
    } else if (randomNum === 1) {
        return 'paper';
    } else if (randomNum === 2) {
        return 'scissors';
    }
}

let pScore = 0;
let cScore = 0;
function playRound(pSelection, cSelection) {
    if ((pSelection === 'rock') && (cSelection === 'scissors')) {
        pScore++;
        return `You won ${pSelection} beats ${cSelection}`;
    } else if ((pSelection === 'paper') && (cSelection === 'rock')) {
        pScore++;
        return `You won ${pSelection} beats ${cSelection}`;
    } else if ((pSelection === 'scissors') && (cSelection === 'paper')) {
        pScore++;
        return `You won ${pSelection} beats ${cSelection}`;
    } else if (pSelection === cSelection) {
        return `It's a tie!`;
    } else {
        cScore++;
        return `Computer won ${cSelection} beats ${pSelection}`;
    }
} 

function game(input) {
    if ((input !== 'rock') && (input !== 'paper') && (input !== 'scissors')) {
        alert('you can only pick rock, paper or scissors');
    } else {
        return playRound(input, computerPlay());
    }
}

for (let i = 1; i <= 5; i++) {
    let result = prompt(`Round: ${i} Type rock, paper or scissors `);
    result = result.toLowerCase();
    console.log(game(result));
    console.log(`Player Score: ${pScore} Computer Score: ${cScore}` );
}

if (pScore > cScore) {
    console.log('You won');
} else if (cScore > pScore) {
    console.log(`Computer won`);
} else if (pScore === cScore) {
    console.log(`It's a draw!`);
}
    
