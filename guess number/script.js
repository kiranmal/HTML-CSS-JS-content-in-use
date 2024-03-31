let randomNumber = parseInt(Math.random() * 100 + 1);
// const =document.querySelector("#wrapper");
// const =document.querySelector(".form");
const UserInput = document.querySelector("#guessfield");
const submit = document.querySelector("#subt");
// const =document.querySelector(".guessSubmit");
const startOver = document.querySelector(".resultParas");
const guessSlot = document.querySelector(".guess");
const remaning = document.querySelector(".latResult");
const lowOrHi = document.querySelector(".lowOrHi");
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(UserInput.value)
        console.log(guess);
        validateGuess(guess);

    })
}

//we make three function on to store other to check and another to displayMessage
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('please enter a number more than 1');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
        endGame()
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`game Over.Random number was ${randomNumber}`);
            endGame;
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        endGame();
    }
    else if (guess < randomNumber) {
        displayMessage(`Number is too low`);
    }
    else if (guess > randomNumber) {
        displayMessage(`Number is too high`);
    }
}
function displayGuess(guess) {
    UserInput.value = '' //cleaning
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaning.innerHTML = `${11 - numGuess}`
}
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function newGame() {
    UserInput.value=" "
    UserInput.setAttribute('disabled','')//disabled set in key value pair
    p.classList.add('button')
    p.innerHTML=`<h2> id ="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}
function endGame() {

}