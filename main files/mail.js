        let current=document.getElementById("currentN").innerText;
        let inbox=document.getElementById("inbox");
        let promo=document.getElementById("promo");
        let trash=document.getElementById("trash");
        let icon=document.getElementById("icon");
        let search=document.getElementById("search");
        let mac=document.getElementById("ms");
        let rad=document.getElementById("rad");
        let wind=document.getElementById("chill");
        let cont=document.getElementById("cont");
        let ew=document.getElementById("ew");

        inbox.addEventListener("click", function(){
            current="Inbox";
            icon.className="";
            icon.classList.add("fa-solid");
            icon.classList.add("fa-inbox");
            document.getElementById("currentN").innerHTML=current;
            
            mac.style.display="flex";
            rad.style.display="flex";
            wind.style.display="none";
            cont.style.display="flex";
            ew.style.display="flex";

            mac.style.pointerEvents="auto";
            rad.style.pointerEvents="auto";
            wind.style.pointerEvents="none";
            cont.style.pointerEvents="auto";
            ew.style.pointerEvents="auto";
            
        });
        promo.addEventListener("click", function(){
            current=promo.innerText;
            icon.className="";
            icon.classList.add("fa-solid");
            icon.classList.add("fa-shop");
            document.getElementById("currentN").innerHTML= current;

            mac.style.display="flex";
            rad.style.display="flex";
            wind.style.display="none";
            cont.style.display="none";
            ew.style.display="flex";

            mac.style.pointerEvents="auto";
            rad.style.pointerEvents="auto";
            wind.style.pointerEvents="none";
            cont.style.pointerEvents="none";
            ew.style.pointerEvents="auto";
        });
        trash.addEventListener("click", function(){
            current=trash.innerText;
            icon.className="";
            icon.classList.add("fa-solid");
            icon.classList.add("fa-trash");
            document.getElementById("currentN").innerHTML=current;

            mac.style.display="none";
            rad.style.display="none";
            wind.style.display="flex";
            cont.style.display="none";
            ew.style.display="none";

            mac.style.pointerEvents="none";
            rad.style.pointerEvents="none";
            wind.style.pointerEvents="auto";
            cont.style.pointerEvents="none";
            ew.style.pointerEvents="none";
        });

        mac.addEventListener("click", function(){
            document.getElementById("mclt").style.display="block";
            document.getElementById("mclt").style.pointerEvents="auto";
        })
        document.getElementById("backm").addEventListener("click", function(){
            document.getElementById("mclt").style.display="none";
            document.getElementById("mclt").style.pointerEvents="none";
        })
        document.getElementById("rad").addEventListener("click", function(){
            document.getElementById("radley").style.display="block";
            document.getElementById("radley").style.pointerEvents="auto";
        })
        document.getElementById("backr").addEventListener("click", function(){
            document.getElementById("radley").style.display="none";
            document.getElementById("radley").style.pointerEvents="none";
        })
        wind.addEventListener("click", function(){
            document.getElementById("wind").style.display="block";
            document.getElementById("wind").style.pointerEvents="auto";
        })
        document.getElementById("backw").addEventListener("click", function(){
            document.getElementById("wind").style.display="none";
            document.getElementById("wind").style.pointerEvents="none";
        })
        cont.addEventListener("click", function(){
            document.getElementById("term").style.display="block";
            document.getElementById("term").style.pointerEvents="auto";
        })
        document.getElementById("backs").addEventListener("click", function(){
            document.getElementById("term").style.display="none";
            document.getElementById("term").style.pointerEvents="none";
        })
        ew.addEventListener("click", function(){
            document.getElementById("whispher").style.display="block";
            document.getElementById("whispher").style.pointerEvents="auto";
        })
        document.getElementById("backe").addEventListener("click", function(){
            document.getElementById("whispher").style.display="none";
            document.getElementById("whispher").style.pointerEvents="none";
        })