let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random()*10);
};




const compareGuesses = (userGuess, compGuess, targetNum) => {
    const userDist = Math.abs(targetNum - userGuess);
    const compDist = Math.abs(targetNum - compGuess);
    return userDist <= compDist;
};

const updateScore = winner => {
    if (winner === 'human') {
        humanScore ++;
    } else if (winner === 'computer') {
        computerScore++;
    }
};

const advanceRound = () => currentRoundNumber ++;