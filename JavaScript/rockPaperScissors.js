// 1. Get the user's choice
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
        userInput === "rock" ||
        userInput === "paper" ||
        userInput === "scissors" || 
        userInput === "bomb"
    ) {
        return userInput;
    } else {
        return "Error";
    }
};

// 2. Get the comuputer's choice
let getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3); // Genererate random num from 0-2
    switch (randomNum) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        default:
            return 'scissors';
        }
};

// 3. Comapare the two choices and display the results
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "Tie!";
    }
    if (userChoice === "bomb") {
        return "User wins!";
    }
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
        return "Computer wins!";
        } else {
        return "User wins!";
        }
    } if (userChoice === "paper") {
        if (computerChoice === "scissors") {
        return "The computer won!";
        } else {
        return "User won!";
        }
    } if (userChoice === "scissors") {
        if (computerChoice === "rock") {
        return "The computer won!";
        } else {
        return "User won!";
        }
    }
};
  // Play function
function playGame(userInput) {
    let userChoice = getUserChoice(userInput); // Call getUserChoice and assign it to userChoice
    let computerChoice = getComputerChoice(); // Call getComputerChoice and assign it to computerChoice
    
    // Show results.
    console.log(`User chosed ${userChoice}.`);
    console.log(`Computer chosed ${computerChoice}.`);
    console.log(determineWinner(userChoice, computerChoice));
}
// Play the game
playGame("bomb");