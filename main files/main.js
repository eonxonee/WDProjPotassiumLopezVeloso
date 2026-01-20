
function footerToggle(){
    document.getElementById("toggleFooter").classList.toggle("open");
    document.getElementById("footer").classList.toggle("reveal");
    document.getElementById("mask").classList.toggle("cover");
    
}
function footerClose(){
    document.getElementById("toggleFooter").classList.remove("open");
    document.getElementById("footer").classList.remove("reveal");
    document.getElementById("mask").classList.remove("cover");
}
function noteSave(){
    let newNote=document.getElementById("notesInput").value;
    localStorage.setItem("savedNote", newNote);
    let x=localStorage.getItem("savedNote");
    console.log(x);
}