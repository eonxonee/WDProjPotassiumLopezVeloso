//onload
function loaded(){
    renderNotes();
}

//footerfx
function footerToggle(){
    document.getElementById("toggleFooter").classList.toggle("open");
    document.getElementById("footer").classList.toggle("reveal");
    document.getElementById("mask").classList.toggle("cover");
    
}
function footerClose(){
    document.getElementById("toggleFooter").classList.remove("open");
    document.getElementById("footer").classList.remove("reveal");
    document.getElementById("mask").classList.remove("cover");
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

function closeNotes(){
    document.getElementById("notes").classList.remove("open");
}

//notes main functions
const notes=JSON.parse(localStorage.getItem('allNotes')) || [];
let previewNotes=document.getElementById('previewNotes');
const uniqueTitle=JSON.parse(localStorage.getItem('uniqueTitle')) || [];

function saved(event){
    event.preventDefault();
    let notesTitle=document.getElementById('notesTitle').value;
    let notesContent=document.getElementById('notesContent').value;

    if(uniqueTitle.includes(notesTitle)){
        alert("Title used");
        return;
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
    }
}