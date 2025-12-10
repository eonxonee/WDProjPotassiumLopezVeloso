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