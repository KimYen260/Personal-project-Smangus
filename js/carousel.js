let curIndex = 0;
    
window.addEventListener("load", function(){
   
    document.getElementById("btnRight").onclick = function(){
        curIndex++;
        let wrap = document.querySelector(".wrap");
        wrap.style.left = -220 * curIndex + "px";
        if(curIndex == 5){
            document.getElementById("btnRight").disabled = true; 
        }
        document.getElementById("btnLeft").disabled = false; 
    }
    
    document.getElementById("btnLeft").onclick = function(){
        curIndex--;
        let wrap = document.querySelector(".wrap");
        wrap.style.left = -220 * curIndex + "px";
        if(curIndex == 0){
            document.getElementById("btnLeft").disabled = true; 
        }
        document.getElementById("btnRight").disabled = false;
    }
}, false);
