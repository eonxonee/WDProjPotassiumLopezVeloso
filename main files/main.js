    function clock(){
    const currentTime = new Date();
    var hours= currentTime.getHours();
    var minutes= currentTime.getMinutes();
    var seconds= currentTime.getSeconds();
    seconds=addZero(seconds);
    minutes=addZero(minutes);
    document.getElementById("time").innerHTML = hours +":"+ minutes +":"+ seconds;
    setTimeout(clock,1000);

    let day=Number(document.getElementById("day").innerHTML);
    let dayCounter=Number(document.getElementById("dayCounter").innerHTML)
    if(hours==12 && minutes==0 && seconds==0){
        document.getElementById("day").innerHTML= day+1;
        document.getElementById("dayCounter").innerHTML= dayCounter+1;
    }
    
}
function addZero(i){
    if(i<10){i="0"+i}
    return i;
}
let openingScreen=document.getElementById("openingScreen");
let titleScreen=document.getElementById("titleScreen");
let caseFile=document.getElementById("caseFile");

openingScreen.addEventListener("click",start);

function start(){
    openingScreen.classList.add("titleScreenFade");
    titleScreen.classList.add("titleScreenHide");
    caseFile.classList.add("caseFileEnter");

}