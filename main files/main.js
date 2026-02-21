let notes=[];
let uniqueTitle=[];
let previewNotes=document.getElementById('previewNotes');
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