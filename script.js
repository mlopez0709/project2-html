var wins = 0;
var ties = 0;
var losses = 0;

function computerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
function determineWinner(userChoice, compChoice) {
    if (userChoice === compChoice) {
        ties++;
        return 'Tie';
    } else if (
        (userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissors' && compChoice === 'paper')
    ) {
        wins++;
        return 'Win';
    } else {
        losses++;
        return 'Loss';
    }
}
function updateScreen(userChoice, compChoice, result) {
    document.getElementById('result').innerHTML = `You chose ${userChoice}. The computer chose ${compChoice}. Result: ${result}.`;
    document.getElementById('wins').textContent = wins;
    document.getElementById('ties').textContent = ties;
    document.getElementById('losses').textContent = losses;
}

document.getElementById('rock').addEventListener('click', function() {
    const compChoice = computerChoice();
    const result = determineWinner('rock', compChoice);
    updateScreen('rock', compChoice, result);
});

document.getElementById('paper').addEventListener('click', function() {
    const compChoice = computerChoice();
    const result = determineWinner('paper', compChoice);
    updateScreen('paper', compChoice, result);
});

document.getElementById('scissors').addEventListener('click', function() {
    const compChoice = computerChoice();
    const result = determineWinner('scissors', compChoice);
    updateScreen('scissors', compChoice, result);
});