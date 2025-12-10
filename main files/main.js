    function clock(){
    const currentTime = new Date();
    var hours= currentTime.getHours();
    var minutes= currentTime.getMinutes();
    var seconds= currentTime.getSeconds();
    seconds=addZero(seconds);
    minutes=addZero(minutes);
    document.getElementById("time").innerHTML = hours +":"+ minutes +":"+ seconds;
    setTimeout(clock,1000);
}
function addZero(i){
    if(i<10){i="0"+i}
    return i;
}
function day(){
    document.getElementById("day").innerHTML= "1";
    document.getElementById("date").innerHTML= "18";
}

const notes_open=document.getElementById("openNotes");
const notes_modal=document.getElementById("notes");

notes_open.addEventListener("click",open);
function open(){
    notes_modal.classList.add("open");
}

var secretWord = ["k", "a", "l", "l", "e", "r", "g", "i", "s"];
var guessedWord = [];
var attemptsLeft = 5;

for (var i = 0; i < secretWord.length; i++) {
    guessedWord.push("_");
}

function showWord() {
    document.getElementById("wordDisplay").textContent = guessedWord.join(" ");
}

showWord();

function makeGuess() {
    var input = document.getElementById("guessInput");
    var guess = input.value.toLowerCase();
    var correct = false;
    var alreadyGuessed = false;

    if (guess.length !== 1 || guess < "a" || guess > "z") {
        document.getElementById("message").textContent = "Please enter a single letter.";
        input.value = "";
        return;
    }

    for (var i = 0; i < secretWord.length; i++) {
        if (guessedWord[i] === guess) {
            alreadyGuessed = true;
            break;
        }
    }

    if (alreadyGuessed) {
        document.getElementById("message").textContent = "You already revealed this letter!";
        input.value = "";
        return;
    }

    for (var i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === guess && guessedWord[i] === "_") {
            guessedWord[i] = guess;
            correct = true;
        }
    }

    if (!correct) {
        attemptsLeft--;
        document.getElementById("message").textContent = "Incorrect! Attempts left: " + attemptsLeft;
    } else {
        document.getElementById("message").textContent = "Correct guess!";
    }

    showWord();

    if (attemptsLeft <= 0) {
        document.getElementById("message").textContent = "Game over! You've run out of attempts.";
        input.disabled = true;
        document.getElementById("guessBtn").disabled = true;
    }

    if (guessedWord.indexOf("_") === -1) {
        document.getElementById("message").textContent = "Congratulations! You've guessed the word!";
        input.disabled = true;
        document.getElementById("guessBtn").disabled = true;
    }

    input.value = "";
    input.focus();
}


