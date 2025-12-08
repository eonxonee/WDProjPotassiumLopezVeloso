function clock(){
    const currentTime = new Date();
    var hours= currentTime.getHours();
    var minutes= currentTime.getMinutes();
    var seconds= currentTime.getSeconds();
    seconds=addZero(seconds);
    minute=addZero(minutes);
    document.getElementById("time").innerHTML = hours +":"+ minutes +":"+ seconds;
    setTimeout(clock,1000);
}
function addZero(i){
    if(i<10){i="0"+i}
    return i;
}