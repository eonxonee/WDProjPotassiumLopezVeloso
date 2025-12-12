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
    if(hours==14 && minutes==26 && seconds==30){
        document.getElementById("day").innerHTML= day+1;
        document.getElementById("dayCounter").innerHTML= dayCounter+1;
    }
    
}
function addZero(i){
    if(i<10){i="0"+i}
    return i;
}
