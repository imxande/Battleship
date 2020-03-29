// Declare three variables to hold the location of each cell of the ship
var locationOne = 3; 
var locationTwo = 4;
var locationThree = 5;

// Variable to hold the value of of user's guess 
var userGuess;

// Variable to hold hits
var hits = 0;

// Variable to hold number of correct guesses
var guesses = 0;

// Variable to check if user sinks the ship or if ship still combat ready
var isSunk = false;

// Variable to hold user's stats
var stats = '';

// While loop
while(isSunk === false){
    // prompt user to enter a number between 0 and 6
    userGuess = prompt('Enter a number from 0 to 6');

    // checking for validation
    if(userGuess < 0 || userGuess > 6 ){
        alert('Please enter a valid number')
    } 
    else {
        // add to guesses
        guesses = guesses + 1;

        if (userGuess == locationOne || userGuess == locationTwo || userGuess == locationThree){
            // add to hits
            hits = hits + 1;

            if (hits == 3){
                isSunk = true;
                alert("You have sunk the ship!");
            } 
        } 
    }
}

// Showing stats
stats += `You took ${guesses} guesses to sink the battleship, wich means your shooting accuracy was ${3/guesses}`;
alert(stats);





