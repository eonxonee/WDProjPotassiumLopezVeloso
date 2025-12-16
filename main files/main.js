addEventListener("load", clock);
function clock(){
    const currentTime = new Date();
    var hours= currentTime.getHours();
    var minutes= currentTime.getMinutes();
    var seconds= currentTime.getSeconds();
    seconds=addZero(seconds);
    minutes=addZero(minutes);
    document.getElementById("time").innerHTML = hours +":"+ minutes +":"+ seconds;
    setTimeout(clock,1000);

    var newDay=localStorage.getItem("day");
    var newDayCounter=localStorage.getItem("dayCounter");
    var newMonth=localStorage.getItem("month");
    var newYear=localStorage.getItem("year");
    
    if(newDay){document.getElementById("day").innerHTML=newDay;}
    if(newDayCounter){document.getElementById("dayCounter").innerHTML=newDay;}
    if(newMonth){document.getElementById("month").innerHTML=newMonth;}
    if(newYear){document.getElementById("year").innerHTML=newYear;}

    var day=localStorage.getItem("day") || 18;
    var dayCounter=localStorage.getItem("dayCounter") || 1;
    var month=localStorage.getItem("month") || 2;
    var year=localStorage.getItem("year") || 2019;


    if(hours%2==0 && minutes==0 && seconds==0){
        var dayNum=Number(day);
        var dayCounterNum=Number(dayCounter);
        dayNum++
        dayCounterNum++
        document.getElementById("day").innerHTML=dayNum;
        localStorage.setItem("day", dayNum.toString());
        document.getElementById("dayCounter").innerHTML=dayCounterNum;
        localStorage.setItem("dayCounter", dayCounterNum.toString());
    }
    if(dayNum==30){
        dayNum=1;
        document.getElementById("day").innerHTML=dayNum;
        localStorage.setItem("day", dayNum.toString());

        var monthNum=Number(month);
        monthNum++
        document.getElementById("month").innerHTML=monthNum;
        localStorage.setItem("month", monthNum.toString());
    }
    if(monthNum==12){
        monthNum=1;
        var yearNum=Number(year);
        yearNum++
        document.getElementById("year").innerHTML=yearNum;
        localStorage.setItem("year", yearNum.toString());
    }
}
function addZero(i){
    if(i<10){i="0"+i}
    return i;
}
let openingScreen=document.getElementById("openingScreen");
let titleScreen=document.getElementById("titleScreen");
let caseFile=document.getElementById("caseFile");
let clickStart=document.getElementById("clickStart");
let introInstruction=document.getElementById("introInstruction");
let introAudio=document.getElementById("introAudio");
let bgMusic=document.getElementById("bgMusic");
openingScreen.addEventListener("click",start);
    let clickCount=0;
function start(){
    clickCount++
    if(clickCount==1){
        introAudio.play();
        introAudio.volume=0.5;
        introInstruction.classList.add("introInstructionFadein");
    }
    if(clickCount==2){
        openingScreen.classList.add("titleScreenFadein");
        titleScreen.classList.add("titleScreenHide");
        introInstruction.classList.add("introInstructionFadeout");
        caseFile.classList.add("caseFileEnter");
        clickStart.classList.add("clickStartClicked");
    }else if(clickCount==3){
        openingScreen.classList.add("titleScreenFadeout");
        caseFile.classList.add("caseFileExit");
        clickStart.classList.add("clickStartOut");
        bgMusic.play();
        bgMusic.volume=0.2;
    }
}
let soundBtn=document.getElementById("bgMusicControls");
soundBtn.addEventListener("click", bgMusicControls);
function bgMusicControls(){
    if(!bgMusic.paused){
        bgMusic.pause();
        document.getElementById("unmutedIcon").src="../assets/bgMusicMuted.png";
        document.getElementById("bgMusicState").innerHTML="BG Music : OFF";
    }else{
        bgMusic.play();
        document.getElementById("unmutedIcon").src="../assets/bgMusicUnmuted.png";
        document.getElementById("bgMusicState").innerHTML="BG Music : ON";
    }
}
document.querySelectorAll("button")

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

document.getElementById("backButton").addEventListener("click", function() {
  window.history.back();
});