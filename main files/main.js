    function clock(){
    const currentTime = new Date();
    var hours= currentTime.getHours();
    var minutes= currentTime.getMinutes();
    var seconds= currentTime.getSeconds();
    seconds=addZero(seconds);
    minutes=addZero(minutes);
    document.getElementById("time").innerHTML = hours +":"+ minutes +":"+ seconds;
    setTimeout(clock,1000);
    return hours;
}
function addZero(i){
    if(i<10){i="0"+i}
    return i;
}
function dayYear(){
    const currentDate =new Date();
    var month=currentDate.getMonth()+1;
    var day=currentDate.getDate();
    var year=currentDate.getFullYear()-6;
    document.getElementById("date").innerHTML = month+"/"+day+"/"+year;
}