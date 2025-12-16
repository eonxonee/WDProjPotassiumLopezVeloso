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

// Guess Number Game

(function() {
    const secret = 19;
    const maxAttempts = 10;
    let attemptsLeft = maxAttempts;

    const display = document.getElementById("wordDisplay");
    const input = document.getElementById("guessInput");
    const btn = document.getElementById("guessButton");
    const message = document.getElementById("message");
    const attemptsDisplay = document.getElementById("attemptsDisplay");

    function showPrompt() {
        display.textContent = "Guess a number between 1 and 100";
        attemptsDisplay.textContent = `Attempts left: ${attemptsLeft} / ${maxAttempts}`;
    }

    function finish(text) {
        message.textContent = text;
        input.disabled = true;
        btn.disabled = true;
    }

    function makeGuess() {
        const raw = input.value.trim();
        if (raw === "") {
            message.textContent = "Please enter a number.";
            return;
        }

        const val = Number(raw);
        if (!Number.isInteger(val)) {
            message.textContent = "Enter an integer from 1 to 100.";
            input.value = "";
            input.focus();
            return;
        }

        if (val < 1 || val > 100) {
            message.textContent = "Enter a number between 1 and 100.";
            input.value = "";
            input.focus();
            return;
        }

        if (val === secret) {
            finish(`Congratulations! You guessed the number ${secret}! Did you know?`);
            return;
        }

        attemptsLeft--;
        message.textContent = val < secret ? "Too low — guess higher!" : "Too high — guess lower!";
        attemptsDisplay.textContent = `Attempts left: ${attemptsLeft} / ${maxAttempts}`;

        if (attemptsLeft <= 0) {
            finish(`Game over! The number was ${secret}.`);
            return;
        }

        input.value = "";
        input.focus();
    }

    btn.addEventListener("click", makeGuess);
    input.addEventListener("keyup", function (e) {
        if (e.key === "Enter") makeGuess();
    });

    showPrompt();
    input.focus();
})();

document.getElementById("backButton").addEventListener("click", function() {
    window.history.back();
});