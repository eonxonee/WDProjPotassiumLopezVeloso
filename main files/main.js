let notes=[];
let uniqueTitle=[];
let previewNotes=document.getElementById('previewNotes');
//onload
function loaded(){
    renderNotes();
    clock();
    adjust();
}
//opening screen
let blackScreen=document.getElementById('blackscreen');
let instruction=document.getElementById('instruction');
let caseFile=document.getElementById('caseFile');
let title=document.getElementById('title');
let next=document.getElementById('continue');
let caseSlide=document.getElementById('caseSlide');
let laptop=document.getElementById('laptop');
let air=document.getElementById('air');
let enter=document.getElementById('enter');

blackScreen.addEventListener("click",start);
    let clickCount=0;
function start(){
    clickCount++
    console.log(clickCount);
    if(clickCount==1){
        introAudio.play();
        introAudio.volume=0.5;
        instruction.classList.add("appear");
    }
    if(clickCount==2){
        instruction.classList.remove("appear");
        title.classList.add('disappear');
        caseFile.classList.add("in");
        setTimeout(sfxPlay,1500);
        function sfxPlay(){
        caseSlide.play();
        }
            next.classList.add('show');
    }
    else if(clickCount===3){
        caseFile.classList.remove("in");
        next.classList.remove('show');
        caseSlide.play();
        laptop.classList.add('reveal');
        enter.classList.add('show');
        next.classList.add('remove');
    }
    if(clickCount==4){
        laptop.classList.add('zoom');
        blackScreen.classList.add('disappear');
        air.play();
        enter.classList.remove('show');
    }

}


//clock 
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
    if(newDayCounter){document.getElementById("dayCounter").innerHTML=newDayCounter;}
    if(newMonth){document.getElementById("month").innerHTML=newMonth;}
    if(newYear){document.getElementById("year").innerHTML=newYear;}

    var day=localStorage.getItem("day") || 18;
    var dayCounter=localStorage.getItem("dayCounter") || 1;
    var month=localStorage.getItem("month") || 2;
    var year=localStorage.getItem("year") || 2019;


    if(minutes==19 && seconds==0){
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
//BG MUSIC TEMP CTRL
let bgMusic=document.getElementById('bgMusic');
let soundBtn=document.getElementById("musicCtrl");
soundBtn.addEventListener("click", bgMusicControls);
function bgMusicControls(){
    if(!bgMusic.paused){
        bgMusic.pause();
        document.getElementById("musicStatus").innerHTML=" OFF";
    }else{
        bgMusic.play();
        document.getElementById("musicStatus").innerHTML=" ON";
    }
}
//footerfx
function footerToggle(){
    document.getElementById("toggleFooter").classList.toggle("open");
    document.getElementById("footer").classList.toggle("reveal");
    document.getElementById("mask").classList.toggle("cover");
    document.getElementById('datesNstuff').classList.toggle('show');
    document.getElementById('musicCtrl').classList.toggle('show');
    
}
function footerClose(){
    document.getElementById("toggleFooter").classList.remove("open");
    document.getElementById("footer").classList.remove("reveal");
    document.getElementById("mask").classList.remove("cover");
    document.getElementById('datesNstuff').classList.remove('show');
    document.getElementById("notes").classList.add("open");
}

//notes feature
    //notes interactivity
dragNote(document.getElementById("notes"));

function dragNote(notes){

    var posA=0, posB=0, posC=0, posD=0;
    if (document.getElementById(notes.id+"header")){
        document.getElementById(notes.id+"header").onmousedown = dragMouseDown;
    }else{
        notes.onmousedown=dragMouseDown;
    }
    function dragMouseDown(n){
        n = n;
        n.preventDefault();
        posC=n.clientX; 
        posD=n.clientY;
        document.onmouseup=endMove;
        document.onmousemove=startMove;
    }
    function startMove(n){
        posA=posC-n.clientX;
        posB=posD-n.clientY;
        posC=n.clientX;
        posD=n.clientY;
        notes.style.top=(notes.offsetTop-posB)+"px";
        notes.style.left=(notes.offsetLeft-posA)+"px";
    }
    function endMove(){
        document.onmouseup=null;
        document.onmousemove=null;
    }
}
let mobilemove=document.getElementById('notesheader');
let movenote=document.getElementById('notes');
let offsetSide=0;
let offsetTop=0;

mobilemove.addEventListener('touchstart', function(e){
    var tLoc=e.targetTouches[0];
    offsetSide=tLoc.pageX-movenote.offsetLeft;
    offsetTop=tLoc.pageY-movenote.offsetTop;
});

mobilemove.addEventListener('touchmove', function(e){
    var tLoc=e.targetTouches[0];
    movenote.style.left=(tLoc.pageX-offsetSide) + 'px';
    movenote.style.top=(tLoc.pageY-offsetTop) + 'px';
});

function closeNotes(){
    document.getElementById("notes").classList.remove("open");
}

//notes main functions
notes=JSON.parse(localStorage.getItem('allNotes')) || [];
uniqueTitle=JSON.parse(localStorage.getItem('uniqueTitle')) || [];

function saved(event){
    event.preventDefault();
    let notesTitle=document.getElementById('notesTitle').value;
    let notesContent=document.getElementById('notesContent').value;

    if(uniqueTitle.includes(notesTitle)){
        let check=confirm(`Save changes to ${notesTitle}?`);
        if(check==true){
            let savedNotes=JSON.parse(localStorage.getItem('allNotes'));
        for(let i in savedNotes){
        for(let key in savedNotes[i]){
            if(savedNotes[i][key]==notesTitle){
                notes[i]['content']=notesContent;
                localStorage.setItem('allNotes',JSON.stringify(notes));
            }
        }
    }
}else{
            return;
        }
    }else{
    notes.push({
            title: notesTitle,
            content: notesContent
    })
    localStorage.setItem('allNotes', JSON.stringify(notes));
        let newBtn=document.createElement("BUTTON");
        newBtn.setAttribute('id',notesTitle);
        newBtn.setAttribute('class', 'noted');
        previewNotes.appendChild(newBtn);
        let t=document.createTextNode(notesTitle || "New Note");
        newBtn.append(t);
        uniqueTitle.push(notesTitle);
        localStorage.setItem('uniqueTitle', JSON.stringify(uniqueTitle));
        newBtn.addEventListener('click', openNote);
    }
}

function renderNotes(){
    
    notes.forEach(eachNote);

    function eachNote(indiv){
        let notesTitle=indiv['title'];
        let newBtn=document.createElement("BUTTON");
        newBtn.setAttribute('id',notesTitle);
        newBtn.setAttribute('class', 'noted');
        previewNotes.appendChild(newBtn);
        let t=document.createTextNode(notesTitle || "New Note");
        newBtn.append(t);
        newBtn.addEventListener('click', openNote);
    }
}
    function openNote(){
    let savedNotes=JSON.parse(localStorage.getItem('allNotes'));
    for(let i in savedNotes){
        for(let key in savedNotes[i]){
            if(savedNotes[i][key]==this.id){
                let m=savedNotes[i][key];
                let n=savedNotes[i]['content'];
                document.getElementById('notesTitle').value=m;
                document.getElementById('notesContent').value=n;
            }
        }
    }
}

function newNote(){
    let form=document.getElementById('notesInput');
    form.reset();
}
function removeNote(){
    let c=confirm(`Are you sure you want to delete "${notesTitle.value}"`);
    if (c==true){
    for(i in notes){
        if(notes[i]['title']==notesTitle.value){
            let x=notes.findIndex(notes=>notes.title==notesTitle.value);
            notes=notes.filter((data, idx)=> idx !=x);
            localStorage.setItem('allNotes', JSON.stringify(notes));
            let a=document.getElementById(notesTitle.value);
            a.remove();
        }
    }
    }
}


function adjust(){
let footerstuff=document.querySelectorAll('.footerstuff');
let AL=document.getElementById('AL');
footerstuff.forEach((elmt)=>{
    elmt.addEventListener('mouseenter', ()=>
    {
        AL.style.flexGrow='0';
        AL.style.width='10%';
    })
    elmt.addEventListener('mouseleave', ()=>
    {
        AL.style.flexGrow='1';
    })
})
}